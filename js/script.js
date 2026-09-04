const btnAdd = document.querySelector("#btn-add");
const btnReset = document.querySelector("#btn-reset");
const labelcountValue = document.querySelector("#count-value");
let countValue = 0;

btnAdd.addEventListener("click", () => {
	countValue++;
	labelcountValue.textContent = countValue;
});
btnReset.addEventListener("click", () => {
	countValue = 0;
	labelcountValue.textContent = countValue;
});
