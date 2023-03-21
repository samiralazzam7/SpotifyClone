import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Essay } from "../../types";
import { getEssayCategory, listEssayAlbums } from '../../src/graphql/queries';
import { graphqlOperation, navItem, API } from "aws-amplify";
import styles from './styles';
import EssayComponent from "../Essay";
import AlbumComponent from '../Album';

export type EssayCategoryProps = {
  name: string,
  categoryID: string,
}

const EssayCategory = (props: EssayCategoryProps) => {

  const [titles, setTitles] = React.useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      let data = await API.graphql(graphqlOperation(getEssayCategory, { id: props.categoryID }));
      const essays = data.data.getEssayCategory.essays.items.filter(essay => essay.essayAlbumId == "NO_ALBUM");
      data = await API.graphql(graphqlOperation(listEssayAlbums, {}));
      // data = await API.graphql(graphqlOperation(listEssayAlbums, {
        // filter: {
          // categoryId: { eq: props.categoryID }
        // }
      // }))
      const albums = data.data.listEssayAlbums.items.filter(album => album.categoryId == props.categoryID);
      console.log("---")
      console.log(albums.length)

      setTitles(essays.concat(albums));
    } 

    fetchTitles();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}</Text>
      <FlatList
        data={titles}
        renderItem={({ item }) => {
          if (item.essayCategoryId) {
            return <EssayComponent essay={item} />
          } else {
            console.log("yooooo")
            return <AlbumComponent album={item} />
          }
        }}
        keyExtractor={( item ) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}

export default EssayCategory;
