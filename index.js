// Add all models
// get models/tables from models folder
//this is our db
const db = require('./models');

// Create a user inside the user table
// inside the 'db' database >> and inside the 'user' table >> create
// pass object
//////////////
db.user.create({
    //this is a promise
    // uses the key:value pairs and matches them to fields in the table
    firstName: 'ABCaaa',
    lastName: 'DEFaaa',
    

}).then(createdUser => {
// the promise returns data values, created..etc...
// calling .get() on the returned value shows just the obj itself
console.log(createdUser.get());

});

// findOne
// querying THE FIRST match
// it is case sensitive
db.user
  .findOne({
    // this is an object
    // where is the key/query command
    // pass an object into the WHERE query with query parameters
    where: { firstName: 'Jenny' },
  })
  .then((foundUser) => {
    console.log(foundUser.get()); //just return the object
  });

// findAll
// gets back all matches
  //no query parameters passed for findall
db.user.findAll().then((allUsers) => {
  //console.log(allUsers); //just return the object
  allUsers.forEach((user) => {
    console.log(user.get());
  });
});

//update/PUT
db.user
  .update(
    // update takes 2 parameters, an object that has the new info, and the query for what needs to be changed
    { lastName: 'XYZ' }, //pass the update function an object containg what needs to
    { where: { firstName: 'ABCaaa' } }
  )
  .then((numRowChanged) => {
    // only returns the # of rows updated
    console.log(numRowChanged);
  });

//deleting
db.user
  .destroy({
    where: { firstName: 'ABCaaa' },
  })
  .then((numRowDel) => {
    // only returns the # of rows updated
    console.log(numRowDel);
  });

//.thens are not necessary - they are just here to show what's going on
