import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import { getEssay, getAuthor } from '../src/graphql/queries';
import EssayComponent from '../components/Essay';
import ControlPanel from '../components/ControlPanel';

const PlayScreen = () => {

  const route = useRoute();
  const essayId = route.params.essayId;

  const [essay, setEssay] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchEssayDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getEssay, { id: essayId }))
        setEssay(data.data.getEssay)
      } catch (e) {
        console.log(e);
      }
    }

    fetchEssayDetails();
  }, [])

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAuthor, { id: essay.authorId }))
        setAuthor(data.data.getAuthor)
      } catch (e) {
        console.log(e);
      }
    }

    fetchAuthorDetails();
  }, [])

  if (!essay || !author) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container} >
      <Image source={{uri: essay.imageUri}} style={styles.image} />
      <Text style={styles.title}>{essay.name.replaceAll('_', ' ')}</Text>
      <Text style={styles.name}>{author.name.replaceAll('_', ' ')}</Text>
      <ControlPanel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    // paddingTop: 40,
  },
  image: {
    width: 300,
    height: 300,
    margin: 15,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  name: {
    color: 'grey',
    fontSize: 15,
    // fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingBottom: 10,
  },
});

export default PlayScreen;
