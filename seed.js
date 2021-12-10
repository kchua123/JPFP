const { green, red } = require("chalk");
const { db } = require("./server/db");

const Campus = require('./server/db/campus');
const Student = require('./server/db/student');

const campuses = [{
  name: 'Gryffindor',
  address: 'east wing 7th floor',
  description: 'bravery, daring, nerve, and chivalry',
  imageUrl: 'https://www.hp-lexicon.org/images/icons/shield_01-5B1-5D.jpg?ezimgfmt=ng:webp/ngcb22'
}, {
  name: 'Hufflepuff',
  address: 'basement',
  description: 'hard work, dedication, patience, loyalty, and fair play',
  imageUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22'
}, {
  name: 'Ravenclaw',
  address: 'west side tower',
  description: 'intelligence, knowledge, curiosity, creativity and wit',
  imageUrl: 'https://www.hp-lexicon.org/images/icons/shield_rav.jpg?ezimgfmt=ng:webp/ngcb22'
}, {
  name: 'Slytherin',
  address: 'dungeons',
  description: 'ambition, leadership, self-preservation, cunning and resourcefulness',
  imageUrl: 'https://www.hp-lexicon.org/images/icons/shield_sly.jpg?ezimgfmt=ng:webp/ngcb22'
}];

const students = [{
  firstName: 'Minerva',
  lastName: 'McGonagall',
  email: 'minerva@hogwarts.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ea/McGonagall_%28screenshot%29.jpg',
  gpa: 3.6,
  campusId: 1
}, {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'hermione@hogwarts.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg',
  gpa: 4.0,
  campusId: 1
}, {
  firstName: 'Nymphadora',
  lastName: 'Tonks',
  email: 'nymphadora@hogwarts.edu',
  imageUrl: 'https://cdn.staticneo.com/w/harrypotter/thumb/Nymphadora_Tonks.jpg/200px-Nymphadora_Tonks.jpg',
  gpa: 4.0,
  campusId: 2
}, {
  firstName: 'Cho',
  lastName: 'Chang',
  email: 'cho@hogwarts.edu',
  imageUrl: 'https://i.pinimg.com/474x/6c/f0/b3/6cf0b31af8687faea57005da1e5d2b38.jpg',
  gpa: 3.8,
  campusId: 3
}, {
  firstName: 'Bellatrix',
  lastName: 'Black',
  email: 'bellatrix@hogwarts.edu',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Bellatrix.jpeg',
  gpa: 3.8,
  campusId: 4
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
