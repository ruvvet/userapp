const db = require('./models');

//create[Model]
//get[Model]
//set[Model]
//add[Model]

///////////////////////////////////////////////////////
// ONE TO MANY
// 1:M
//////////////////////////////////////////////////////

// // ADDING A PET TO A USER
// // BY FIRST 'FINDING' A USER - user PRIMARY KEY 1 in this case
// // THEN CREATE A PET INSIDE THE .THEN
// db.user.findOne().then((foundUser) => {
//   //find the first user
//   //aka 1 in this case
//   // then in that user
//   // create a new pet
//   foundUser.createPet({
//     name: 'Moose',
//     species: 'Dog',
//     description: 'Cute pupper named Moose'
//   }).then((dog)=>{
//     // print the output of the table
//     console.log(dog);
//   });
// });

// // ADDING A PET TO A SPECIFIC USER
// db.user.findOne({
//     // find the specific user as normal
//     where: {firstName: 'Jenny'}
// }).then((user)=>{

//     // on the returned user
//     // create[MODEL]  - model = pet in this case
//     // pass in an object to create
// user.createPet({
//     name: 'moon',
//     species: 'Kitty',
//     description: 'white kitty'
//   }).then((pet)=>{
//     // print the output of the table
//     console.log(pet);
//   });
// });

// // GETTING PETS FROM A USER
// db.user
//   .findOne({
//     // find the specific user as normal
//     where: { firstName: 'Jenny' },
//   })
//   .then((user) => {
//     // on the returned user
//     // get all pets
//     // so use getPets ///// OR gePet??????

//     user.getPets().then((pets) => {
//       // print the output of the table
//       //for clear data
//       // do a for each
//       console.log(`${user.firstName}'s pets:`)
//       pets.forEach(pet=>{

//         console.log(pet.name);
//     });
//   });
// });

// //FINDING ONE PET ??????????
db.pet.findOne({
    where: {name:'pepper'}
}).then((pet)=>{
    // pet.getUser().then((user)=>{
    //     console.log('user', user.get())
    // })
console.log('pet', pet);

});

// // ASSIGNING A created PET TO A USER
// // instead of giving a pet a user
// db.pet
//   .findOne({ //find the pet
//     where: { name: 'moon' },
//   })
//   .then((pet) => {
//       // then find the user you want to assign it to
//     db.user.findOne({ where: { firstName: 'Jenny' } })
//     // THEN
//     .then((user) => {
//         // inside the .then, set the user of the pet
//       pet.setUser(user);
//     });
//   });



// FIND OR CREAATE
//creates a new row if it doesnt exist
// 1. first find the pet to assign the toy to
db.pet.findOrCreate({
    where: {
      name: 'Ein',
    },
    defaults: { //??????????????????????
      description: 'Traumatised by a very jealous toy aussie, Simba is very cute but rarely comes out to play'
    }
  })
  // A FIND OR CREATE NEEDS TO PASS AN ARGUMENT THAT IS AN ARRAY
  // use .spread in place of .then
  .then(([pet, created])=>{
    db.user.findOne()
    .then(user=>{
      //associate previously loaded pet instance
      user.addPet(pet);
      console.log('User ' + user.firstName + ' is the owner of ' + pet.name);
    })
})




//INCLUDE
// db.user.findAll({
//     include: [db.pet]
// }).then(users=>{
//     // users will have a .pets key with an array of pets
//     users.forEach(user=>{
//         console.log(`${user.firstName}'s pets:`)
//         user.pets.forEach(pet=>{
//             console.log(pet.name)
//         })
//     })
// })






//questions - raise conditions?
// using plural or singular?????
