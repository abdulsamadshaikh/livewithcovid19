/*  
//Project Name: Live With Covid-19
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
 return apidata.json();

})

.then ( (actualdata) => {

  //Global Data Fetch
  const mydata = actualdata.Global;
  document.getElementById('globalNC').innerHTML = `${mydata.NewConfirmed}`;
  document.getElementById('globalTC').innerHTML = `${mydata.TotalConfirmed}`;
  document.getElementById('globalND').innerHTML = `${mydata.NewDeaths}`;
  document.getElementById('globalTD').innerHTML = `${mydata.TotalDeaths}`;
  document.getElementById('globalRC').innerHTML = `${mydata.NewRecovered}`;
  document.getElementById('globalTR').innerHTML = `${mydata.TotalRecovered}`;

  //China Data Fetch
  const mydatachina = actualdata.Countries[35];
  document.getElementById('chinaTC').innerHTML = `${mydatachina.TotalConfirmed}`;
  document.getElementById('chinaTD').innerHTML = `${mydatachina.TotalDeaths}`;
  document.getElementById('chinaTR').innerHTML = `${mydatachina.TotalRecovered}`;
  //console.log(actualdata);

  //Pakistan Data Fetch
  const mydatapk = actualdata.Countries[126];
  document.getElementById('pkTC').innerHTML = `${mydatapk.TotalConfirmed}`;
  document.getElementById('pkTD').innerHTML = `${mydatapk.TotalDeaths}`;
  document.getElementById('pkTR').innerHTML = `${mydatapk.TotalRecovered}`;

  //UK Data Fetch
  const mydatauk = actualdata.Countries[176];
  document.getElementById('ukTC').innerHTML = `${mydatauk.TotalConfirmed}`;
  document.getElementById('ukTD').innerHTML = `${mydatauk.TotalDeaths}`;
  document.getElementById('ukTR').innerHTML = `${mydatauk.TotalRecovered}`;

  //USA Data Fetch
  const mydatausa = actualdata.Countries[177];
  document.getElementById('usaTC').innerHTML = `${mydatausa.TotalConfirmed}`;
  document.getElementById('usaTD').innerHTML = `${mydatausa.TotalDeaths}`;
  document.getElementById('usaTR').innerHTML = `${mydatausa.TotalRecovered}`;

})

.catch( (error) => {
  console.log(`Error Reported: ${error}`);
});

