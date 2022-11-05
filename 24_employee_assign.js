class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
  
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonsli=new Employee(66,"sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


let com_info=[emp_anil,emp_monika,emp_radha,emp_rishi,emp_sonsli,emp_viny,emp_mahi];
console.log("====================== Assignment Employee ======================");

console.log('Name:- Mayuri Bansode');
console.log('Assignment:- 02');

console.log("====================== Q.1. Working in TCS ======================");
 for (const info of com_info) {
    if (info.emp_company==="TCS"){
         console.log(`employinfo= employ name=${info.emp_name}  employ company=${info.emp_company}`);
        
 }
 }

 console.log("====================== Q.2. Working in Finance Department ======================");
for (const info of com_info) {
    if (info.emp_dept==="Finance") {
        console.log(` employ name=${info.emp_name}  employ company=${info.emp_company}`);
    }
}
        
console.log("====================== Q.3. Name Start with R ======================");

for (const info of com_info) {
    if (info.emp_name.startsWith('R')) {
        console.log(` employ Details=${info.emp_id}  ${info.emp_name} ${info.emp_dept}  ${info.emp_salary} ${info.emp_company}`);
    }
}

console.log("====================== Q.4. Salary Greater than 70000 ======================");
for (const info of com_info) {
    if (info.emp_salary > 70000) {
        console.log(` employ name=${info.emp_name}  employ company=${info.emp_company}`);
    }
}

console.log("====================== Q.5. Salary Greater than equal to 50000 ======================");

for (const info of com_info) {
    if (info.emp_salary >= 50000 && info.emp_dept==="IT" ) {
        console.log(` employ Id=${info.emp_id}    employ name=${info.emp_name}    employ dept=${info.emp_dept}    employ salary=${info.emp_salary}    employ company=${info.emp_company}`);
   }
}

console.log("====================== Q.6. Employee from company Infy ======================");
for (const info of com_info) {
    if (info.emp_company==="Infy") {
        console.log(` employ Id=${info.emp_id}    employ name=${info.emp_name}    employ dept=${info.emp_dept}    employ salary=${info.emp_salary}    employ company=${info.emp_company}`);
    }
}