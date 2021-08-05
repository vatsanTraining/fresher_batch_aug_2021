import Student from "./Student";
import { Department } from "./Student";


function showDetails(student:Student,dept:Department):void{

    let {id,firstName,mark} = student;

    console.log(firstName);
    
    console.log(dept.departmentName);

}


var ram:Student ={id:101,firstName:"ramesh",mark:90};
var ece:Department ={departmentName:"ECE",hod:"Shiv"};

showDetails(ram,ece);

