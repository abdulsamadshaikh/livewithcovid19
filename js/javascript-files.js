/*  
Project Name: Live With Covid-19
Project URI: 
Description: The Covid-19 App designed and developed for practicing purpose. It is an open-source project. You can freely use it for educational purposes. If you are intending to use it with your commercial projects then you will need permission.
Author: Abdul Samad
Author URI: https://www.linkedin.com/in/abdulsamad0fficial/
Version: 0.1
Tags: API, JavaScript, Jquery, Ajax, Mobile-friendly, Bootstrap-4, All-Devices-Supported. 
Name: Live With Covid-19
*/

// Livewithcovid19 API's and custom JS Files
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

//dynamically load js files 
loadjscssfile("js/includes/custom.js", "js") 
loadjscssfile("js/includes/covidglobal.js", "js") 
loadjscssfile("js/includes/covidgeneral.js", "js")