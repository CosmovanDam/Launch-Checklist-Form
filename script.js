// Write your JavaScript code here!

// When viewing our written HTML in the browser, the browser turns the HTML into a Document Object Model (DOM). In the DOM, each element, becomes an object (or node). We can use built-in methods to interact with these nodes using JavaScript

function init() {

   // List of variables
   // Form submission button
   const btn = document.querySelector('#formSubmit');
   // Ordered list of items for update
   const heading = document.querySelector('#launchStatus');
   const items = document.querySelector('#faultyItems');
   const itemChild = items.children[0]; // Faulty Items list accessed by children and indexes

   // Form submission input validation
   btn.addEventListener('click', function(e) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      // Conversions
      let fuelValue = Number(fuelLevel.value);
      let cargoValue = Number(cargoMass.value);

      if (pilotName.value === "" || copilotName === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // Stop the form submission
         preventDefault();
      } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelValue) === true || isNaN(cargoValue) === true) {
         alert("Invalid input!");
         // Stop the form submission
         preventDefault();
      } else if (fuelValue < 10000 || cargoValue > 10000) { 
         heading.style.color = 'red';
         heading.innerHTML = "Shuttle not ready for launch!";
         itemChild.children[0].innerHTML = `Pilot ${pilotName.value} is ready for launch`
         itemChild.children[1].innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`
         if (fuelValue < 10000) {
            itemChild.children[2].innerHTML = `Fuel level too low for launch`
         }
         if (cargoValue > 10000) {
            itemChild.children[3].innerHTML = `Cargo mass too high for launch`
         }
         e.preventDefault(items.style.visibility = "visible"); // Stops page from reloading and reveals the items from faultyList after the submit button is clicked
      } else {
         heading.style.color = 'green';
         heading.innerHTML = "Shuttle is ready for launch!";
         itemChild.children[0].innerHTML = `Pilot ${pilotName.value} is ready for launch`
         itemChild.children[1].innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`
         e.preventDefault(items.style.visibility = "visible");
      }

   } )

   // Fetcing and displaying planetary json
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      
      response.json().then( function(json) {
         console.log(json);

         let i = Math.floor(Math.random() * Math.floor(json.length));
         console.log(i);
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[i].name}</li>
                     <li>Diameter: ${json[i].diameter}</li>
                     <li>Star: ${json[i].star}</li>
                     <li>Distance from Earth: ${json[i].distance}</li>
                     <li>Number of Moons: ${json[i].moons}</li>
                  </ol>
                  <img src="${json[i].image}">
            `;

      })
   })

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


