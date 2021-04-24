import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import Axios from 'axios';

function GraphApex(props) {

  var ListKey_Date = [];
  var ListValue_Price = [];
  var StartDate = props.start;
  var EndDate = props.end;

  useEffect(() => {
    let url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + StartDate + "&end=" + EndDate

    Axios.get(url)
      .then(res => {
        let object = res.data.bpi
        let TempObject = Object.entries(object);

        for (let i = 0; i < TempObject.length; i++) {
          ListKey_Date.push(TempObject[i][0]);
          ListValue_Price.push(TempObject[i][1]);
        }
      })
      .catch(
        err => {
          console.log(err)
        });

    var options = {
      series: [{
        name: "Price ",
        data: ListValue_Price
      }],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },

      title: {
        text: 'Bitcoin Price Index',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: ListKey_Date,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

  }, [StartDate, EndDate])

  return (
    <div>
      <div id="chart"></div>
    </div>
  );

}

export default GraphApex