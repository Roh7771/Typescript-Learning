declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum OtherEnum {
    First = 10,
    Two = 20
}
declare enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let restrictedValue: 1 | 2 | 3;
declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | City.London;
declare type comboType = [string, number | true, 1 | 2 | 3 | City.London][];
declare function getValue(input: comboType): comboType;
declare let result: comboType;
