const { green, red } = require("chalk");
const { db } = require("./server/db");

const Campus = require('./server/db/campus');
const Student = require('./server/db/student');

const campuses = [{
  name: 'NY Campus',
  address: 'New York, NY',
  description: 'The Big Apple',
  imageUrl: 'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612'
}, {
  name: 'LA Campus',
  address: 'Los Angeles, CA',
  description: 'City of Angels',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/288px-Los_Angeles_with_Mount_Baldy.jpg'
}, {
  name: 'SD Campus',
  address: 'San Diego, CA',
  description: 'Tacos',
  imageUrl: 'https://media.istockphoto.com/photos/downtown-san-diego-skyline-in-california-usa-picture-id1188288800?k=20&m=1188288800&s=612x612&w=0&h=_d-507UNukOHxICHgK3IUG55SPoAyVPNx3zOamMcVxQ='
}];

const students = [{
  firstName: 'Steve',
  lastName: 'Rogers',
  email: 'steve@avengers.com',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Chris_Evans_as_Steve_Rogers_Captain_America.jpg',
  gpa: 3.6
}, {
  firstName: 'Tony',
  lastName: 'Stark',
  email: 'tony@avengers.com',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg',
  gpa: 4.0
}, {
  firstName: 'Bruce',
  lastName: 'Banner',
  email: 'bruce@avengers.com',
  imageUrl: 'https://static.wikia.nocookie.net/ironman/images/f/f9/7c51a6800b4fd5e22fbb34311d0052734f995765.jpg/revision/latest/top-crop/width/360/height/450?cb=20191121173500',
  gpa: 4.0
}, {
  firstName: 'Loki',
  lastName: 'Laufeyson',
  email: 'loki@avengers.com',
  imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/loki-tom-hiddleston-1623746367.jpg?crop=0.445xw:1.00xh;0.299xw,0&resize=480:*',
  gpa: 3.8
}];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));
    await Promise.all(students.map(student => {
      return Student.create(student);
    }));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
