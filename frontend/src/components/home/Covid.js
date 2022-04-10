import React from "react";
import './covid.css'

function CovidData() {

    function getCovidData() {
        var country = ((new Date()).toString().split('(')[1].split(" ")[0])
        fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector(".country").innerHTML = data.country
            document.querySelector(".cases").innerHTML = "Total number of cases: "+data.cases
            document.querySelector(".deaths").innerHTML = "Total number of deaths: "+data.deaths
            document.querySelector(".recovered").innerHTML = "Total number of recovered: "+data.recovered
            document.querySelector(".cases-today").innerHTML = "Total number of cases today: "+data.todayCases
            document.querySelector(".deaths-today").innerHTML = "Total number of deaths today: "+data.todayDeaths
            document.querySelector(".recovered-today").innerHTML = "Total number of recovery today: "+data.todayRecovered
            document.querySelector(".tests").innerHTML = "Total number of tests taken: "+data.tests
        });
    }

    getCovidData()

    
    return (
        <div className="covid-data">
            <h1 className="country"></h1>
            <p className="cases"></p>
            <p className="deaths"></p>
            <p className="tests"></p>
            <p className="recovered"></p>
            <p className="cases-today"></p>
            <p className="deaths-today"></p>
            <p className="recovered-today"></p>
        </div>
    );
}

export default CovidData;
