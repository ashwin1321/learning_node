// embedding

const { func } = require('joi')
const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log(`Connected to MongoDb....`))
    .catch(err => console.error(`colud not connect to the MongoDb`))


const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

const Author = mongoose.model('Author', authorSchema)

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    // author: {type: authorSchema, require: true}

    //  array of sub-documents
    authors: [authorSchema]
}))

async function createCourse(name,authors){
    const course = new Course({
        name,
        authors 
    })

    const result = await course.save()
    console.log(result);
}

async function updateAuthor(courseID){
    // const course = await Course.findById(courseID)
    // course.author.name = 'Ashwin Khatiwada'
    // course.save()

    // direct update garna
    const course = await Course.updateMany({ _id: courseID}, {
        // $set: {             // set garna yo use garne
        $unset: {             // particular maal hataunu xa bhane unset use garne la. Okay bye!!
            'author.name': "namespace "
        }
    })
 
}

async function listCourses(){
        const courses = await Course.find()
        console.log(courses);
}


async function addAuthor(courseId,author){
    const course = await Course.findById(courseId)
    course.authors.push(author)
    course.save()

}


async function removeAuthor(courseid, authorid){
    const course = await Course.findById(courseid);
    const author = course.authors.id(authorid)

    author.remove()
    course.save()
}

// createCourse('Node Course', [
//     new Author({name: 'Mosh'}),
//     new Author({name: 'Ashwin'})
// ])

// updateAuthor('6283cfc8505d59a62844a1be')
 
// addAuthor('6283cd8cfa6a166bce0da396', new Author({name: "Rabindra"}))

removeAuthor('6283cd8cfa6a166bce0da396','6283cfc8505d59a62844a1be')

//