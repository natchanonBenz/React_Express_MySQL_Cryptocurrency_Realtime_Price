import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import $ from "jquery";

function CoinDropDownList(props) {
  const [Symbol, SetSymbol] = useState([]);

  useEffect(() => {
    Axios.get('https://api.bitkub.com/api/market/symbols')
      .then(res => {
        console.log(res.data.result)
        SetSymbol(res.data.result)
      })
      .catch(
        err => {
          console.log(err)
        });
  }, [])

  function onCoinChange(e) {
    let name = getDescription(e.target.value);
    props.onChange(e.target.value, name);
  }

  function getDescription(id) {
    let name = $("#" + id).attr('name')
    return name
  }


  return (
    <select onChange={onCoinChange.bind(this)} class="custom-select" id="inputGroupSelect01">
      <option selected>Please choose a token</option>
      {
        Symbol.map(i => (<option value={i.symbol} key={i.symbol} id={i.symbol} name={i.info}>{i.symbol}</option>))
      }
    </select>
  );

}

export default CoinDropDownList