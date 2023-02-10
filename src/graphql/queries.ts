/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEssayCategory = /* GraphQL */ `
  query GetEssayCategory($id: ID!) {
    getEssayCategory(id: $id) {
      id
      name
      essays {
        items {
          id
          name
          imageUri
          audioUri
          essayCategoryId
          authorId
          essayAlbumId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEssayCategorys = /* GraphQL */ `
  query ListEssayCategorys(
    $filter: ModelEssayCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEssayCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        essays {
          items {
            id
            name
            imageUri
            authorId
          }
          nextToken
        }  
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEssayAlbum = /* GraphQL */ `
  query GetEssayAlbum($id: ID!) {
    getEssayAlbum(id: $id) {
      id
      name
      imageUri
      essays {
        items {
          id
          name
          imageUri
          audioUri
          essayCategoryId
          authorId
          essayAlbumId
          createdAt
          updatedAt
        }
        nextToken
      }
      authorId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const listEssayAlbums = /* GraphQL */ `
  query ListEssayAlbums(
    $filter: ModelEssayAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEssayAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        essays {
          nextToken
        }
        authorId
        categoryId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      imageUri
      essays {
        items {
          id
          name
          imageUri
          audioUri
          essayCategoryId
          authorId
          essayAlbumId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEssay = /* GraphQL */ `
  query GetEssay($id: ID!) {
    getEssay(id: $id) {
      id
      name
      imageUri
      audioUri
      essayCategoryId
      essayCategory {
        id
        name
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      author {
        id
        name
        imageUri
        essays {
          nextToken
        }
        createdAt
        updatedAt
      }
      essayAlbumId
      createdAt
      updatedAt
    }
  }
`;
export const listEssays = /* GraphQL */ `
  query ListEssays(
    $filter: ModelEssayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEssays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        audioUri
        essayCategoryId
        essayCategory {
          id
          name
          createdAt
          updatedAt
        }
        authorId
        author {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        essayAlbumId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
