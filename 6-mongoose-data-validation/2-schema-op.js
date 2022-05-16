//  VALIDATION ERROR


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
        required: true,
        lowercase: true,
        trim: true               // paddings xa bhane sab remove hanxa
    }, 
    author: String,
    tags: {
        type: Array,
        // ============  ASYNC VALIDATOR  ==============
        validate: {
            isAsync: true,
            validator: function(v,callback){
                    // do some async work
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
        required: function (){return this.isPublished}}    ,
        get: v=> Math.round(v),                // floating value lai round garxa retrieve garda
        set: v=> Math.round(v)                // floating value lai round garxa insert garda

});

const Course = mongoose.model('Course',courseSchema)
async function createCourse(){
    
    // class  = course,  object = nodeCourse
    const course = new Course({
        name: "xyz course",
        author: "Aayush",
        // tags: ['node','backend'],
        tags: ['abc','xyz'],
        isPublished: true,
        price: 3999,
        category: '      WEB'
    })
      
    // saving the object
    try{
        // await course.validate() 
        const result = await course.save();
        console.log(result);
    }
    catch (ex){

        //  vALIDATION ERRORs 
        for (x in ex.errors){                                   // iteratively dispaly each error
            console.log(ex.errors[x].message);
        }
        // console.log(ex.message);
    }
}
createCourse();
