
// 
let showCharges = false;

// search local storage for existing array else use an empty array
let charges = JSON.parse(localStorage.getItem("charges")) || [];

// set budget equal to remaining budget or 0
let budget = Number(localStorage.getItem("budget")) || 0;

// displays remaining budget on screen 
function updateDisplay() {
    const totalSpent = charges.reduce(function (sum, charge) {
        return sum + charge.amount;
    }, 0);

    const remaining = budget - totalSpent;

    document.querySelector("#budgetDisplay").textContent = 
        "Remaining: $" + remaining.toFixed(2);
}
// put saved budget back into the input box
document.querySelector("#budgetInput").value = budget;

// display saved remaining balance when page loads
updateDisplay();

// 
function updateChargesList() {
    const chargesList = document.querySelector("#chargesList");
    // clear list
    chargesList.textContent = "";
    // loop through charges array
    charges.forEach(function (charge, index) {
        // create <li> (list item)
        const listItem = document.createElement("li");
        // fill with date and amount
        listItem.textContent = charge.date + " - $" + charge.amount.toFixed(2) + " ";
        // create a button called "deleteButton"
        const deleteButton = document.createElement("button");
        // write "Delete" on that deleteButton
        deleteButton.textContent = "Delete";
        // upon clicking
        deleteButton.addEventListener("click", function () {
            // remove 1 element at current index
            charges.splice(index, 1);
            // update local storage 
            localStorage.setItem("charges", JSON.stringify(charges));
            // recalculate the remaining balance
            updateDisplay();
            // recreate the charges list
            updateChargesList();
        });
        // append deleteButton to each <li>
        listItem.appendChild(deleteButton);
        // append <li> to <ul>
        chargesList.appendChild(listItem);
    });

}

document.querySelector("button").addEventListener("click", function () {
    // read budget input
    budget = Number(document.querySelector("#budgetInput").value);
    // read charge input
    const charge = Number(document.querySelector("#chargeInput").value);

    // get today's date
    const today = new Date().toLocaleDateString();

    // create a charge object
    const newCharge = {
        amount: charge,
        date: today
    };

    // add each charge to the list
    charges.push(newCharge);

    // save charges array and budget to local storage
    localStorage.setItem("charges", JSON.stringify(charges));
    localStorage.setItem("budget", budget);

    // update the screen
    updateDisplay();

    // 
    updateChargesList();

});

// uppon clicking "Show Charges" button:
document.querySelector("#toggleChargesButton").addEventListener("click", function () {
    // grab the charges list
    const chargesList = document.querySelector("#chargesList");
    // make show charges the opposite 
    showCharges = !showCharges;
    // build the charges list
    updateChargesList();
    // set the charges list hidden feature to T/F if show charges is F/T
    chargesList.hidden = !showCharges;
    // grab the show charges button
    const toggleButton = document.querySelector("#toggleChargesButton"); 
    // change the text if show charges is true or false/other
    if (showCharges) {
        toggleButton.textContent = "Hide Charges";
    } else {
        toggleButton.textContent = "Show Charges";
    }
});