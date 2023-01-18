import React, {useContext} from 'react';
import {Text, Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Essay, Author} from "../../types";
import { AppContext } from '../../AppContext';
import AuthorHeader from '../AuthorHeader';

export type EssayListItemProps = {
  essay: Essay
  author: Author
}

const EssayListItem = (props: EssayListItemProps) => {
  const { essay, author } = props;

  const { setEssayId } = useContext(AppContext);

  const onPlay = () => {
    setEssayId(essay.id);
  }

  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <Image source={{ uri: essay.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{essay.name.replaceAll('_', ' ')}</Text>
          <Text style={styles.author}>{author.name.replaceAll('_', ' ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default EssayListItem;
