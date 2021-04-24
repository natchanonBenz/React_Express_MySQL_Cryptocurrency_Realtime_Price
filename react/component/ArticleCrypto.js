import React, { useState } from 'react'
import CoinDropDownList from './CoinDropDownList';
import GraphApex from './GraphApex';
import FormData from './FormData';
import CoinImg from './Image/cryptocurrency.png';
import Axios from 'axios';

function ArticleCrypto(props) {

    const initFname = 'XXX';
    const initialStart = '2021-03-01';
    const initialEnd = '2021-04-15';
    const initSym = props.CoinName;
    const initCoinPrice = props.CoinPrice;
    var screenDisplay;

    const [CoinPrice, SetPrice] = useState(initCoinPrice);
    const [FullName, SetFname] = useState(initFname);
    const [SymbolName, SetSym] = useState(initSym);
    const [EndDate, SetEndDate] = useState(initialEnd);
    const [StartDate, SetStartDate] = useState(initialStart);

    if (props.ScreenName == 1) {
        screenDisplay = ''
    } else {
        screenDisplay = 'none'
    }

    function onChange(value, FName) {
        Axios.get('https://api.bitkub.com/api/market/ticker')
            .then(res => {
                let temp = "res.data." + value + ".last";
                SetPrice(eval(temp) + " ฿")
                SetFname(FName)
                SetSym(value)
            })
            .catch(
                err => {
                    console.log(err)
                });
    }

    function SubmitForm(start, end) {
        SetEndDate(end);
        SetStartDate(start);
    }

    return (
        <div class="row" id="crypto_screen" style={{ display: screenDisplay }}>
            <div class="col-1"></div>
            <div class="col-3">
                <div class="card" style={{ width: "100%" }}>
                    <img class="card-img-top" src={CoinImg} style={{ width: "50%", height: "50%", marginLeft: "25%", marginTop: "10%", marginBottom: "10%" }} alt="Card image cap"></img>
                    <div class="card-body" style={{ backgroundColor: "lightgray" }}>
                        <p class="card-text">Symbol: {SymbolName}</p>
                        <p class="card-text">Full Name: {FullName}</p>
                        <p class="card-text">Price: {CoinPrice}</p>
                    </div>
                    <CoinDropDownList onChange={onChange.bind(this)} CoinName={FullName} />
                </div>
            </div>
            <div class="col-6">
                <GraphApex start={StartDate} end={EndDate} />
                <FormData onClick={SubmitForm.bind(this)} />
            </div>
            <div class="col-1">
            </div>
        </div>

    );

}

export default ArticleCrypto