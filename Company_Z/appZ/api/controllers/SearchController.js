module.exports = {

  showSearch: function (req, res) {
    Search.find({}).exec(function (err, search17) {
      if (err) {
        res.send(500, {data: err});
      } else {
        res.view('pages/showSearch', {search17: search17});
      }
    })
  },
};

