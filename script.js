// empty array to hold each charge amount
let charges = [];

document.querySelector("button").addEventListener("click", function () {
    
    const budget = Number(document.querySelector("#budgetInput").value);

    const charge = Number(document.querySelector("#chargeInput").value);

    // add each charge to the list
    charges.push(charge);

    // calculate the total spent
    const totalSpent = charges.reduce(function (sum, charge) {
        return sum + charge;
    }, 0);

    // calculate the remaining budget by subtracting summed charges
    const remaining = budget - totalSpent;
    
    document.body.style.backgroundColor = "lightgreen";
   
    document.querySelector("#budgetDisplay").textContent =
        "Remaining: $" + remaining.toFixed(2);

});