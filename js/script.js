const backHomeBtn = document.querySelector("#budget_details button.back_home");
const budgetPage = document.getElementById("budgets");
const budgetDetails = document.querySelector("#budget_details");
const budgetCard = document.querySelectorAll("#budgets .budget_card");
const addBudgetButton = document.querySelector("#budgets button");
const budgetForm = document.getElementById("budget_form");
const addSpentBudget = document.querySelector(".add_spent_btn");
const spentForm = document.getElementById("spent_form");
const closeSpentForm = document.querySelector(
  "#spent_form .modal_card_heading i"
);
const closeModalBudget = document.querySelector(
  "#budget_form .modal_card_heading i"
);

// klik tombol halaman Utama
backHomeBtn.addEventListener("click", () => {
  budgetPage.classList.remove("hidden");
  budgetDetails.classList.add("hidden");
});

// budget card
budgetCard.forEach((card) => {
  card.addEventListener("click", () => {
    budgetPage.classList.add("hidden");
    budgetDetails.classList.remove("hidden");
  });
});

// klik tambah budget
addBudgetButton.addEventListener("click", () => {
  budgetForm.classList.remove("hidden");
});
closeModalBudget.addEventListener("click", () => {
  budgetForm.classList.add("hidden");
});

addSpentBudget.addEventListener("click", () => {
  spentForm.classList.remove("hidden");
});
closeSpentForm.addEventListener("click", () => {
  spentForm.classList.add("hidden");
});

function getFromValue(FormData) {
  let result = new Object();
  for (const data of FormData.entries()) {
    const [key, value] = data;
    Object.assign(result, { [key]: value });
  }
  return result;
}
function getExistingData() {
  return JSON.parse(localStorage.getItem("budget")) ?? [];
}
function saveDataBudget(dataBaru) {
  const existingData = getExistingData();
  existingData.push(dataBaru);

  console.log("existing", existingData);
  localStorage.setItem("budget", JSON.stringify(existingData));
}

// Submit Form budget
document.querySelector("#budget_form form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getFromValue(new FormData(e.target));

  saveDataBudget(data);
  budgetForm.classList.add("hidden");
  resetInput();
});

function resetInput() {
  document.querySelectorAll("form input").forEach((input) => {
    input.value = "";
  });
}
