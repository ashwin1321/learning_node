
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground') 
    .then(()=>console.log("Connected to MongoDB..."))
    .catch(err=>console.log(`Couldnot connect to MongoDb....`,err))


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean

});

const Course = mongoose.model('Course',courseSchema)
async function createCourse(){
    
    // class  = course,  object = nodeCourse
    const course = new Course({
        name: "react course",
        author: "Ashwin",
        tags: ['react','frontend'],
        // date: Date.now,
        isPublished: true 
    })
      
    // saving the object
    const result = await course.save();
    console.log(result);
}

// query all
// async function getCourses(){
//     const courses = await Course.find()
//     console.log(courses);
// }

// filter data
async function getCourses(){
    const courses = await Course
        .find({author: 'Ashwin'})
        .limit(10)
        .sort({name: 1})            // 1 bhaneko ascending order ma gar bhaneko ho
        .select({name: 1, tags: 1})

    console.log(courses);
}
// createCourse()
getCourses()