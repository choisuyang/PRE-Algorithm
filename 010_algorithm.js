function calculateBillTotal(preTaxAndTipAmount) {
  const tax = preTaxAndTipAmount * 0.095;
  const tip = preTaxAndTipAmount * 0.15;
  return preTaxAndTipAmount + tax + tip;
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9