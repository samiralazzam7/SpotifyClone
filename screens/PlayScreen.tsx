import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import { getEssay } from '../src/graphql/queries';
import EssayComponent from '../components/Essay';

const PlayScreen = () => {

  const route = useRoute();
  const essayId = route.params.essayId;

  const [essay, setEssay] = useState(null)

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

  if (!essay) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
        <EssayComponent essay={essay} />
    </View>
  )
}

export default PlayScreen;
