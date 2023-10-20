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

  await User.insertMany(userData);
  await Post.insertMany(postData);
  await Product.insertMany(productData);
  await Sponsor.insertMany(sponsorData);

  console.log('Data seeded!');
  process.exit(0);
});
