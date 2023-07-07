let employee = {
    eid: "E01",
    ename: "Jack",
    eaddress: "New York",
    salary: 5000
}


console.log("Employee=> ", employee);

let newEmployee = employee; //shallow copy

console.log("New Employee=> ", newEmployee);

console.log("after modification");
newEmployee.ename = "Blissie";

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

