console.log("hello from values");

//global variables in here

var projectName = "Live/Work";
var versionNumber = "0.0.1";
var currentDate = new Date(); // Create Date
var currentTime = currentDate.getFullYear() + '-' + // Set getFullYear
	(currentDate.getMonth() + 1) + '-' + //Set Month
	currentDate.getDate() + ' at ' + // Set day of the Month
	currentDate.getHours() + ':' + //Set hours military 
	currentDate.getMinutes() + ':' + // Set minutes 
	currentDate.getSeconds();

if(currentDate.getDay() > 5 || currentDate.getDay() === 0){
	
	}
else{
	//when are work hours?
	var workStart = 9;
	var workEnd = 17;
}

var testG = "THIS IS A GLOBAL FROM VALUES";

//$(document).ready(function(){
	var work_start_time;
	var work_end_time;
    $("select.work_start_time").change(function(){
        work_start_time = $(".work_start_time option:selected").val();
        alert("You have selected the time - " + work_start_time);
    });

    $("select.work_end_time").change(function(){
        work_end_time = $(".work_end_time option:selected").val();
        alert("You have selected the time - " + work_end_time);
    });

    $("#save").on("click", function(){updateSettings(work_start_time, work_end_time)});

	function updateSettings(newstart, newend){
		workStart = newstart;
		workEnd = newend;
		console.log("work hours are now" + workStart + "-" + workEnd);
}
//});


