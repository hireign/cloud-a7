module.exports = {

  signup: async function (req, res) {

    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    Auth.create({id: 1, name: name, emailid: email, password: password}).exec(function (err) {
      if (err) {
        res.json(err)
      }
      res.redirect("/homepage")
    })
  },

  login: async function (req, res) {

    let email = req.query.uname
    let password = req.query.psw
    let jobname = req.query.hidTest;

    var s = await Auth.find().where({
      and:
        [
          {emailid: email},
          {password: password}
        ]
    });
    console.log(s);
    if(s.length==0){
      res.view("pages/purchaseStatus", {result: {msg: "User id or password is wrong"}});
    }
    userid = s[0].id

    let jobs;
    const request2 = require('request-promise');
    await request2('http://129.173.67.214:1337/fetchparts_api?jobs=' + jobname,
      function (error, response, body) {
        console.log(body)
        jobs = JSON.parse(body);
      });

    let partsAvail = true;
    let counter = 0;
    jobs.forEach(function (job) {

      const request = require('request-promise');
      request('https://t7rh3ewhta.execute-api.us-east-1.amazonaws.com/Dev/getQtyById17/' + job.id,
        async function (error, response, body) {

          if (parseInt(job.qty) > parseInt(body)) {
            partsAvail = false;
            res.view("pages/purchaseStatus", {result: {msg: "parts not available"}});
          }
          counter++;
          if (counter === jobs.length && partsAvail === true) {


            var s1 = await Jobparts.find().where({
              and:
                [
                  {id: userid},
                  {jobName: jobname}
                ]
            });

            if (s1.length < 1) {
              jobs.forEach(async function (job) {
                var today = new Date();
                const DATE_FORMATER = require('dateformat');
                var time = DATE_FORMATER(today, "HH:MM:ss");

                Jobparts.create({
                  id: userid, partId: job.id, jobName: jobname,
                  qty: job.qty, date: today, time: time, result: "sucess"
                }).exec(function (err) {

                  if (err) {
                    res.json(err)
                  }

                  let b = {
                    id: job.id,
                    jobName: jobname,
                    userId: userid,
                    qty: job.qty
                  }

                  console.log("this is b" + b);

                  const request = require('request');

                  const options = {
                    url: 'https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/order/addorder',
                    json: true,
                    body: {
                      partId: job.id,
                      jobName: jobname,
                      userId: userid,
                      qty: job.qty
                    }
                  };

                  request.post(options, (err, res, body) => {
                    if (err) {
                      return console.log(err);
                    }
                    console.log(`Status: ${res.statusCode}`);
                    console.log(body);
                  });

                  const options1 = {
                    url: 'https://t7rh3ewhta.execute-api.us-east-1.amazonaws.com/Dev/insertOrder17',
                    json: true,
                    body: {
                      id: job.id,
                      jobName: jobname,
                      userId: userid,
                      qty: job.qty
                    }
                  };

                  request.post(options1, (err, res, body) => {
                    if (err) {
                      return console.log(err);
                    }
                    console.log(`Status: ${res.statusCode}`);
                    console.log(body);
                  });
                  res.view("pages/purchaseStatus", {result: {msg: "inserted..!"}});
                })
              })
            } else {
              res.view("pages/purchaseStatus", {result: {msg: "can not order more part for same job"}});
            }
          }
        })
    });

  },

  fetchjobs: async function (req, res) {

    const request = require('request');
    request('https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/alljobs', function (error, response, body) {
    body=JSON.parse(body);
    res.send(body.message);
    });
  },

  fetchparts: async function (req, res) {

    let jobname = req.query.searchjob

    if (!jobname) {
      jobname = req.query.jobs
    }
    console.log(jobname);
    let joblist;
    const request1 = require('request-promise');





 //---------- json property undefined !! Dont know why!  
    await request1('https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/getparts?jobName=' + jobname+"", function (err, httpResponse, body) {
    console.log("body:"+body) 
    console.log("message"+body.message);
    body=JSON.parse(body);
    console.log("message"+body.message);
    if (body.message.length > 0) {
        joblist = body.message;
      console.log(joblist)
        var today = new Date();
        const DATE_FORMATER = require('dateformat');
        var time = DATE_FORMATER(today, "HH:MM:ss");

        Search.create({id: jobname, date: today, time: time, result: "sucess"}).exec(function (err) {

          if (err) {
            res.json(err)
          }
        })
      } else {
        res.send("can not find parts inforamtion for job : " + jobname)
      }
    })

    var data = [];

    var l = joblist.length
    var i = 0

    joblist.forEach(async function (arrayItem) {

      let partid = arrayItem.partId
      const request = require('request-promise');
      await request('https://t7rh3ewhta.execute-api.us-east-1.amazonaws.com/Dev/getPartById17/' + partid, function (error, response, body) {

        data.push({
          id: JSON.parse(body)[0].partId,
          partName: JSON.parse(body)[0].partName,
          qty: arrayItem.qty
        });

        i = i + 1

        if (i === l) {
          console.log(data);
          res.view("pages/orderparts", {parts: data})
        }
      });
    });
  },

  fetchparts_api: async function (req, res) {

    let jobname = req.query.jobs
    let joblist;
    const request1 = require('request-promise');

    await request1('https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/getparts?jobName=' + jobname, function (err, httpResponse, body) {
    body=JSON.parse(body);  
    joblist = body.message;
    })
    var data = [];

    var l = joblist.length
    var i = 0

    joblist.forEach(async function (arrayItem) {
      let partid = arrayItem.partId
      console.log("partid"+partid);
      const request = require('request-promise');
      await request('https://t7rh3ewhta.execute-api.us-east-1.amazonaws.com/Dev/getPartById17/' + partid, function (error, response, body) {
        console.log("before"+body);
        data.push({
          id: JSON.parse(body)[0].partId,
          partName: JSON.parse(body)[0].partName,
          qty: arrayItem.qty
        });
        i = i + 1

        if (i === l) {
          res.json(data)
        }
      });
    });
  },

};

