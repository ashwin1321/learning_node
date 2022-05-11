// promise-api

// // const p  =  Promise.resolve({ id:1})
// const p  =  Promise.reject(new Error('reason for rejection...'))
// p
//     .then(result=> console.log(result))
//     .catch(error=> console.log(error))



// paralle Promises 

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`Async operation 1.....`);
        resolve(1);
        // reject(new Error("Something's wrong!!!!!!!"))
    }, 2000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log(`Async operation 2.....`);
        resolve(2);
    }, 2000);
})

// Promise.all([p1,p2])                                  // if rejected case in any of the promise then it returns error or is rejected

Promise.race([p1,p2])                                   // eauta promise resolve bhayo bhane yo ni fulfilled hunxa rey hai 
    .then(result => console.log(result))
    .catch(err=> console.log('Error', err.message))