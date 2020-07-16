module.exports = {

    attributes: {

    id: {
        type: 'number',
        required : true,
        columnName: 'id'
    },
    name:{
        type: "string"
    },
    emailid:{
        type: "string"
    },
    password:{
        type: "string"
    }
  },
    datastore: 'mysqldb',
    tableName: "auth"
};

