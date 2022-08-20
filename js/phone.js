// console.log("phone");
function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);
  if (isIncrease) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document
  .getElementById("phone-number-plus")
  .addEventListener("click", function () {
    console.log("+ click");
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });
document
  .getElementById("phone-number-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });
