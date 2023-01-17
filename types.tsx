export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AuthorScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Essay = {
  id: string;
  name: string;
  imageUri: string;
  audioUri: string;
  essayCategoryId: string;
  authorId: string;
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