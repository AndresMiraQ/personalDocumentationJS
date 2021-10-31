//.replaceAll
const string = "JavaScript is wonderfull, with JavaScript i can build the future of the web."
const changeString1 = string.replace('JavaScript', 'Python');
console.log(changeString1)

const changeString2 = string.replaceAll('JavaScript', 'Python');
console.log(changeString2) 

//Private methods and attributes

class Message {
    #show(val){
        console.log(val);
    }
    get #add(val){
      
    }
}

const message = new Message();
message.show();

//Promise.any

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//A WefFer object allows to maintain a weak reference to another object, preventing it from being picked up by the garbage collector.
class anyClass {
    constructor(element) {
        this.ref = WeaRef(element);
    }
}

// &&= ||= ??=
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);