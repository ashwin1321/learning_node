// CUSTOM VALIDATOR


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground') 
    .then(()=>console.log("Connected to MongoDB..."))
    .catch(err=>console.log(`Couldnot connect to MongoDb....`,err))


const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,          
        minlength: 5,
        maxlength: 255
    },       
    category: {
        type: String,
        enum: ['web','mobile'],     
        required: true
    }, 
    author: String,
    tags: {
        type: Array,
        // ============  CUSTOM VALIDATOR  ==============
        validate: {
            validator: function(v){
                return v && v.length > 0;
            }, 
            message: `The course must have atleast one tag....`
        }

    },
    date: { type: Date, default: Date.now},
    isPublished: Boolean,
    price: { type: Number,
        min:2000,                
        max: 10000,
        required: function (){return this.isPublished}}     

});

const Course = mongoose.model('Course',courseSchema)
async function createCourse(){
    
    // class  = course,  object = nodeCourse
    const course = new Course({
        name: "node course",
        author: "Ashwin123",
        // tags: ['node','backend'],
        tage: null,
        isPublished: true,
        price: 3999,
        category: 'web'
    })
      
    // saving the object
    try{
        // await course.validate() 
        const result = await course.save();
        console.log(result);
    }
    catch (ex){
        console.log(ex.message);
    }
}
createCourse();
