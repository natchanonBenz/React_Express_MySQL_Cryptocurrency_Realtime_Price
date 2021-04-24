-- Create Table Query

CREATE TABLE Transaction
(
transactionId int,
timeStamp varchar(255),
coinName varchar(255),
tradeType varchar(255),
bidOffer varchar(255),
amount varchar(255),
price varchar(255)
) ENGINE = InnoDB DEFAULT CHARSET = utf8

-- Insert value Query

INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('1', CURDATE(), 'ADA', 'BUY', '35','10');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('2', CURDATE(), 'BNB', 'BUY', '15000','2');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('3', CURDATE(), 'BTC', 'BUY', '15000000','0.0004');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('4', CURDATE(), 'BTC', 'SELL', '17000000','0.0025');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('5', CURDATE(), 'ADA', 'BUY', '39', '40');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('6', CURDATE(), 'ADA', 'BUY', '32', '25');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('7', CURDATE(), 'BNB', 'SELL', '15000', '2');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('8', CURDATE(), 'BTC', 'BUY', '125000', '0.0004');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('9', CURDATE(), 'ADA', 'SELL', '50', '30');
INSERT INTO transaction (transactionId, timeStamp, coinName,tradeType,bidOffer,amount)
VALUES ('10', CURDATE(), 'ADA', 'SELL', '40', '20');

-- Retriving Query 

select transaction.transactionId, transaction.timeStamp, transaction.coinName, transaction.tradeType, transaction.bidOffer, transaction.bidOffer,transaction.amount, transaction.bidOffer*transaction.amount AS totalPrice from transaction