// MAKE SURE SCRIPT TAG IS IN .html!!
console.log("hello there!"); 

//This is the boy bands array
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

//This is the vegetables array
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform - the if statement changes the number of loops to be in line with the array with the most elements
var loopCount = ("");

if (bands.length >= vegetables.length) {
	loopCount = bands.length;
}	else { 
	loopCount = vegetables.length
}

// Reference to the appropriate DOM element for bands
var bandContainer = document.getElementById("boy-bands");

// Reference to the appropriate DOM element for vegetables
var veggieContainer = document.getElementById("vegetables");

// Start looping
// 1st declare variable i which will act as the counter as the loop cycles through the array and log the content of the index
// 2nd define the limit on the loop (basicallay, how many loops to run)
// 3rd i++ tell the counter to increase by 1 at the end of each loop (and the 2nd step tells the counter when to stop loop looping)
for (var i = 0; i < loopCount; i++) {

// Keep track of which band we're on in the loop
	var currentBand = bands[i];

// Reset loop return - otherwise each loop will add an element ex. the last loop wouldn't just return "One Direction", it would return all of the bands
	var bandsString = "";

// Add current element and correct html to the loop return
	bandsString += 	'<p>' + currentBand + '</p>';

//
	bandContainer.innerHTML += bandsString;

// Keep track of which veggie we're on in the loop
	var currentVeggie = vegetables[i];

// Reset loop return
	var veggieString = "";

// Add current element and correct html to the loop return
	veggieString +=   '<p>' + currentVeggie + '</p>';

	
	veggieContainer.innerHTML += veggieString;
}

