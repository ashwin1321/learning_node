console.log("before");

//callback

//callback hell

getUser(1,(user)=>{
    console.log(user);
    getRespositories(user.githubUsername,(repos)=>{
        console.log(repos);
        getCommits(repos[0],(commits)=>{
            console.log(commits);

            //nested xa
            //we call it callback hell
        })
    })
})
console.log('After'); 


function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading a user from a database");
        callback({id: id, githubUsername:"ashwin1321"});
    },2000);
}

function getRespositories(username,callback){
    setTimeout(()=>{
        callback(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(repos,callback){
    setTimeout(() => {
        callback({commit1:"1st commit",commit2:"second commit "});
    }, 2000);
} 