document.querySelector("button").addEventListener("click", function () {
    
    const budget = document.querySelector("#budgetInput").value;
    
    document.body.style.backgroundColor = "lightgreen";
   
    document.querySelector("#budgetDisplay").textContent = budget;

});