const lodash = require('lodash');
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function() {
        return "Employee Name: "
            + this.ename + "-->Salary: "
            + this.salary;
    }
}
let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Back";
deepCopy.details = function() {
    return "Employee ID: " + this.eid
        + "-->Salary: " + this.salary;
}
console.log("---After Modification---");
console.log("Original Employee Object");
console.log(employee);
console.log(employee.details());
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(deepCopy.details());