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

