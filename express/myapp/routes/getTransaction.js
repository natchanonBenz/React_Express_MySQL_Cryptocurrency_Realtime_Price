var express = require('express');
var router = express.Router();
var mysql = require("mysql");
/* GET users listing. */

router.get('/', function (req, res, next) {
  
    var resp;
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'cryptocurrency'
    });
    connection.query('select transaction.transactionId, transaction.timeStamp, transaction.coinName, transaction.tradeType, transaction.bidOffer, transaction.bidOffer,transaction.amount, transaction.bidOffer*transaction.amount AS totalPrice from transaction',function (error,results,field){
        if(error == null){
            console.log('== Get Response ==')
        
            resp = results
     
            res.send(resp);
    
            res.end;
        }

        else{
            console.log('== Service is error ==')
        }
    
    });
    
});

module.exports = router;
