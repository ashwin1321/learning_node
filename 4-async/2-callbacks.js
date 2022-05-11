// callback

const { func } = require("joi");

console.log('Async Before');
getUser(1, getRepo)
console.log('Async After');

function getRepo(user){
    getRepo(user.gitHubUsername,getCommits)
}

function getCommits(repos){
    getCommits(repo, displayCommit) 
}

function displayCommit(commits){
    console.log(commits);
}



function getUser(id,callback){
    setTimeout(() => {
        console.log(`Reading user from database....`);
        callback({id: id, gitHubUsername: 'ashwin1321'})

    }, 2000);
}


function getRepo(usename,callback){
    setTimeout(() => {
        console.log(`Calling GitHub API.....`);
        
    }, 2000);
    callback(['repo1','repo2','repo3'])
}