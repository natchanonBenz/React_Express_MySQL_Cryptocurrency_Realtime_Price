import React from 'react'
import $ from "jquery";

function FormData(props) {

    function onclick_submit() {
        let start = $("#StartDate").val();
        let end = $("#EndDate").val();
        props.onClick(start, end);
    }

    return (
        <div class="row">
            <div class="col-5">
                <label for="exampleInputEmail1">Start Date</label>
                <input type="date" class="form-control" id="StartDate" aria-describedby="StartHelp" placeholder="Enter Start Date"></input>
            </div>
            <div class="col-5">
                <label for="exampleInputEmail1">End Date</label>
                <input type="date" class="form-control" id="EndDate" aria-describedby="EndHelp" placeholder="Enter End Date"></input>
            </div>
            <div class="col-2">
                <button style={{ width: "100%", height: "100%" }} onClick={onclick_submit.bind(this)} type="submit" class="btn btn-warning">Submit</button>
            </div>
        </div>
    );
}

export default FormData