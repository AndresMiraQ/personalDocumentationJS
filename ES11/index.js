//Importing an element dynamically
const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});

//bigInt 2^53
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//Primise.allSettled()

const promise1 = new Promise((resolve, reject) => ("reject"));
const promise2 = new Promise((resolve, reject) => ("resolve"));
const promise3 = new Promise((resolve, reject) => ("resolve 1"));

Promise.allSettled(promise1,promise2,promise3)
    .then(response =console.log(Response))

//Global this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

//Nullish  coalescing operator (??)

const Why = null ?? 'default';
console.log(Why)

//Opcional chaining(?)

const user = {};
console.log(user.profile.email);//Error
console.log(user?.profile?.email);//Undefined

if(user?.profile?.email){
    console.log(email);
}else{
    console.log(fail);
}

