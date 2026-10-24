function hero(){
    console.log("Hello Faiz")
}
hero()

function walk(){
    console.log("Waalking....")
}

function dance(){
    console.log("Dancing")
}
function Run(){
    console.log("Running...")
}

walk()
Run()
Run()
Run()
walk()
walk()
walk()
Run()
walk()


// 
function greet(a){
    console.log("Good Evening",a)
}
greet(50)
greet(10)

// 
function add(a,b){
    console.log(a+b)
}
add(45,55)

// 
function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function div(a,b){
    console.log(a/b)
}
function mul(a,b){
    console.log(a*b)
}
add(20,30)
sub(20,30)
div(20,30)
mul(20,30)


// 
function greet(user,age){
    console.log("Good Morning...",user);

    if(age>=18){
        console.log("Welcome in Party")
    }else{
        console.log("Not Allowed")
    }
}

greet("Faiz",14)
greet("Kaif",24)

// Function Declaration
function a1(){
    console.log("Hello Faiz")
}

// Function Expression

const b1 = function(){
    console.log("Hello Faizan")
}


// Arrow function

var c1 = (a)=>{
    console.log("Hello Mfaiz",a)
}

a1()
b1()
c1(12)


// other method of Arrow function or oneline of function
var c2 =(a,b)=> console.log("Hell FAIZ",a,b)

c2("Akram",24)

var c3 = a => console.log("Hell Akram",a)
c3("Hyderbad")


// 
function aaa(){
    console.log("Hello");

    return "Faiz"
}

console.log(aaa());

// RETURN VALUES
function hero(){
    var a = 10
    var b = 20
    
    var c = a+b
    return c
}
console.log(hero());
console.log(hero());
console.log(hero());


function permission(gen){
    if(gen =="F"){
        console.log("Welcome to Women's Party")
    }else{
        console.log("Welcome to Men's Party")
    }
}
permission("M")

// agr hmme console pe print na krna ho to return krna hoga
function permission(gen){
    if(gen == "F"){
        return "Welcome to Women's Party"
    }else{
        return "Welcom to Men's Party"
    }
}
console.log(permission("F"));

//  Return

function a(){
    return 10
}

var b = function (){
    return 20
}

var c = ()=>{
    return 30
}

var d = () => { return 40 }

console.log(a());
console.log(b());
console.log(c());
console.log(d());

// PURE AND IMPURE FUNCTION

function add(a,b){
    return a+b;
}
console.log(add(5,6))


// IMPURE FUNCTION
var a = 10
function abc(){
    a++
    return a
}
console.log(abc())
console.log(abc())
console.log(abc())
console.log(abc())

// Function as First-Class Citizens

function hero (){
    console.log("Main Hoon Hero")
}

function main(a){
    console.log(a)
}
main(hero())
// callback function - most important and do minimum 30 question
// higher order function