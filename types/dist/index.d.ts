declare type Product = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare type UnionType = {
    id: number | string;
    name: string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
};
declare let hat: Product;
declare let gloves: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella: {
    id: number;
    name: string;
    price: number;
};
declare function isPerson(testObj: any): testObj is Person;
declare let bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let dataItems: (Person & Employee)[];
declare type EmployedPerson = Person & Employee;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
