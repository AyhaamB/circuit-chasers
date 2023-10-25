const db = require('../config/connection');
const { Post, Product, Sponsor, User, News } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const newsData = require('./newsData.json');
const postData = require('./postData.json');
const sponsorData = require('./sponsorData.json');
const productData = require('./productData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('News', 'news');
  await cleanDB('Post', 'posts');
  await cleanDB('Product', 'products');
  await cleanDB('Sponsor', 'sponsors');

  let updatedPostData = postData.map((data) => ({
    ...data, 
    author: userData[Math.floor(Math.random() * userData.length)]._id 
  }))

  const Users = await User.create(userData);
  const Products = await Product.insertMany(productData);
  const Sponsors = await Sponsor.insertMany(sponsorData);

  const Newss = await News.insertMany(newsData);

  const Posts = await Post.create(postData.map(post => ({
    ...post,
    author: Users[Math.floor(Math.random() * Users.length)]._id
  })));

  for (const post of Posts) {
    const authorId = post.author;
    await User.findByIdAndUpdate(authorId, { $push: { posts: post._id } });
  }

  console.log('Data seeded!');
  process.exit(0);
});

/*
await User.insertMany(userData);
await Post.insertMany(updatedPostData);
*/