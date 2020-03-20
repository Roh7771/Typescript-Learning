let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
function isPerson(testObj) {
    return testObj.city !== undefined;
}
let bob = {
    id: "bsmith",
    name: "Bob",
    city: "London",
    company: "Acme Co",
    dept: "Sales"
};
let dataItems = [bob];
dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
});
function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({
        ...p,
        ...(staff.find(e => e.id === p.id) || { ...defaults, id: p.id })
    }));
}
