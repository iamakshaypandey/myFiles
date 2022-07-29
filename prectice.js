// // 'use strict';
// // // class in js

// // // var student = {
// // //     name : "David Rayy",
// // //     sclass : "VI",
// // //     rollno : 12 };

// // // class data{
// // //     constructor(){
// // //         this.name=name1
// // //         this.sclassn=class1
// // //         this.rollno=rollno1
// // //     }
// // // }
// // // const data =new 

// // // 

// // //creat a contructer function

// // const person = function(firstname,birthYear){
// //     this.firstname=firstname
// //     this.birthYear = birthYear
// //     // never to do this its bad prectice we use prototype to solove thus problem
// //     // this.addmethod = function(){
// //     //     console.log(this.birthYear + 22);
// //     // }
// // }
// // const data = new person('akshay',1997)
// // const akshay = new person('akshay1',1998)
// // person.prototype.addmethod=function(akshayagg){
// //         console.log(this.birthYear + akshayagg);
// //     }
// // console.log(data)
// // data.addmethod()
// // akshay.addmethod(25)
// // console.log(data instanceof person);


// // //new is create a empety object 
// // // function is called this keyword
// // //object linked to prototype
// // // function aotomatically return object


// // // coding chellange

// // // const car = function(model,speed){
// // //     this.car =model
// // //     this.speed =speed
// // // }

// // // car.prototype.acculrater= function(){
// // //     this.speed += 20
// // //     console.log(`${this.car} is now speed is ${this.speed
// // //     }`);
// // // }
// // // car.prototype.break= function(){
// // //     this.speed -= 20
// // //     console.log(`${this.car} is now speed is ${this.speed
// // //     }`);
// // // }

// // // const checkbmw = new car('bmw',120)
// // // const chekfarari =new car('farari',140)
// // // console.log(checkbmw.speed);
// // // checkbmw.acculrater()
// // // checkbmw.break()
// // // checkbmw.break()
// // // checkbmw.break()
// // // checkbmw.acculrater()
// // // checkbmw.acculrater()
// // // checkbmw.acculrater()



// // class car{
// //     constructor(model,speed){
// //         this.car=model
// //         this.speed=speed
// //     }
// //     acculrator(){
// //         this.speed+=20
// //     console.log(`${this.car} speed is now ${this.speed}`);
// //     }
// //     break(){
// //         this.speed-=40
// //     console.log(`${this.car} speed is now ${this.speed}`);
// //     }
// // }

// // // car.prototype.acculrator = function(){
// // //     this.speed+=20
// // //     console.log(`${this.model} speed is now${speed}`);
// // // }


// // const data1 = new car('bmw',120)
// // data1.acculrator()
// // data1.acculrator()
// // data1.acculrator()
// // data1.acculrator()
// // data1.break()
// // data1.break()
// // data1.break()
// // data1.break()
// // data1.break()
// // data1.acculrator()
// // data1.acculrator()
// // data1.acculrator()
// // data1.acculrator()


// // console.log('proto',car.prototype);
// // // console.log('this',this.atob('akshay pandey'));



// // let products = {
// //     a:{name: 'iPhone', price: 900},
// //     b:{name: 'Samsung Galaxy', price: 850},
// //     c:{name: 'Sony Xperia', price: 700}
// // }


// // console.table(products)






// //shellow copy ND DEEP copy in javascript

// ///////The following illustrates how to copy an object using three methods above:


// const person = {
//     firstname : 'akshay',
//     lastname : 'pandey'
// }


// // using spread ...
// let p1 = {
//     ...person
// };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));

// // console.log(p1,p2,p3);




// // //////

// let counter = 1;
// let copiedCounter = counter;
// copiedCounter = 2;
// console.log(counter); 


// let person1 = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// let copiedPerson = person1;

// console.log(copiedPerson);
// copiedPerson.firstName = 'Jane';
// console.log(person1); 



// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };


// let copiedPerson = Object.assign({}, person);

// copiedPerson.firstName = 'Jane'; // disconnected

// copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
// copiedPerson.address.city = 'Mountain View'; // connected

// console.log(copiedPerson);
// console.log(person);




// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };


// let copiedPerson = JSON.parse(JSON.stringify(person));

// copiedPerson.firstName = 'Jane'; // disconnected

// copiedPerson.address.street = 'Amphitheatre Parkway';
// copiedPerson.address.city = 'Mountain View';

// console.log(person);
// console.log(copiedPerson);





// let person = {
//     name:'akshay'
// }

// let person2nd = person

// person2nd.name='pandey'
// console.log(person);


// shellow copy

// let person = {
//         name:'akshay'
//     }
    
//     let person2nd = person
    
//     person2nd.name='pandey'
//     console.log(person,person2nd);



// let person = {
//     name:'akshay'
// }

// let person2nd = Object.assign({},person)
// person2nd.name='pandey'
// console.log(person,person2nd);



// let person = {
//     name:'akshay',
//     get:{
//         city:'indore',
//         add:'parsi mohlla indore'
//     },
//     Date:new Date()
// }

// let person2nd = {...person}
// person2nd = JSON.parse(JSON.stringify(person))
// person2nd.name = 'pandey'
// person2nd.get.city = 'chandigarh'
// console.log(person2nd);
// console.log(person);
// let person2nd = Object.assign({},person)

// person2nd.name='pandey'
// person2nd.get.city='chandigrah'
// person2nd.get.add='mohali app scrip'
// console.log(person,person2nd);


// const person = {
//     name:'akshay',
//     get : function(){
//     return {city:'indore',
//     add:'parsi mohlla indore'}
//         // return 'hello akshay'
//     },
//     Date:new Date()
// }
// console.log('person with out sellow clon',person);
// const user = JSON.parse(JSON.stringify(person))
// user.name = 'pandey'
// // user.get.city = 'lakhnao'
// console.log('person ofter sellow or deep clon',user);




// const _ = require('lodash/cloneDeep')
// import { cloneDeep } from './node_modules/lodash/cloneDeep';
// import _ from 'lodash';

// const _ = require('lodash')

// const person = {
//         name:'akshay',
//         get : function(){
//         return {city:'indore',
//         add:'parsi mohlla indore'}
//             // return 'hello akshay'
//         },
//         Date:new Date()
//     }
//     console.log('person with out sellow clon',person);
//     // const user = JSON.parse(JSON.stringify(person))
//     const user = _.cloneDeep(person)
//     user.name = 'pandey'
//     // user.get.city = 'lakhnao'
//     console.log('person ofter sellow or deep clon',user);
    
    
    
    
    
    
    
// const target = new EventTarget()
// // console.log(typeof target);
// class MyEventTarget extends EventTarget {
//     constructor(mySecret) {
//       super();
//       this._secret = mySecret;
//     }
  
//     get secret() { return this._secret; }
//   };
//   const check = new MyEventTarget(5)
//   const value = check._secret
//   console.log(value);
//   check.addEventListener('foo',function(e){
//       this._secret = e.detail
//       console.log(e.composedPath());
//   })
  
//   let event1 =new CustomEvent('foo',{detail:8})
//   check.dispatchEvent(event1)
//   let myEventTarget = new MyEventTarget(5);
//   let value = myEventTarget.secret;  // == 5
//   myEventTarget.addEventListener("foo", function(e) {
//     this._secret = e.detail;
//   });
  
//   let event = new CustomEvent("foo", { detail: 7 });
//   myEventTarget.dispatchEvent(event);
//   let newValue = myEventTarget.secret; // == 7
  


const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,89,9,]
const mearge = [...arr1,...arr2]
console.log(mearge);