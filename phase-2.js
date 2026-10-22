/* console.log('if ke pehle')

if(10>5){
    console.log('if is running')
}
console.log("if ke baad")


// LOOPS
var a = 0
console.log("loop ke pehle")

while(a<5){
    console.log('Hello');
    a++
}
console.log("loop ke baad me")


// 
var num = Number(prompt('Enter Number'))

var a = 1

while(a<=num){
    console.log(a)
    a++
}

// 
var a = 10
while(a>0){
    console.log(a)
    a--
}

// 
var num = Number(prompt('Enter number'))
var a = 1
while(a<=num){
    if(a/2 == 0){
        console.log(a)
    }
    a++
}
// 
var num1 =  Number(prompt("enter number"))
var a = 0
while(a<=num){
    if(a/2 != 0){
        console.log(a)
    }
    a++
}
 */
// Ask a user any number and print its table
/* 
 var num = Number(prompt("Enter Number"))

var a = 1
while(a <= 10){
    console.log(num+ " X " +a+" = "+" = "+num*a)
    a++
} */

// 
/* do{
    var pass = prompt("Enter Password")
}while(pass != "123")

console.log("Welcome") */


// 
/* var a = 0

while(a<10){
    console.log("Helo");
    a++
}

// 
for(var a = 0;a<10;a++){
    console.log("Helo");
}

// 
for(var a = 1;a<=10;a++){
    console.log("Hello")
}

var a = 1
while(a<=10){
    console.log(a);

    if(a==3){
        break
    }
    a++
} */

// continue
/* var a = 1
while(a<=10){
    if(a==3){
        continue
    }
    console.log(a)
    a++
} */

/* for(var a = 1;a<=10;a++){
    

    if(a==4){
        continue
    }
    console.log(a)
} */

//  for even number

for (var a = 1;a<=10;a++){

    if(a%2 != 0){
        continue;
    }
    console.log(a)
}
