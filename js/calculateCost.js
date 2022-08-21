// variables
const cardsContainer = document.getElementById("cardsContainer");
const selectedListsParent = document.getElementById("selectedListsParent");
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
