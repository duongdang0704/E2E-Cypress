// let student = {
//     student_name: "Duong",
//     address: "58 Applestone",
//     age: 22,
//     displayDetail: function() {
//         return `Name: ${this.student_name} address: ${this.address} age: ${this.age}`;
//     }

// const Student = require("./testfunction");
// // const {fs} = require("fs");

// if(Student.name instanceof Function){
//     console.log(Student.name);
// }else{
//     console.log(Student.name);
// }
// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){resolve("my value");}, 3000);
// });
// promise.then(function(value){
//     console.log(value);
// })

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce((total, number) => {return total = number + total});
// console.log(sum);


// class Student {
//     constructor(name, age, language){
//         this.name = name
//         this.age = age
//         this.language = language
//     }
//     speakLanguage(){
//         console.log(this.name + ' speak language: ' + this.language)
//     }
// }

// var student1 = new Student('Duong', 36, 'Vietnamese')
// Student.prototype.nationality = 'test';
// console.log('Name: ' + student1.name + ' Age: ' + student1.age + ' Nationality: ' + student1.nationality)
// student1.speakLanguage()
// var student2 = new Student('Nhan', 35, 'English')
// console.log('Name: ' + student2.name + ' Age: ' + student2.age + ' Nationality: ' + student2.nationality)
// student2.speakLanguage()

// class Animal {
//     go(){
        
//     }
// }

// class Cow extends Animal{
//     go(){
//         console.log('4 legs')
//     }
// }
// class Duck extends Animal{
//     go(){
//         console.log('2 legs')
//     }
// }

// var animal1 = new Cow()
// var animal2 = new Duck()
// animal1.go()
// animal2.go()

const fs = require('fs')

function readFileAsync(fileName){
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) =>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

readFileAsync('cypress/e2e/employees.json').then((data) =>{
  let employees = JSON.parse(data).employees
  console.log(employees[0].firstName)
  
})