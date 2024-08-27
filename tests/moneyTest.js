import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency')

console.log("convers cents into dollar");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with zero");
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failde");
}
console.log("rpounds up to the nearset cent");
if (formatCurrency(2000.5) === "20.01") {
  console.log("pass");
} else {
  console.log("fail");
}
