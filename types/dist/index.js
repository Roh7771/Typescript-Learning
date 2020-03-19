function calculateTax(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
let taxValue; // The definitive assignment assertion tells TypeScript that a value will be assigned before the variable is used,
eval("taxValue = calculateTax(100, false)");
if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
}
else if (typeof taxValue === "string") {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}
else if (taxValue === null) {
    console.log("Value is null");
}
else {
    let value = taxValue;
    console.log(`Unexpected type for value: ${value}`);
}
let newResult = calculateTax(200, false);
let myNumber = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);
