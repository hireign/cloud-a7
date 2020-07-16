const db = require('../db/sql')

const allJobs = (req, res) => {
    let sql='SELECT * FROM jobs';
    let query=db.query(sql,(err,job)=>{
        if(err){
            throw err;
        }
        console.log(job);
        res.send(JSON.stringify(job));
    });
}

const addJob = (req, res) => {
    console.log("POST called");
    if(!req.body.jobName || !req.body.partId || !req.body.qty){
        res.status(400).send('name of the jobs, parts id and quentity required.');
    }else{
        let sql="select * from jobs where jobName = '"+req.body.jobName+"' and partId= "+req.body.partId;
        let query=db.query(sql,(err,job)=>{
            if(err){
                throw err;
            }
            if(job==""){
                let sql="insert into jobs values ('"+req.body.jobName+"',"+req.body.partId+","+req.body.qty+")";
                let query=db.query(sql,(err,job)=>{
                    if(err){
                        throw err;
                    }
                    res.send({"message":true});
                });
            } else{ 
                res.status(404).send('Job with name '+ req.body.jobName+ ' and part id '+req.body.partId+' already exists');
            }
        });
    }
}

const deleteJob = (req,res)=>{
    let sql="delete from jobs where jobName = '"+req.body.jobName+"' and partId= "+req.body.partId;
    let query=db.query(sql,(err,j)=>{
        if(err){
            throw err;
        }
        res.send({"message":true});
    });
}

const editJob = (req,res) => {
    if(!req.body.jobName || !req.body.partId || !req.body.qty){
        res.status(400).send('name of the jobs, parts id and quentity required.');
    }else{
        let sql="select * from jobs where jobName = '"+req.body.jobName+"' and partId= "+req.body.partId;
        let query=db.query(sql,(err,job)=>{
            if(err){
                throw err;
            }
            if(job==""){
                res.status(404).send('Job with name '+ req.body.jobName+ ' and part id '+req.body.partId+' not found.');
            } else{ 
                let sql="update jobs set qty ="+req.body.qty+" where jobName='"+req.body.jobName+"' and partId= "+req.body.partId;
                let query=db.query(sql,(err,job)=>{
                    if(err){
                        throw err;
                    }
                    res.send({"message":true});
                });            
            }
        });
    }
}

const getOneJob = (req,res) => {
    let sql="select * from jobs where jobName = '"+req.query.jobName+"' and partId= "+req.query.partId;
    let query=db.query(sql,(err,job)=>{
        if(err){
            throw err;
        }
        console.log(job);
        if(job=="") {
            res.status(404).send('Job with name '+ req.query.jobName+ ' and part id '+req.query.partId+' was not found');
        }else{
        res.send(job);
        }
    });
}

const getJobs = (req,res) => {
    let sql="select * from jobs where jobName = '"+req.query.jobName+"'";
    let query=db.query(sql,(err,job)=>{
        if(err){
            throw err;
        }
        console.log(job);
        res.send(job);
    });
}

module.exports.getOneJob = getOneJob;
module.exports.getJobs = getJobs;
module.exports.editJob = editJob;
module.exports.deleteJob = deleteJob;
module.exports.allJobs = allJobs;
module.exports.addJob = addJob;

