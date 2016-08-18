var projectName = "Live/Work";
var versionNumber = "0.0.1";
var currentDate = new Date(); // Create Date
var currentTime = currentDate.getFullYear() + '-' + // Set getFullYear
	(currentDate.getMonth() + 1) + '-' + //Set Month
	currentDate.getDate() + ' at ' + // Set day of the Month
	currentDate.getHours() + ':' + //Set hours military 
	currentDate.getMinutes() + ':' + // Set minutes 
	currentDate.getSeconds();

	
var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML= '<h1>Hello, ' + userName +'!</h1>' + '<p>' + projectName + ' ' + versionNumber + 'accessed on: ' + currentTime + '</p>';
