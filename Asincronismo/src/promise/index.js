const something = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Correct');
        }else{
            reject('Incorrect');
        }
    });
}

something()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const something2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }else{
            const error = new Error('Incorrect')
            reject(error);
        }
    });
}
    
something2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//How to run on several promises

Promise.all([something(), something2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(error => {
        console.error(error);
    });