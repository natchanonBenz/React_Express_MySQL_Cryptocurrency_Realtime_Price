import React, {useEffect } from 'react'
import Axios from 'axios';

function ArticleTransasction(props) {
    
    var screenDisplay 

    if(props.ScreenName==1){
        screenDisplay = 'none'
    }
    else{
        screenDisplay = ''
    }
    
    function setTable(resp) { 
        try {
            document.getElementById('transactionTable').innerHTML = ""
        }
        catch (err) {
            console.log('== error clean table ==')
        }
        
        let rowNum = resp.data.length
        let colNum = Object.keys(resp.data[0]).length
        let field = Object.keys(resp.data[0])
        let i, j;
        let tableTransaction = document.getElementById('transactionTable');
        for (i = 0; i < rowNum + 1; i++) {
            let tr = document.createElement('tr');
            for (j = 0; j < colNum; j++) {
                let td = document.createElement('td');
                if (i == 0) {
                    td.innerHTML = field[j]
                    td.setAttribute('class','font-weight-bold');
                }
                else {
                    let tempField = 'resp.data[i-1].' + field[j]       
                    td.setAttribute('name', field[j] + "_" + j);
                    td.innerHTML = eval(tempField)
                    if(field[j]=='tradeType'){
                        console.log(tempField)
                        if(eval(tempField)==='BUY'){
                            td.setAttribute('class','font-weight-bold text-success');
                        }
                        else{
                            td.setAttribute('class','font-weight-bold text-danger');
                        }
                    }                       
                }
                tr.appendChild(td)
            }
            tableTransaction.appendChild(tr)          
        }
    }

    useEffect(() => {
        Axios.get('http://localhost:2000/getTransaction')
            .then(res => {         
                setTable(res)          
            })
            .catch(
                err => {
                    console.log(err)
                });
    }, [])

    return (
        <div class="row"  style={{display:screenDisplay}}>
            <div class="col-1"></div>
            <div class="col-10">
                <table class="table table-striped" id="transactionTableMain" style={{marginTop: "1%"}} >
                <tbody id = "transactionTable">                  
                </tbody>              
              </table>
                <div class="col-1"></div>
            </div>
        </div>
    );
}

export default ArticleTransasction