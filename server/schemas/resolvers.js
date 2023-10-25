const { User, Sponsor, Product, Post, News } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    news: async () => {
      return News.find();
    },
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('posts');
    },
    posts: async (parent, { author }) => {
      const params = author ? { author } : {};
      return Post.find(params).sort({ createdAt: -1 }).populate('comments');
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    products: async () => {      
      return Product.find().sort({ createdAt: -1 }).populate('comments');
    },
    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    sponsors: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Sponsor.find(params).sort({ donation });
    },
    sponsor: async (parent, { name }) => {
      return Sponsor.findOne({ name });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addNews: async (parent, { title, description, url, urlToImage }) => {
      const news = await News.create({ title, description, url, urlToImage });
      return { news };
    },
    addSponsor: async (parent, { name, email, donation, contractSignedAt, contractExpiration }) => {
      const sponsor = await Sponsor.create({ name, email, donation, contractSignedAt, contractExpiration  });
      return sponsor;
    },
    removeSponsor: async (parent, { sponsorId }, context) => {      
        const sponsor = await Sponsor.findOneAndDelete({_id: sponsorId});
       
        return sponsor;
      },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { title, content }, context) => {
      if (context.user) {
        const post = await Post.create({
          title,
          content
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );
          
        return post;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          author: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
    },
    addProduct: async (parent, { name, description, price, stock }, context) => {
      if (context.user) {
        const product = await Product.create({
          name,
          description,
          price, 
          stock
        });
        return product;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    removeProduct: async (parent, { productId }, context) => {
      if (context.user) {
        const product = await Product.findOneAndDelete({
          _id: productId
        });

        return product;
      }
      throw AuthenticationError;
    },
    addPostComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.name },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    addProductComment: async (parent, { productId, commentText }, context) => {
      if (context.user) {
        return Product.findOneAndUpdate(
          { _id: productId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.name },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          author: context.user.name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
    },
    removePostComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.name,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },  
    removeProductComment: async (parent, { productId, commentId }, context) => {
      if (context.user) {
        return Product.findOneAndUpdate(
          { _id: productId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.name,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
}
};



module.exports = resolvers;
