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
  let incomeValue = parseFloat(incomeInput.value);
  let foodCost = parseFloat(foodInput.value);
  let rentCost = parseFloat(rentInput.value);
  let clothesCost = parseFloat(clothesInput.value);
  let totalExpenses = foodCost + rentCost + clothesCost;
  let currentBalance = incomeValue - totalExpenses;
  balanceTxt.innerText = currentBalance;
  totalExpensesTxt.innerText = totalExpenses;

  if (incomeValue || foodCost || rentCost || clothesCost < 0) {
    alert("Please inter a positive number");
    balanceTxt.innerText = 0;
    totalExpensesTxt.innerText = 0;
  }
});

saveBtn.addEventListener("click", function () {
  let currentIncome = parseFloat(incomeInput.value);
  let newBalance = parseFloat(balanceTxt.innerText);
  let partialValue = parseInt(saveInput.value);
  let sevings = (100 * partialValue) / currentIncome;
  sevingAmountTxt.innerText = sevings;
  let remainingBalance = newBalance - sevings;
  remainingBalanceTxt.innerText = remainingBalance;
});
