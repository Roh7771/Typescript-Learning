function calculateTax(amount, discount = 0, ...extraFees) {
    // A function can have one rest parameter only, and it must be the last parameter
    if (amount !== null) {
        return amount * 1.2;
    }
    return null;
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
let taxAmount = calculateTax(100);
writeValue("Tax value", taxAmount);
let taxValue = calculateTax(200);
console.log(`Tax value: ${taxValue}`);
