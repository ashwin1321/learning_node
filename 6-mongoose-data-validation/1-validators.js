// VALIDATORS
// BUILT-IN && CUSTOM

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground') 
    .then(()=>console.log("Connected to MongoDB..."))
    .catch(err=>console.log(`Couldnot connect to MongoDb....`,err))

const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,           // required, minlen, maxlen are  validators
        minlength: 5,
        maxlength: 255
    },       
    category: {
        type: String,
        enum: ['web','mobile'],        // category ma yo deko items bahek xa bhane error dinxa else true, iits also a validator
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
        min:2000,                // min,max validator for number
        max: 10000,
        required: function (){return this.isPublished}}      // ispublish false xa bhane no error, true xa bhane ani price deko xaina bahne error

});

const Course = mongoose.model('Course',courseSchema)
async function createCourse(){
    
    // class  = course,  object = nodeCourse
    const course = new Course({
        name: "node course",
        author: "Ashwin123",
        // tags: ['node','backend'], 
        tags: null,
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
