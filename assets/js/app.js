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
let alrt = document.getElementById("alert");
let alertTxt = document.getElementById("alert-txt");
let closeAlert = document.getElementById("close-alert");

// incomeInput value
function incomeValue() {
  let incomeValue = parseFloat(incomeInput.value);
  return incomeValue;
}

// Alert function
function alerts(alertMsg) {
  alrt.classList.remove("d-none");
  alrt.classList.add("d-flex");
  alrt.classList.add("align-items-center");
  alrt.classList.add("justify-content-between");
  alertTxt.innerText = alertMsg;
}
// Close alert
closeAlert.addEventListener("click", function () {
  alrt.classList.add("d-none");
});
// Expense calculation
calculateBtn.addEventListener("click", function () {
  let foodCost = parseFloat(foodInput.value);
  let rentCost = parseFloat(rentInput.value);
  let clothesCost = parseFloat(clothesInput.value);
  let totalExpenses = foodCost + rentCost + clothesCost;
  let currentBalance = incomeValue() - totalExpenses;
  balanceTxt.innerText = currentBalance;
  totalExpensesTxt.innerText = totalExpenses;

  // Income and expense negative number validation
  if (incomeValue() <= 0) {
    alerts("Please enter a positive income amount.");
    balanceTxt.innerText = 0;
    totalExpensesTxt.innerText = 0;
  } else if (foodCost <= 0) {
    alerts("Please enter positive food cost.");
    balanceTxt.innerText = 0;
    totalExpensesTxt.innerText = 0;
  } else if (rentCost <= 0) {
    alerts("Please enter a positive rent cost.");
  } else if (clothesCost <= 0) {
    alerts("Please enter a positive clothes cost.");
    balanceTxt.innerText = 0;
    totalExpensesTxt.innerText = 0;
  } else if (totalExpenses > incomeValue()) {
    alerts("Your expense is more than your income!");
    balanceTxt.innerText = 0;
    totalExpensesTxt.innerText = 0;
  } else {
    balanceTxt.innerText = currentBalance;
    totalExpensesTxt.innerText = totalExpenses;
    alrt.classList.add("d-none");
  }
  // Income and expense NaN validation
  if (totalExpensesTxt.innerText == "NaN" || balanceTxt.innerText == "NaN") {
    alerts("Please enter valid amounts to all fields.");
    balanceTxt.innerText = 0.0;
    totalExpensesTxt.innerText = 0.0;
  }
});

// Sevings calculation
saveBtn.addEventListener("click", function () {
  let newBalance = parseFloat(balanceTxt.innerText);
  let partialValue = parseInt(saveInput.value);
  let sevings = (incomeValue() / 100) * partialValue;
  let remainingBalance = newBalance - sevings;

  // Partial number validation
  if (partialValue > 100) {
    sevingAmountTxt.innerText = 0;
    remainingBalanceTxt.innerText = 0;
    alerts("Partial number should not be more than 100.");
  } else if (partialValue <= 0) {
    sevingAmountTxt.innerText = 0;
    remainingBalanceTxt.innerText = 0;
    alerts("Enter a positive pertial number.");
  } else if (sevings > newBalance) {
    sevingAmountTxt.innerText = 0;
    remainingBalanceTxt.innerText = 0;
    alerts("You don't have enough money for seving!");
  } else {
    sevingAmountTxt.innerText = parseFloat(sevings);
    remainingBalanceTxt.innerText = parseFloat(remainingBalance);
    alrt.classList.add("d-none");
  }
  // Sevings NaN validation
  if (
    sevingAmountTxt.innerText == "NaN" ||
    remainingBalanceTxt.innerText == "NaN"
  ) {
    alerts("Please enter your income and seving percentage.");
    sevingAmountTxt.innerText = 0.0;
    remainingBalanceTxt.innerText = 0.0;
  } else if (totalExpensesTxt.innerText == 0) {
    alerts("Please calculate your expense first!");
    sevingAmountTxt.innerText = 0.0;
    remainingBalanceTxt.innerText = 0.0;
  }
});
