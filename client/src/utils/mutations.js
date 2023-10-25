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

export const ADD_NEWS = gql`
  mutation addNews($title: String!, $description: String!, $url: String!, $urlToImage: String!) {
    addNews(title: $title, description: $description, url: $url, urlToImage: $urlToImage) {
       title
       description
       url
       urlToImage
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, content: String!) {
    addPost(title: $title, content: $content) {
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

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
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
  mutation addPostComment($postId: ID!, $commentText: String!) {
    addPostComment(postId: $postId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const REMOVE_POST_COMMENT = gql`
  mutation removePostComment($postId: ID!, $commentId: ID!) {
    removePostComment(postId: $postId, commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($description: String!, $name: String!, $price: Float!, $stock: Float!) {
    addproduct(name: $name, description: $description, price: $price, stock: $stock) {
      _id
      name
      description
      price
      stock
      team
      category      
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($productId: ID!) {
    removeProduct(productId: $productId) {
      _id
      name
      description
      price
      stock
      team
      category
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_PRODUCT_COMMENT = gql`
  mutation addProductComment($productId: ID!, $commentText: String!) {
    addProductComment(productId: $productId, commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const REMOVE_PRODUCT_COMMENT = gql`
  mutation removeProductComment($productId: ID!, $commentId: ID!) {
    removeProductComment(productId: $productId, commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

