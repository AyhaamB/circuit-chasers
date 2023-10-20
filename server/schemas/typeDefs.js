const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: Email!
    posts: [Post]!
    products: [Product]!
  }

  type Product {
    _id: ID!
    description: Text!
    price: Number!
    stock: Number!
    comments: [Comment]!
    author: [User]!
    crreatedAt: String!
  }

  type Sponsor {
    id: ID!
    sponsorName: String!
    email: String
    donation: Number!
    contractSignedAt: String!
    contractExpiration: String!
  }

  type Post {
    id: ID!
    content: Text!
    comments: [Comment]!
    author: String!
    createdAt: String!
  }

  type Query {
    user(userId: ID!): User
    sponsors: [Sponsor]!
    sponsor(sponsorId: ID!): Sponsor
    product(productId: ID!): Product
    
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
