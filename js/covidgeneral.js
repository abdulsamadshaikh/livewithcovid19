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
// Covid-19 All Countries Live data API

function fetch(){
	$.get("https://api.covid19api.com/summary",

		function (data){
			var tableval = document.getElementById('tableval');

			for(var i=1; i<(data['Countries'].length); i++){
				var x = tableval.insertRow();
				x.insertCell(0);

				tableval.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
				tableval.rows[i].cells[0].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[0].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[0].style.textTransform = 'uppercase';
				tableval.rows[i].cells[0].style.color = '#fff';
				tableval.rows[i].cells[0].style.fontWeight = '600';

				x.insertCell(1);
				//tableval.rows[i].cells[1].innerHTML = data['Countries'][i-1]['Date'];
				tableval.rows[i].cells[1].innerHTML = output;
				tableval.rows[i].cells[1].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[1].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[1].style.color = '#fff';

				x.insertCell(2);
				tableval.rows[i].cells[2].innerHTML = data['Countries'][i-1]['NewConfirmed'];
				tableval.rows[i].cells[2].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[2].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[2].style.color = '#fff';

				x.insertCell(3);
				tableval.rows[i].cells[3].innerHTML = data['Countries'][i-1]['NewDeaths'];
				tableval.rows[i].cells[3].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[3].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[3].style.color = '#fff';

				x.insertCell(4);
				tableval.rows[i].cells[4].innerHTML = data['Countries'][i-1]['NewRecovered'];
				tableval.rows[i].cells[4].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[4].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[4].style.color = '#fff';

				x.insertCell(5);
				tableval.rows[i].cells[5].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
				tableval.rows[i].cells[5].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[5].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[5].style.color = '#fff';

				x.insertCell(6);
				tableval.rows[i].cells[6].innerHTML = data['Countries'][i-1]['TotalDeaths'];
				tableval.rows[i].cells[6].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[6].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[6].style.color = '#fff';

				x.insertCell(7);
				tableval.rows[i].cells[7].innerHTML = data['Countries'][i-1]['TotalRecovered'];
				tableval.rows[i].cells[7].style.background = 'rgba(0,0,0,.075)';
				tableval.rows[i].cells[7].style.border = 'rgb(130, 91, 58)';
				tableval.rows[i].cells[7].style.color = '#fff';

				//console.log(tableval);

			}
		}
		
	);
}

