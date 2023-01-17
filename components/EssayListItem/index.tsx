import React, {useContext} from 'react';
import {Text, Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Essay} from "../../types";
import { AppContext } from '../../AppContext';

export type EssayListItemProps = {
  essay: Essay
}

const EssayListItem = (props: EssayListItemProps) => {
  const { essay } = props;

  const { setEssayId } = useContext(AppContext);

  const onPlay = () => {
    setEssayId(essay.id);
  }

  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <Image source={{ uri: essay.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{essay.name}</Text>
          <Text style={styles.author}>{essay.authorId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default EssayListItem;
