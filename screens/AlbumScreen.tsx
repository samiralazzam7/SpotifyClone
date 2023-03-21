import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import EssayListItem from '../components/EssayListItem';
import AlbumHeader from '../components/AlbumHeader';
import { getAuthor, getEssayAlbum } from '../src/graphql/queries';

const AlbumScreen = () => {

  const route = useRoute();
  const albumId = route.params.albumId;

  const [album, setAlbum] = useState(null)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    console.log("whats up")
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getEssayAlbum, { id: albumId }))
        console.log("---> ")
        console.log(data.data.getEssayAlbum)
        setAlbum(data.data.getEssayAlbum)
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumDetails();
  }, [albumId])

  useEffect(() => {

    const fetchAuthorDetails = async () => {
        try {
            console.log("hmmm")
            console.log(album)
            const data = await API.graphql(graphqlOperation(getAuthor, { id: album.authorId }))
            setAuthor(data.data.getAuthor)
        } catch (e) {
            console.log(e)
        }
    }

    fetchAuthorDetails();
  }, [album])

  if (!album || !author) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <FlatList
        data={album.essays.items}
        renderItem={({ item }) => <EssayListItem essay={item} author={author} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  )
}

export default AlbumScreen;
