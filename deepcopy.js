let employee = {
    eid: "E1",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Deep copy");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("after modification");
newEmployee.ename = "Clissie";
newEmployee.salary = "10000";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);