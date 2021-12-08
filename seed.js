const { green, red } = require("chalk");
const { db } = require("./server/db");

const Campus = require('./server/db/campus');

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

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
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
