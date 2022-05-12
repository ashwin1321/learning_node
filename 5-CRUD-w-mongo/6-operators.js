async function getCourses(){

    // ########## COMPARISON OPERATOR ##########

    // -- eq (equal)
    // -- ne (!equal)
    // -- gt (greater than)
    // -- gte (> or =)
    // -- lt (less than)
    // -- lte (< or =)
    // -- in
    // -- nin (!in)

    const courses = await Course
        // .find({author: 'Ashwin'})
        .find({price: { $gte: 10, $lte: 20} })
        .find({price: {$in: [10,15,20] }})
        .limit(10)
        .sort({name: 1})             
        .select({name: 1, tags: 1})

    console.log(courses);
}


//  ########## LOGICAL OPERATOR ##########

    // -- or
    // -- and

async function getCourses(){

    const courses = await Course
        // .find({author: 'Ashwin'})
        .find()
        .or([{author: 'Ashwin'},{isPublished: true}])
        .and([{author: 'Ashwin'},{isPublished: true}])

        .limit(10)
        .sort({name: 1})             
        .select({name: 1, tags: 1})

    console.log(courses);
}