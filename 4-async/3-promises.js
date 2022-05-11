// promises         -- holds result.  either returns response or error

// states           --- pending , fulfilled and rejected


const p = new Promise((resolve,reject) => {
    // kick off some async work
    // ... 
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'))
    }, 2000);

})

p
    .then(result => console.log('Results', result))             // resolve bhayo bhane yo dinxa
    .catch(err => console.log('Error',err.message))            // reject xa bhane yo run bhayo
 
