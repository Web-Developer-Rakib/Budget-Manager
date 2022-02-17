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

function incomeValue() {
  let incomeValue = parseFloat(incomeInput.value);
  return incomeValue;
}

// Expense calculation
calculateBtn.addEventListener("click", function () {
  let foodCost = parseFloat(foodInput.value);
  let rentCost = parseFloat(rentInput.value);
  let clothesCost = parseFloat(clothesInput.value);
  let totalExpenses = foodCost + rentCost + clothesCost;
  let currentBalance = incomeValue() - totalExpenses;
  balanceTxt.innerText = currentBalance;
  totalExpensesTxt.innerText = totalExpenses;

  if (incomeValue() < 0) {
    alert("Please enter a positive income");
  } else if (foodCost < 0) {
    alert("Please enter a positive food cost");
  } else if (rentCost < 0) {
    alert("Please enter a positive rent cost");
  } else if (clothesCost < 0) {
    alert("Please enter a clothes cost");
  } else if (totalExpenses > incomeValue()) {
    alert("Your expense is more than your income!");
  } else {
    balanceTxt.innerText = currentBalance;
    totalExpensesTxt.innerText = totalExpenses;
  }

  if (totalExpensesTxt.innerText == "NaN" || balanceTxt.innerText == "NaN") {
    alert("Please enter a valied number.");
    balanceTxt.innerText = 0.0;
    totalExpensesTxt.innerText = 0.0;
  }
});

saveBtn.addEventListener("click", function () {
  let newBalance = parseFloat(balanceTxt.innerText);
  let partialValue = parseInt(saveInput.value);
  let sevings = (100 * partialValue) / incomeValue();
  let remainingBalance = newBalance - sevings;

  if (sevings > newBalance) {
    sevingAmountTxt.innerText = 0;
    remainingBalanceTxt.innerText = 0;
    alert("You can't save more than your Current balance!");
  } else {
    sevingAmountTxt.innerText = sevings;
    remainingBalanceTxt.innerText = remainingBalance;
  }
});
