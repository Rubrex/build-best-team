/***
 *
 *    Variables
 *
 ***/
// Input Fields
const perPlayer = document.getElementById("perPlayer");
const managerCost = document.getElementById("manager");
const coachCost = document.getElementById("coach");
// Text Fields
const playersCost = document.getElementById("playersCost");
const grandTotal = document.getElementById("grandTotal");
// Buttons
const calculateTotal = document.getElementById("calculateTotal");
const calculatePlayersCost = document.getElementById("calculatePlayersCost");
// Others
const cardsContainer = document.getElementById("cardsContainer");
const selectedListsParent = document.getElementById("selectedListsParent");
/***
 *
 *    Common Functions
 *
 ***/
function getInputValue(variable) {
  const elementString = variable.value;
  const elementValue = parseInt(elementString);
  return elementValue;
}
/***
 *
 *    Event Handlers
 *
 ***/
// Event Delegation on Cards Section to get the Button being clicked
cardsContainer.addEventListener("click", function (event) {
  // Check if only the button is clicked
  if (event.target.type == "submit") {
    // Get Player Name
    const playerName = event.target.parentNode.childNodes[1].innerText;
    // Check if more than Five player is selected
    if (selectedListsParent.childNodes.length < 5) {
      // Create element and appendChild to selectedListsParent
      const li = document.createElement("li");
      li.innerText = playerName;
      selectedListsParent.appendChild(li);
      //   Disable Button
      event.target.setAttribute("disabled", true);
    } else {
      alert("You can't select more than Five Players");
    }
  }
  return;
});

// Calculate  Players Cost
calculatePlayersCost.addEventListener("click", function () {
  const playersCount = selectedListsParent.childNodes.length;
  const playerCost = getInputValue(perPlayer);
  const totalCost = playerCost * playersCount;
  //   ignore NaN value
  if (isNaN(totalCost)) {
    return;
  }
  playersCost.innerText = totalCost;
});

// Calculate Total Cost
calculateTotal.addEventListener("click", function () {
  const manager = getInputValue(managerCost);
  const coach = getInputValue(coachCost);
  const playersExpenses = parseInt(playersCost.innerText);
  const totalExpenses = parseInt(manager + coach + playersExpenses);
  grandTotal.innerText = totalExpenses;
});
