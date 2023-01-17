import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Essay } from "../../types";
import styles from './styles';
import EssayComponent from "../Essay";

export type EssayCategoryProps = {
  name: string,
  essays: [Essay],
}

const EssayCategory = (props: EssayCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.name}>{props.name}</Text>
    <FlatList
      data={props.essays}
      renderItem={({ item }) => <EssayComponent essay={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
)

export default EssayCategory;
