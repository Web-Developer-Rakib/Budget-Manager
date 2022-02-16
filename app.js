// Element seletion
let foodInput = document.getElementById("food-input");
let incomeInput = document.getElementById("income-input");
let rentInput = document.getElementById("rent-input");
let clothesInput = document.getElementById("clothes-input");
let calculateBtn = document.getElementById("calculate-btn");
let totalExpensesTxt = document.getElementById("total-expenses");
let balanceTxt = document.getElementById("balance");
let saveInput = document.getElementById("save-input");
let saveBtn = document.getElementById("save-btn");
let sevingAmountTxt = document.getElementById("seving-amount");
let remainingBalanceTxt = document.getElementById("remaining-balance");
// Expense calculation

calculateBtn.addEventListener("click", function () {
  console.log("clicked");
  let incomeValue = incomeInput.value;
  let foodCost = foodInput.value;
  let rentCost = rentInput.value;
  let clothesCost = clothesInput.value;
  let totalExpenses = foodCost + rentCost + clothesCost;
  totalExpensesTxt.innerText = totalExpenses;
});
