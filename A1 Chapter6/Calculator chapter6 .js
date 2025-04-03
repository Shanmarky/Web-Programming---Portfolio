//  Execute the code inside the callback function after the entire document being fully loaded and all DOM elements being ready
document.addEventListener("DOMContentLoaded", function () {
    const costPerLiterInput = document.getElementById("cost-per-liter");
    const litersInput = document.getElementById("liters");
    const calculateButton = document.getElementById("calculate");
    const totalCostDisplay = document.getElementById("total-cost");

    // Access to the DOM element used in the calculation process
    // This is the input field the user is to fill with the cost of petrol per liter of petrol
    function calculateTotalCost() {
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const liters = parseFloat(litersInput.value);

        if (isNaN(costPerLiter) || isNaN(liters) || costPerLiter < 0 || liters < 0) {
            totalCostDisplay.textContent = "Please enter valid numbers";
            return;
        }
        //Determine the total expense through multiplication of costing one liter and rounding the result to two decimal points for precision purposes.
        const totalCost = (costPerLiter * liters).toFixed(2);
        //The formatted total cost prefixed with "AED" should be displayed within the cost element for currency representation.
        totalCostDisplay.textContent = `Total Cost: AED${totalCost}`;
    }

    //The calculateTotalCost function should execute when users click the calculate button through its event listener addition.
    //The user can compute the total cost through button clicks thanks to this feature.
    calculateButton.addEventListener("click", calculateTotalCost);
});
