const { NULL } = require("mysql/lib/protocol/constants/types");

exports.dbConfig = {
    'user': 'DHRM',
    'password': '1234',
    'server': 'RAMANASABARI',


    options: {
    port: 1433,
    enableArithAbort: false,
    encrypt: false,
    database: 'MST_COMPANY',
    instance:'SQLEXPRESS',
    rowCollectionOnDone: true,
    useColumnNames: false,  
    trustServerCertificate: false
    }
    };