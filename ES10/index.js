//.flat() y .flatMap()
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));

//trimStart.() .trimEnd()
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart);

let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd);

//Delete de error with parameter
try{
    
}catch{
    error
}
//object => matriz or matriz => object

let entries = [['name', 'Cristian'],['age','31']];
console.log(Object.fromEntries(entries));

