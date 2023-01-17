/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEssayCategory = /* GraphQL */ `
  subscription OnCreateEssayCategory {
    onCreateEssayCategory {
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
export const onUpdateEssayCategory = /* GraphQL */ `
  subscription OnUpdateEssayCategory {
    onUpdateEssayCategory {
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
export const onDeleteEssayCategory = /* GraphQL */ `
  subscription OnDeleteEssayCategory {
    onDeleteEssayCategory {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateEssay = /* GraphQL */ `
  subscription OnCreateEssay {
    onCreateEssay {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEssay = /* GraphQL */ `
  subscription OnUpdateEssay {
    onUpdateEssay {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEssay = /* GraphQL */ `
  subscription OnDeleteEssay {
    onDeleteEssay {
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
      createdAt
      updatedAt
    }
  }
`;
