// Mongoose Modeling Relationship between connected Data

//  Approaches
// --1 Using references (Normalization)        => consistency
let author ={
    name: "Ashwin"
}
let course ={
    author: 'id'
}


// --2 Using Embedded Documents (deNormalization)        => performance
let courses = {
    author: {
        name: "Ashwin"
    }
}
 

// Hybrid 
let authors ={
    name: "Ashwin"
    // 50 other properties
}

let coursee ={
    author:{
        id: 'ref',
        name: "Ashwin"
    }
}

