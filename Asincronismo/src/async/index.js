const somethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'));
    });
}

const something = async () => {
    const doSomething = await somethingAsync();
    console.log(doSomething);
}

console.log('Before');
something();
console.log('after');

//Errors 
const anotherSomething = async () => {
    try{
        const doSomething = await somethingAsync();
        console.log(`${doSomething} anotherSomething`);
    }catch (error){
        console.log(error);
    }
}

console.log('Before 1');
anotherSomething();
console.log('after 1');
