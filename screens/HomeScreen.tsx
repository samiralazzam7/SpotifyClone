import * as React from 'react';
import { StyleSheet, FlatList, View  } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';

import EssayCategory from '../components/EssayCategory';
import { listEssayCategorys } from '../src/graphql/queries';
import {useEffect, useState} from "react";

export default function HomeScreen() {

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchEssayCategorys = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listEssayCategorys));
        setCategorys(data.data.listEssayCategorys.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchEssayCategorys();
  }, []);


  return (
    <View style={styles.container}>
       <FlatList
         data={categorys}
         renderItem={({ item }) => (
           <EssayCategory
             name={item.name}
             categoryID={item.id}
           />
         )}
         keyExtractor={(item) => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
