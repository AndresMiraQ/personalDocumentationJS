//Rest operator
let obj = {
    'name' : 'Silencioso',
    'age'  : 31,
    'FP'   : 'Rappidash'
}

let {name, ...all} = obj;
console.log(name, all);

let {age, ...all} = obj;
console.log(all);

//Spreed operator
let obj = {
    'name' : 'Silencioso',
    'age'  : 31
}
let obj1 = {
    ...obj,
    'FP'   : 'Rappidash'

}
console.log(obj1);

//.finally in promise

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello Wolrd')
        : reject(new Error('Test error'));
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finished'));

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-10-30');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);