import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import EssayListItem from '../components/EssayListItem';
import AuthorHeader from '../components/AuthorHeader';
import { getAuthor } from '../src/graphql/queries';

const AuthorScreen = () => {

  const route = useRoute();
  const authorId = route.params.authorId;

  const [author, setAuthor] = useState(null)

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        console.log("hahahahahahha")
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [])
  );
  
  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAuthor, { id: authorId }))
        setAuthor(data.data.getAuthor)
      } catch (e) {
        console.log(e);
      }
    }

    fetchAuthorDetails();
  }, [])

  if (!author) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <FlatList
        data={author.essays.items}
        renderItem={({ item }) => <EssayListItem essay={item} author={author} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AuthorHeader author={author} />}
      />
    </View>
  )
}

export default AuthorScreen;
