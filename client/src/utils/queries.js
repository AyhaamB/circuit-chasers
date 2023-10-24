import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      posts {
        _id
        title
        content
      }
    }
  }
`;

export const QUERY_SPONSORS = gql`
  query sponsors {
    sponsors {
      _id
      name
      email
      donation
      contractSignedAt
      contractExpiration
    }
  }
`;

export const QUERY_SPONSOR = gql`
  query sponsor($name: String!) {
    sponsor(name: $name) {
      _id
      name
      email
      donation
      contractSignedAt
      contractExpiration
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      content
      author
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      description
      price
      stock
      category
      team
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query product($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      description
      price
      stock
      category
      team
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      content
      author
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      posts {
        _id
        title
        content
        createdAt
      }
    }
  }
`;
