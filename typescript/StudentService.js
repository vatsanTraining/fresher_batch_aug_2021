"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showDetails(student, dept) {
    let { id, firstName, mark } = student;
    console.log(firstName);
    console.log(dept.departmentName);
}
var ram = { id: 101, firstName: "ramesh", mark: 90 };
var ece = { departmentName: "ECE", hod: "Shiv" };
showDetails(ram, ece);
