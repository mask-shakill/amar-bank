document.getElementById("deposit-btn").addEventListener("click", () => {
  const depositInput = document.getElementById("deposit-input");
  const depositStringInput = depositInput.value;
  const depositNumberInput = parseFloat(depositStringInput);
  const depositDisplay = document.getElementById("deposit-display");
  const oldStringValue = depositDisplay.innerHTML;
  const oldNumberValue = parseFloat(oldStringValue);
  const newValue = depositNumberInput;
  const displayValue = oldNumberValue + newValue;
  depositDisplay.innerText = displayValue;
  depositInput.value = "";

  const balanceValue = document.getElementById("balance-field");
  const oldBalanceString = balanceValue.innerText;
  const oldBalanceNumber = parseFloat(oldBalanceString);
  const addDeposit = depositNumberInput;
  balanceValue.innerText = oldBalanceNumber + addDeposit;
});

document.getElementById("withdraw-btn").addEventListener("click", () => {
  const withdrawAmount = document.getElementById("withdraw-field");
  const withdrawAmountString = withdrawAmount.value;
  const withdrawAmountNumber = parseFloat(withdrawAmountString);
  const withdrawDisplay = document.getElementById("withdraw-display");
  const oldWithdrawDisplayValueString = withdrawDisplay.innerText;
  const oldWithdrawDisplayValueNumber = parseFloat(
    oldWithdrawDisplayValueString
  );
  const newWithdrawDisplayValue = withdrawAmountNumber;
  withdrawDisplay.innerText =
    oldWithdrawDisplayValueNumber + newWithdrawDisplayValue;

  const balanceValue = document.getElementById("balance-field");
  const oldBalanceString = balanceValue.innerText;
  const oldBalanceNumber = parseFloat(oldBalanceString);
  const removeWithdraw = withdrawAmountNumber;
  balanceValue.innerText = oldBalanceNumber - removeWithdraw;
  withdrawAmount.value = "";
});
