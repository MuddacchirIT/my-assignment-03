/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var result = area / 2;
console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >= 25000){
console.log("Laptop")
}
else if(money >= 10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

 for(var i = 1; i <= lastDay; i++){
    if(i % 3 === 0){
  console.log(i, "- medicine");
}
  else{
    console.log(i, "- rest")
}
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if(fileName[0] === "#" || (fileName[0] === "#" && fileName.toUpperCase.includes)){
    console.log("Store")
}
else if(fileName.includes('.pdf') === true || (fileName.includes('.PDF') === true || fileName.toUpperCase.includes)){
    console.log("Store")
}
else if(fileName.includes('.docx') === true || (fileName.includes('.DOCX') === true || fileName.toUpperCase.includes)){
    console.log("Store")
}
else{
    console.log("Delete")
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014,department: "cse" };
//write your code here

var generatedMail = student.name + student.roll +'.'+ student.department+'@'+'ph.ac.bd';
console.log(generatedMail)


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var inAmount = 1 / 20;
var amount = (1+inAmount)
var result = (Math.pow(amount, experience)) * startingSalary;
var result = result.toFixed(2)
console.log(result)