// Write your JavaScript code here!

// When viewing our written HTML in the browser, the browser turns the HTML into a Document Object Model (DOM). In the DOM, each element, becomes an object (or node). We can use built-in methods to interact with these nodes using JavaScript

function init() {

   // List of variables
   // Form submission button
   const btn = document.querySelector('#formSubmit');
   console.log(btn);

   // Form submission input validation
   btn.addEventListener('click', function() {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // Stop the form submission
         preventDefault();
      } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Invalid input!");
         // Stop the form submission
         preventDefault();
      } 
   } )

   // TODO: Find out a way to update the launchstatus and change the css using the DOM



} 

// Window load
window.onload = init;

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
