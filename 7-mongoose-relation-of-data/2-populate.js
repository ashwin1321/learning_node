const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to MongoDb....'))
    .catch(err => console.error(`could  not connect to mongodb....., ${err}`))


const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}))

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,                 // author ko id dinxa yesle la
        ref: "Author"
    }
}))

async function createAuthor(name, bio, website){ 
    const author = new Author({
        name,
        bio, 
        website
    })
    const result = await author.save()
    console.log(result);
}

async function createCourse(name,author){
    const course = new Course({
        name, 
        author
    })
    const result =await course.save()
    console.log(result);
}

async function listCourse(){
    const courses  = await Course  
        .find()
        // .populate('author')                      //  yo garda chai author ko sab properties aauxa mathi reference gare anusar. Ok bye!!
        // .populate('author', "name")                          // yesle chai author ko name property matra dinxa la. Ok Bye!!           
        .populate('author', "name -_id")           // yesle chai author ko name property matra dinxa  ani "-_id"  le id lai minus garxa or say hatayera value return garxa       
        // .populate('category',"name")
        .select('name author')
        console.log(courses);
}

// createAuthor('Ashwin',"My bio","My website")

// createCourse('Noide Course', '628270dd73afbc19a6a46e57')

listCourse()

