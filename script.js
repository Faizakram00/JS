var a = 20
var b = 30

console.log(a+b);
console.log(a-b)

var num1 = prompt("Enter number 1")
var num2 = prompt("Enter number 2")

console.log(num1+num2)

var a = 15
var b = Number(a)

console.log(b);

var a = 18
var b = String(a)

console.log(typeof(b));


// Binary Operators

// -Aritematic Operators
// -Assignment Operators
// -comparision Operators
// -Increment operators
// -Logical Operators


// increment operator(jisme value increase ho jaati hai jaise a++ me original value me 1 add ho jaayega aur 2 a+++ hoga to original value me 2 add ho jaayega)
var a = 20
a++
a++
console.log(a);

// decrement (jisme value km hogi)
var a= 20
a--
a--
console.log(a);

// a ko print krdo
// a ki value badha do

//post increment means phele a ki value print hogi phir value badhegi
var a = 10
console.log(a++) ;
console.log(a);

//pre increment
// a ki value badha do
// a ko print krdo

var a = 10
console.log(++a);
console.log(a);


var a = 10
// agr hmme direct value 4 increse krna hoga to do tarike hai

a = a+4
a += 4

var a = 10
var b = 20
console.log(a==b)  //answer is false 

var a = 10
var b = '10'
console.log(a == b)  // ans is true becoz they do not check their type and == is loosely coupled 

var a = 10
var b = '10'
console.log(a === b);    //===check their value and type also

//logical Operator
var a = 10
var b = 20

var c = 30
var d = 40

console.log(a > b || c < d)

//  (||) OR operator work on add
//  (&&) AND operator work on multiplication

// CONDITONALS

/*  if(condition){
    agr condition true hua to kiya krna hai ?
 } */

if(10>5){
    console.log('Faiz');
}   

if(10 == 100){
    console.log('Faizan');
}
else{
    console.log('not Faizan');
}

var age = Number(prompt('Enter your age'))

if(age>=18){
    console.log('You can vote');
}else{
    console.log('No voting')
}


var math = Number(prompt('Enter marks in Maths'))
var chem = Number(prompt('Enter marks in chem'))
var phy = Number(prompt('Enter marks in phy'))

var avg = (math + chem + phy)/3

console.log('your marks are',avg);

if(avg>=85){
    console.log('top')
}else{
    console.log('Fail')
}

var marks = 52

if (marks >= 85){
    console.log('A+');

}else if(marks >= 70){
    console.log('B+');

}else if(marks >= 50){
    console.log('C+');

}else if(marks >= 33){
    console.log('D');

}else{
    console.log(Fail);
}

var age = Number(prompt('Enter age'))

if(age>=18 && age <= 60){    
    console.log('you will get 1500 per month')
}else{
    console.log('not giving ')
}



var gender = prompt('enter gender(M/F)')
var age = Number(prompt('Enter age'))

if (gender == "F"){
    if(age>=18 && age <= 60){    
    console.log('you will get 1500 per month');
}  else{
    console.log('not giving ');
}
}else{
    console.log('not alloawed');
}

// truthy
// falsy- 0,"",null,undefined,NaN,false

if(10>5){
    console.log('hello');
}else{
    console.log('bye');
}

// other method ternary operator
console.log(10>5?'hello':'Bye')

var a = 10
var b = 20

console.log(a>b?'accha':'not accha')

// Switch Statement

var marks = 85

if(marks>=85){
    console.log('A+')
}else if(marks>=75){
    console.log('B+')
}else if(marks>=65){
    console.log('C+')
}else{
    console.log('Fail')
}


var marks = 85;

switch (true) {
  case marks >= 85:
    console.log("A+");
    break;
  case marks >= 70:
    console.log("B+");
    break;
  case marks >= 65:
    console.log("C+");
    break;
//   case marks >= 33:
//     console.log("D");
//     break;
  default:
    console.log("Fail");
}