
const { func } = require('joi');
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
        isPublished: true 
    })
      
    // saving the object
    const result = await course.save();
    console.log(result);
}


async function getCourses(){
    const pageNumber = 2;
    const pageSize = 10

    const courses = await Course
        .find({author: 'Ashwin'})
        .limit(pageSize)
        // .skip((pageNumber-1)*pageSize)
        .sort({name: 1})             
        .select({name: 1, tags: 1})

    console.log(courses);
}

async function updateCourse(id){
    
    // Approach: Query First
    // findbyId()
    // Modify


    // next approach: Update First
    // update directly
    // optionally: get the updated document

    const course = await Course.findById(id)
    if(!course) return;

    course.isPublished = true;
    course.author = 'Another Author2'

    // course.set({
    //     isPublished: true,
    //     author: "Another Author"
    // })

    const result = await course.save()
    console.log(result);
    console.log(`course updated successfully...`);



}

updateCourse('627cc9cc2bc32a95c5ee3c03')
