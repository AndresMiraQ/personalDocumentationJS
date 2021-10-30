//Default parameters
function newFuntion(name = "name", age = 31, email = "email@email.com"){
    console.log(name, age, email);
}

newFuntion(); // name 31 email@email.com
newFuntion("name2", "newAge", "otherEmail");// name2 newAge otherEmail

//Template Literals
let hello = 'Hello';
let world = 'World';

let = phrase = `${hello} ${world}`

//String on multiple lines
let phrase = `GRANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
              FRASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
              ESCRITAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
`

//Destructuring

let person = {
    'name' : 'Silencioso',
    'age'  : 31,
    'FP'   : 'Rappidash'
}

let {name, age} = person; 
console.log(name, age);

//Spred operator
let team1 = ['Superman', 'Batman', 'WonderWoman'];
let team2 = ['GreenLantern', 'Aquaman', 'Flash'];

let fusion = ['MarsDetective', ...team1, ...team2];

//Variables let and const, control of the scope and can be reassigned
let newLet = 'Limit scope';
const newConst = 'cant be reassigned';
var newVar = 'scope global and can be reassigned';

//Parameters in objects
let name = 'Silencioso';
let age = 31;

obj1 = {name : name, age : age}; //ES5

obj2 = {name, age}; //ES6

//Arrows funtions () => {}

const names = [
    { name : 'Cristian', age : 31},
    { name : 'Yuriam',   age : 28}
]

let listOfNames = names.map(function (item) { 
    console.log(item.name);
}); //ES5

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name , age, country) => {
    console.log(name);
}

const listOfName4 = name => {
    console.log(name);
}

const square = num => num * num;

//Promise

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Its fine');
        }else{
            reject('Ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error));

//Class
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,2));

//Modules

import { hello } from './module';
hello();

//Generators 

function* generatorFunction(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const gf = generatorFunction();
console.log(gf.next().value);//Hello, 
console.log(gf.next().value);//World
console.log(gf.next().value);//undefined




