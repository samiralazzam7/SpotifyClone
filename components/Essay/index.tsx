import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Essay } from '../../types';

export type EssayProps = {
  essay: Essay,
}

const EssayComponent = (props: EssayProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AuthorScreen', { authorId: props.essay.authorId })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
          <Image source={{uri: props.essay.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.essay.authorId}</Text>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default EssayComponent;
