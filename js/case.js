console.log("hlw");
/*
1. add event listener to the case plus btn
2. get the value inside the case number field(input Field)
3. convert the number to an integer
4.set the value to the case number field

*/
function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  //   const newCaseNumber = previousCaseNumber + 1;
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  //   increse number of value
  const newCaseNumber = updateCaseNumber(true);
  updateCasePrice(newCaseNumber);
  calculateSubTotal();
});
//   descresing number of value
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();

    /*
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");

    caseTotalElement.innerText = caseTotalPrice;
*/
    /*
    const caseNumberField = document.getElementById("case-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
    */
  });
