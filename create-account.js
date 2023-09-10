function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputedPin) {
      if (inputedPin !== pin) {
        return "Invalid PIN.";
      } else {
        return `$${amount}`;
      }
    },
    deposit(inputedPin, amountAdd) {
      if (inputedPin !== pin) {
        return "Invalid PIN.";
      } else {
        amount += amountAdd;
        return `Succesfully deposited $${amountAdd}. Current balance: $${amount}.`;
      }
    },
    withdraw(inputedPin, amountRemove) {
      if (inputedPin !== pin) {
        return "Invalid PIN.";
      } else if (amountRemove > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else {
        amount -= amountRemove;
        return `Succesfully withdrew $${amountRemove}. Current balance: $${amount}.`;
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) {
        return "Invalid PIN.";
      } else {
        pin = newPin;
        return "PIN successfully changed!";
      }
    },
  };
}

module.exports = { createAccount };
