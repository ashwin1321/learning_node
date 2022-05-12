
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


async function getCourses(){

    const pageNumber = 2;
    const pageSize = 10
    
    // =========  regular expression  ============
    
    // .find({author: /^Ashwin/})     //  starts with Ashwin
    // .find({author: /Ashwin$/})    //   Ends with
    // .find({author: /.*Ashwin.*/}) // contains substring


    const courses = await Course
        .find({author: 'Ashwin'})
        .limit(pageSize)
        .skip((pageNumber-1)*pageSize)
        .sort({name: 1})             
        .select({name: 1, tags: 1})
        // .count();           // counts the number of documents that matches this criteria

    console.log(courses);
}
// createCourse()
getCourses()