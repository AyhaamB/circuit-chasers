const db = require('../config/connection');
const { Post, Product, Sponsor, User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const postData = require('./postData.json');
const sponsorData = require('./sponsorData.json');
const productData = require('./productData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Post', 'posts');
  await cleanDB('Product', 'products');
  await cleanDB('Sponsor', 'sponsors');

  await User.create(userData);
  await Post.insertMany(postData);
  await Product.insertMany(productData.map((data)=> ({
    ...data, 
    author: userData[Math.floor(Math.random() * userData.length)].name 
  }))
  );
  await Sponsor.insertMany(sponsorData);

  for (let i = 0; i < postData.length; i++) {
    const { _id, author } = await Post.create(postData[i]);
    const user = await User.findOneAndUpdate(
      { name: author },
      {
        $addToSet: {
          posts: _id,
        },
      }
    );
  }
  

  console.log('Data seeded!');
  process.exit(0);
});


/*
await User.insertMany(userData);

*/