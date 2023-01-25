/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEssayCategory = /* GraphQL */ `
  mutation CreateEssayCategory(
    $input: CreateEssayCategoryInput!
    $condition: ModelEssayCategoryConditionInput
  ) {
    createEssayCategory(input: $input, condition: $condition) {
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
export const updateEssayCategory = /* GraphQL */ `
  mutation UpdateEssayCategory(
    $input: UpdateEssayCategoryInput!
    $condition: ModelEssayCategoryConditionInput
  ) {
    updateEssayCategory(input: $input, condition: $condition) {
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
export const deleteEssayCategory = /* GraphQL */ `
  mutation DeleteEssayCategory(
    $input: DeleteEssayCategoryInput!
    $condition: ModelEssayCategoryConditionInput
  ) {
    deleteEssayCategory(input: $input, condition: $condition) {
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
export const createEssayAlbum = /* GraphQL */ `
  mutation CreateEssayAlbum(
    $input: CreateEssayAlbumInput!
    $condition: ModelEssayAlbumConditionInput
  ) {
    createEssayAlbum(input: $input, condition: $condition) {
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
export const updateEssayAlbum = /* GraphQL */ `
  mutation UpdateEssayAlbum(
    $input: UpdateEssayAlbumInput!
    $condition: ModelEssayAlbumConditionInput
  ) {
    updateEssayAlbum(input: $input, condition: $condition) {
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
export const deleteEssayAlbum = /* GraphQL */ `
  mutation DeleteEssayAlbum(
    $input: DeleteEssayAlbumInput!
    $condition: ModelEssayAlbumConditionInput
  ) {
    deleteEssayAlbum(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createEssay = /* GraphQL */ `
  mutation CreateEssay(
    $input: CreateEssayInput!
    $condition: ModelEssayConditionInput
  ) {
    createEssay(input: $input, condition: $condition) {
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
export const updateEssay = /* GraphQL */ `
  mutation UpdateEssay(
    $input: UpdateEssayInput!
    $condition: ModelEssayConditionInput
  ) {
    updateEssay(input: $input, condition: $condition) {
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
export const deleteEssay = /* GraphQL */ `
  mutation DeleteEssay(
    $input: DeleteEssayInput!
    $condition: ModelEssayConditionInput
  ) {
    deleteEssay(input: $input, condition: $condition) {
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
