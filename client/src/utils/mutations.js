import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, content: Text!) {
    addpost(title: $title, content: $content) {
      _id
      title
      content
      createdAt
      comments {
        _id
        commentText
      }
      author
    }
  }
`;

export const ADD_POST_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($description: String!, $name: String!, $price: Number!, $stock: Number!) {
    addproduct(name: $name, description: $description, price: $price, stock: $stock) {
      _id
      name
      description
      price
      stock
      team
      category
      author
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_PRODUCT_COMMENT = gql`
  mutation addComment($productId: ID!, $commentText: String!) {
    addComment(productId: $productId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

