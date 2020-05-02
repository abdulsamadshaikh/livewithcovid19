/*  
Project Name: Live With Covid-19
Project URI: 
Description: The Covid-19 App designed and developed for practicing purpose. It is an open-source project. You can freely use it for educational purposes. If you are intending to use it with your commercial projects then you will need permission.
Author: Abdul Samad
Author URI: https://www.linkedin.com/in/abdulsamad0fficial/
Version: 0.1
Tags: Mobile-friendly, Bootstrap-4, All-Devices-Supported. 
Name: Live With Covid-19
*/

// The Fetch API:
// Covid-19 Global Live data API

fetch('https://api.covid19api.com/summary')

.then( (apidata) => {
 //console.log(apidata);
 return apidata.json();

})

.then ( (actualdata) => {

  const mydata = actualdata.Global;
  document.getElementById('globalNC').innerHTML = `${mydata.NewConfirmed}`;
  document.getElementById('globalTC').innerHTML = `${mydata.TotalConfirmed}`;
  document.getElementById('globalND').innerHTML = `${mydata.NewDeaths}`;
  document.getElementById('globalTD').innerHTML = `${mydata.TotalDeaths}`;
  document.getElementById('globalRC').innerHTML = `${mydata.NewRecovered}`;
  document.getElementById('globalTR').innerHTML = `${mydata.TotalRecovered}`;

})

.catch( (error) => {
  console.log(`Error Reported: ${error}`);
});

