// sync and async

// // sync
console.log('Before');
console.log('After');


// async
console.log('Async Before');
const user  = getUser(1)
console.log(user);
console.log('Async After');



function getUser(id){
    setTimeout(() => {
        console.log(`Reading user from database....`);
        return {id: id, gitHubUsername: 'ashwin1321s'}
    }, 2000);
} 