
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

async function createCourse(){
    
    // class  = course,  object = nodeCourse
    const Course = mongoose.model('Course',courseSchema)
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

createCourse()