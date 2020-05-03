/*  
//Project Name: Live With Covid-19
Project URI: 
Description: The Covid-19 App designed and developed for practicing purpose. It is an open-source project. You can freely use it for educational purposes. If you are intending to use it with your commercial projects then you will need permission.
Author: Abdul Samad
Author URI: https://www.linkedin.com/in/abdulsamad0fficial/
Version: 0.1
Tags: API, JavaScript, Jquery, Ajax, Mobile-friendly, Bootstrap-4, All-Devices-Supported. 
Name: Live With Covid-19
*/

//Onload Caution Popup
$(window).on('load',function(){
    var delayMs = 0; // delay in milliseconds

    setTimeout(function(){
        $('#onload').modal('show');
    }, delayMs);
});  

// Table filters and Events/Styles
$(document).ready(function(){
 $("tbody").attr("id", "myTable");
 $("tr:first-child").attr("id", "heading");
 $("tr:first-child").css({"background-color": "rgba(130, 91, 58)", "color": "#fff"});
 $("tr:first-child th:first-child").css("text-transform", "uppercase");
  $("#countrySearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      //$("tr:first-child").prop( "disabled", true );
      $("#heading").show();
    });
  });
});

//Currunt Date
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

//Webpage Preloader
var preloader = document.getElementById('loading');
      function myFunction(){
          preloader.style.display = 'none';
    }
    
//Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


// function numberWithCommas(number) {
//     var parts = number.toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return parts.join(".");
// }
// $(document).ready(function() {
//   $("#usaTC").each(function() {
//     var num = $(this).text();
//     var commaNum = numberWithCommas(num);
//     $(this).text(commaNum);
//   });
// });


// var = usaTC;
// document.body.innerHTML = usaTC.toLocaleString();
// // 1,557,564,534