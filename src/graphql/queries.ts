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
        }
        nextToken
      }
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
            imageUri
            authorId
          }
          nextToken
        }  
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
        }
        nextToken
      }
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
      }
      authorId
      author {
        id
        name
        imageUri
        essays {
          nextToken
        }
      }
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
        }
        authorId
        author {
          id
          name
          imageUri
        }
      }
      nextToken
    }
  }
`;
