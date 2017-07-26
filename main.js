console.log("hello there!");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var bandCount = bands.length;
var veggieCount = vegetables.length;

// Keep track of which band we're on in the loop
var currentBand = bands[i];

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[i];

// Get a reference to the appropriate DOM element for bands
var bandContainer = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieContainer = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < bandCount; i += 1) {
	var currentBand = bands[i];

	var bandsString = "";
	bandsString += '<div id="boy-bands">';
	bandsString += 	'<p>' + currentBand + '</p>';
	bandsString += 	'</div>';
	
	console.log("Dom String from for loop", bandsString);
	bandContainer.innerHTML += bandsString;
}

 for (var i = 0; i < veggieCount; i += 1) {
	var currentVeggie = vegetables[i];

	var veggieString = "";
	veggieString += '<div id="vegetables">';
	veggieString +=   '<p>' + currentVeggie + '</p>';
	veggieString += '</div>';
	
	console.log("Dom String from for loop", veggieString);
	veggieContainer.innerHTML += veggieString;
}

  // Add the band names into the correct <div>
  // currentBand = ???;

  
  // Add the veggie names into the correct <div>
  // currentVeggie = ???;
