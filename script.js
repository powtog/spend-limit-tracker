
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
    
   
});