console.log("hello there!");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)


// Keep track of which band we're on in the loop


// Keep track of which veggie we're on in the loop


// Get a reference to the appropriate DOM element for bands
var bandContainer = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieContainer = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < 5; i++) {

	var currentBand = bands[i];

	var bandsString = "";
	bandsString += 	'<p>' + currentBand + '</p>';
	bandContainer.innerHTML += bandsString;


	var currentVeggie = vegetables[i];

	var veggieString = "";
	veggieString +=   '<p>' + currentVeggie + '</p>';
	
	veggieContainer.innerHTML += veggieString;
}

  // Add the band names into the correct <div>
  // currentBand = ???;

  
  // Add the veggie names into the correct <div>
  // currentVeggie = ???;
