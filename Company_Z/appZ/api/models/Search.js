module.exports = {

  attributes: {

    id: {
        type: 'string',
        required : true,
        columnName: 'jobName'
    },
    date:{
        type: 'ref', columnType: "datetime"
    },
    time:{
        type: 'ref', columnType: "datetime"
    },
  },
    datastore: 'mysqldb',
    tableName: "search"
};

