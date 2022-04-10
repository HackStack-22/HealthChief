import React from 'react'
import './disease-form.css';
import { Diseases } from '../data/diseases';

export default function DiseaseForm(props) {
    const disease = props.data;
    var fname;
    var ftype;
    var option;
    var formName;
    var endpoints;
    var result = '';
    var x = 0;
    var loggedInUser = localStorage.getItem("username");
    if(!loggedInUser)
        loggedInUser = ""

    function submitResult() {

        var allInputs = document.querySelectorAll(".disease-form-input input")
        var fields;
        allInputs.forEach((element, index) => {
            if (index === 0)
                fields = "{"

            fields = fields + '"' + formName[index] + '":' + '"' + element.value
            if (index !== allInputs.length - 1)
                fields = fields + '",'

            if (index === allInputs.length - 1)
                fields = fields + '"}'
        })
        console.log(fields)

        fetch(endpoints, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body" : fields
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response === 0) {
                    result = `${loggedInUser} You dont have ${disease}.`
                } else {
                    result = `${loggedInUser} You have ${disease}.`
                }
                alert(result)
            })
            .catch(err => {
                console.error("error: " + err);
            });
    }

    return (
        <div className='disease-form'>
            <h1>{disease}</h1>
            <div className='disease-form-container'>
                {Diseases.forEach((ele) => {
                    if (ele.name === disease) {
                        fname = ele.fname
                        ftype = ele.ftype
                        option = ele.option
                        formName = ele.formName
                        endpoints = ele.endpoints
                    }
                })}

                {fname.map((ele, index) => {
                    if (ftype[index] !== 'option') {
                        return (
                            <div className='disease-form-input'>
                                <h2>{ele}</h2>
                                <input name={ele} type={ftype[index]} placeholder={ele} />
                            </div>
                        )
                    } else {
                        x += 1
                        return (
                            <div className='disease-form-input'>
                                <h2>{ele}</h2>
                                <label>{option[x - 1]}</label>
                                <input name={ele} type='text' placeholder={ele} />
                            </div>
                        )
                    }
                })}
                <button className='check-btn' onClick={submitResult}>Check</button>

                {/* <div className='display-results'>
                    <h1>Heyy {loggedInUser} Results are here</h1>
                    <h2 id='results'>{result}</h2>
                </div> */}

            </div>
        </div>
    )
}
