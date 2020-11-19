const db = require('./models');

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
db.pet
  .findOrCreate({
    where: {
      name: 'Draco',
      species: 'Tiger',
      description: 'rawr'
    },
  })
  // a FINDORCREATE PASSES A PARAMETER THAT IS AN ARRAY
  // of 2 elements
  //TO THE .THEN
  // the results if a match was found
  // or if a new one was created
  .then(([pet, created]) => {
    // Second, get a reference to a toy./ create one if it doesnt exist
    db.toy
      .findOrCreate({
        where: { type: 'human', color: 'death' },
      })
      .then(([toy, created]) => {
        // Finally, use the "addModel" method to attach one model to another model.
        pet.addToy(toy).then((relationInfo) => {
          console.log(toy.type, 'added to', pet.name);
        });
      });
  });
