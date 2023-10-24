const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    stock: Float!
    comments: [Comment]
    createdAt: String!
    team: String
    category: String
  }

  type Sponsor {
    _id: ID!
    name: String!
    email: String
    donation: Float!
    contractSignedAt: String!
    contractExpiration: String!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    comments: [Comment]
    author: String!
    createdAt: String!
  }

  type Query {
    users: [User]
    user(email: String!): User
    sponsors: [Sponsor]
    sponsor(name: String!): Sponsor
    product(productId: ID!): Product
    products(team: String, category: String): [Product]
    posts(author: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!): Post
    removePost(postId: ID!): Post
    addProduct(name: String!, description: String!, price: Float!, stock: Float!): Product
    removeProduct(productId: ID!): Product
    addPostComment(postId: ID!, commentText: String!): Post
    removePostComment(postId: ID!, commentId: ID!): Post
    addProductComment(productId: ID!, commentText: String!): Product
    removeProductComment(productId: ID!, commentId: ID!): Product
    addSponsor(name: String!, email: String, donation: Float!, contractSignedAt: String!, contractExpiration: String!): Sponsor
    removeSponsor(sponsorId: ID!): Sponsor
  }
`;

module.exports = typeDefs;
