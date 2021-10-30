//Object.entries,return a matriz 
const data = {
    frontend: 'Cristian',
    backend: 'Andres',
    design : 'mira'
}

const entries = Object.entries(data);
console.log(entries);

//Object.values, return a array with values of the object
const data = {
    frontend: 'Cristian',
    backend: 'Andres',
    design : 'mira'
}

const values = Object.values(data);
console.log(values);

//Padding
const string = 'food';
console.log(string.padStart(12,'_____ '));
console.log(string.padEnd(12,' _____'));

//async - await
const extraLife = (coins) => {
    return new Promise((resolve, reject) => {
        (coins == 100)
        ? setTimeout(() => resolve('You have an extra life'), 3000)
        : reject(new Error('Play again')); 
    });
}

const extraAsync = async (coins) => {
    const hello = await extraLife(coins);
    console.log(hello);
}

const anotherLife = async (coins) => {
    try{
        const hello = await extraLife(coins);
        console.log(hello)
    }catch(error){
        console.log(error);
    }

}
extraAsync(100);
anotherLife(100);
