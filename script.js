document.querySelector("button").addEventListener("click", function () {
    
    const budget = Number(document.querySelector("#budgetInput").value);

    const charge = Number(document.querySelector("#chargeInput").value);

    const remaining = budget - charge;
    
    document.body.style.backgroundColor = "lightgreen";
   
    document.querySelector("#budgetDisplay").textContent =
        "Remaining: $" + remaining.toFixed(2);

});