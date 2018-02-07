// Group Discussion Questions:

// Q: How would you display a random, whole number between 1 and 10?
// var num = Math.floor(Math.random() * 10) + 1
// console.log(num)

// Q:Why would you want to select a random name from an array and display it
//to select a raffle winner?? do you mean how would you??

// Q:What is the built in JavaScript method to find out the date and time?
//Date()

//Q:How would you display the current year in the console?
// var today = new Date();
// var yyyy = today.getFullYear();
// console.log(yyyy)

// Q:How would you display the current hour in the console, after 2 seconds?
// var today = new Date();
// var hours = today.getHours();
// var minutes = today.getMinutes();
// var seconds = today.getSeconds();
// console.log(hours + ":" + minutes + ":" + (seconds + 2))

// Q:How would you display the current hour with a DOM event listener?
// document.getElementById("myBtn").addEventListener("click", displayHour);

// What are 3 ways we can add events in JavaScript?
// inline attributes (onlclick), event listeners, jQuery



// Exercise:
//Steps 1-5: Loop through an array of 5 numbers with 2 decimal places,
//loop through them and add them as whole numbers into a new array
var numArray = [1.23, 2.54, 4.34, 6.34, 2.45]
var newArray = []
for(var i = 0; i < numArray.length; i++){
	numArray[i] = Math.floor(numArray[i])
	newArray.push(numArray[i])
}
console.log(newArray)

//Step 6: Create 10 random numbers between 1 and 100 and add them to an array
function createNumbers(){
	//establish this array of random numbers we will be appending to
	var randomNumbers = []
	//utilize the while loop to set a condition where it creates numbers until the length of our array reaches 10
	while(randomNumbers.length < 11){
		//create the number
		var number = Math.floor((Math.random() * 100) + 1)
		//add these random numbers into our empty array, until it fills up with ten(per the condtion in our while loop!)
		randomNumbers.push(number) 
	}
	console.log(randomNumbers)
}
console.log(createNumbers())

//Step 7-10: Write out a function that creates variables to store the date and time,
//have it run every second and use an eventlistener to display this upon clicking a button:
var DOM = document.getElementById("DOM")
var newDiv = document.createElement("div")


var button = document.createElement("button")
button.textContent = "Click here to see the date"
button.setAttribute("id","dateButton")
newDiv.className = 'btnDiv'
button.className = 'btn-primary'

newDiv.appendChild(button)
DOM.appendChild(newDiv)

document.getElementById("dateButton").addEventListener("click", function(){
    var today = new Date()
	var hours = today.getHours()
	var minutes = today.getMinutes()
	var seconds = today.getSeconds()
	var month = today.getMonth()
	var day = today.getDay()
	var year = new Date().getFullYear().toString().substr(-2);
	var todaysDate = month + "/" + day + "/" + year
	var time = hours + ":" + minutes + ":" + seconds
	alert(todaysDate + "\n" + time)
});
















