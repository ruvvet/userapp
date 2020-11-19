const db = require('./models');

// CAPITALIZATION MATTERS
// CAPITALIZATION MATTERS
// CAPITALIZATION MATTERS

//////////////////////////////////////////////////////
// MANY TO MANY
//N:M
/////////////////////////////////////////////////////

// // create a toy
// db.toy.create({
//     type:'fun',
//     color: 'blue'
// })

// // GIVE A PET A TOY
// db.pet
//   .findOne({
//     where: { name: 'Pepper' },
//   })
//   .then((pet) => {
//       console.log('pet', pet)
//     db.toy
//       .findOne({
//         where: { color: 'blue' }

//       })
//       .then((toy) => {
//         pet.addToy(toy);
//         console.log(toy);
//       })
//   });

// USE FINDCREATE
//First, get a reference to a pet./create a new one if it doesnt exist
// db.pet
//   .findOrCreate({
//     where: {
//       name: 'Draco',
//       species: 'Tiger',
//       description: 'rawr'
//     },
//   })
//   // a FINDORCREATE PASSES A PARAMETER THAT IS AN ARRAY
//   // of 2 elements
//   //TO THE .THEN
//   // the results if a match was found
//   // or if a new one was created
//   .then(([pet, created]) => {
//     // Second, get a reference to a toy./ create one if it doesnt exist
//     db.toy
//       .findOrCreate({
//         where: { type: 'human', color: 'death' },
//       })
//       .then(([toy, created]) => {
//         // Finally, use the "addModel" method to attach one model to another model.
//         pet.addToy(toy).then((relationInfo) => {
//           console.log(toy.type, 'added to', pet.name);
//         });
//       });
//   });

// GET ALL PETS WITH A SPECIFIC TOY
//   db.toy.findOne({
//     where: {type: "ball"}
//   }).then(function(toy) {
//     toy.getPets().then(function(pets) {
//       console.log(pets.length, 'pet(s) love the', toy.color, toy.type)
//     });
//   });

// // ADD A PET TO A TOY IF THERES NO PET FOR IT YET

// db.toy
//   .findOrCreate({
//     // first find a toy OR create if it doesnt exist
//     where: { type: 'ball', color: 'green' },
//   })
//   .then(function ([toy, created]) {
//     // so we either found /created the toy
//     // now we get all the pets
//     toy
//       .getPets()
//       // which returns an array of pets that have this toy
//       .then(function (pets) {
//         // so we have an array of all pets with the toy
//         if (pets.length > 0) {
//           // for each pet with the toy, do something.
//           pets.forEach(function (pet) {
//             console.log(pet.name, toy.color, toy.type);
//           });
//         } else {
//           // else the array is empty and no pets have the toy
//           // so we findOrCreate a Pet and add it to the toy
//           db.pet
//             .findOrCreate({ // find a create a pet for the toy
//               where: {
//                 name: 'Sun',
//                 species: 'Bird',
//               },
//             })
//             .then(function ([pet, created]) { // add the toy to the pet
//               toy.addPet(pet).then(function (relationInfo) {
//                 console.log(
//                   pet.name,
//                   'has faved the',
//                   toy.color,
//                   toy.type,
//                   'toy'
//                 );
//               });
//             });
//         }
//       });
//   });


//   // GET ALL TOYS OF A PET
//   db.pet.findOne({
//     where: {name: "Ein"}
//   }).then(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(pet.name, toy.color, toy.type);
//       });
//     });
//   });


// GET ALL DATA
// USE INCLUDE
// db.pet.findOne({
//     where: {
//       name: "Silly May"
//     },
//     include: [db.user, db.toy]
//   }).then(function(pet) {
//     pet.toys.forEach(function(toy) {
//       console.log(pet.user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
//     })
//   })

// // GET ALL TOYS OF A PET OF A USER
// db.user.findByPk(1, { include: [db.pet] })
// .then(function(user) {
//   user.pets.forEach(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
//       })
//     })
//   })
// })