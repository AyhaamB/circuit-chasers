const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
    if (modelName === 'Post' || modelName === 'Product') {
      const commentCollectionName = `${collectionName}.comments`;
      let commentModelExists = await models[modelName].db.db.listCollections({ name: commentCollectionName }).toArray();
      if (commentModelExists.length) {
        await db.dropCollection(commentCollectionName);
      }
    }
  } catch (err) {
    throw err;
  }
}
