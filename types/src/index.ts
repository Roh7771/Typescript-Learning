function calculateTax(amount: number): number;
function calculateTax(amount: null): null;
function calculateTax(
  amount: number | null,
  discount: number = 0,
  ...extraFees: number[]
): number | null {
  // A function can have one rest parameter only, and it must be the last parameter
  if (amount !== null) {
    return amount * 1.2;
  }
  return null;
}

function writeValue(label: string, value: number): void {
  console.log(`${label}: ${value}`);
}

let taxAmount: number = calculateTax(100);
writeValue("Tax value", taxAmount);

let taxValue = calculateTax(200);
console.log(`Tax value: ${taxValue}`);
