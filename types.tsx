export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  Home: undefined;
  Search: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  // AuthorParentScreen: undefined;
  AuthorScreen: undefined;
  PlayScreen: undefined;
};

// export type TabOneSubParamList = {
//   AuthorScreen: undefined;
//   PlayScreen: undefined;
// }

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Essay = {
  id: string;
  name: string;
  imageUri: string;
  audioUri: string;
  essayAlbumId: string;
  essayCategoryId: string;
  authorId: string;
}

export type Album = {
  id: string;
  name: string;
  imageUri: string;
  essays: Essay[];
  authorId: string;
  categoryId: string;
}

export type Author = {
  id: string;
  imageUri: string;
  name: string;
}

export type Category = {
  id: string;
  name: string;
}