//    Async and await         -- helps to write async code like a sync code

const { getuid } = require("process");



console.log("before");

// ########### callback hell #################
// getUser(1,(user)=>{
//     console.log(user);
//     getRespositories(user.githubUsername,(repos)=>{
//         console.log(repos);
//         getCommits(repos[0],(commits)=>{
//             console.log(commits);

//         })
//     })
// })


// ################# Promise based approach ########################
// getUser(1)
//     .then(user => getRespositories(user.githubUsername))
//     .then((repos => getCommits(repos[0])))
//     .then(commits => console.log('Commits',commits))
//     .catch(err => console.log("Error",err.message))


// ################## ASYNC AND AWAIT ####################
async function displayCommits(){
    try{
        const user = await getUser(1)
        const repos = await getRespositories(user.githubUsername)
        const commits = await getCommits(repos[0])
        console.log(commits);
    }
    catch(err){
        console.log("Error",err.message);
    }
    }
displayCommits()

console.log('After'); 


 function getUser(id){
    return new Promise((resolve,reject)=>{
        // do some async work
        setTimeout(()=>{
            console.log("Reading a user from a database"); 
            resolve({id: id, githubUsername:"ashwin1321"});
        },2000);

    })  
}

function getRespositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling github API.....');
            // resolve(['repo1','repo2','repo3']);
            reject(new Error(`Couldn't get repos..`)) 
        },2000);
        
    })   
}

function getCommits(repos){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({commit1:"1st commit",commit2:"second commit "});
        }, 2000);
    })  
} 
