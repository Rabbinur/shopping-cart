function getTextElementValueById(elementId) {
  // calculate total
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}
// set value of three id text, subtotal,final amount
function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value; //value jeita parameter hisebe pathabo oita bosbe

  // 1.jate duitar jnne kaj kore ei jnne parameter hisebe neoa hoiche
  /*const subTotalElement = document.getElementById("sub-total"); //geting sub total
  subTotalElement.innerText = currentSubTotal; // sub-total update
  */
}
function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  //   calculating subtotal
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  //calculate tax set by text element
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);
  // final amount set by text element
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
