module.exports = {

    attributes: {

    id: {
        type: 'number',
        required : true,
        columnName: 'userid'
    },
    partId:{
        type: "number"
    },
    jobName:{
        type: "string"
    },
    qty:{
        type: "number"
    },
    date:{
        type: 'ref', columnType: "datetime"
    },
    time:{
        type: 'ref', columnType: "datetime"
    },
    result:{
        type: "string"
    }
  },
    datastore: 'mysqldb',
    tableName: "jobparts"
};


