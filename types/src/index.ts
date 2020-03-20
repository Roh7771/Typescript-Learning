function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum OtherEnum {
  First = 10,
  Two = 20
}
enum Product {
  Hat = OtherEnum.First + 1,
  Gloves = 20,
  Umbrella = Hat + Gloves
}

let restrictedValue: 1 | 2 | 3 = 3;
console.log(`Value: ${restrictedValue}`);

function calculatePrice(quantity: 1 | 2, price: number): number {
  return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
  return (Math.floor(Math.random() * 4) + 5) as 1 | 2 | 3 | 4;
}

enum City {
  London = "LON",
  Paris = "PAR",
  Chicago = "CHI"
}
function getMixedValue(): 1 | "Hello" | true | City.London {
  switch (getRandomValue()) {
    case 1:
      return 1;
    case 2:
      return "Hello";
    case 3:
      return true;
    case 4:
      return City.London;
  }
}
console.log(`Value: ${getMixedValue()}`);

type comboType = [string, number | true, 1 | 2 | 3 | City.London][];
function getValue(input: comboType): comboType {
  return [
    ["Apples", 100, 2],
    ["Oranges", true, 3]
  ];
}
let result: comboType = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);
