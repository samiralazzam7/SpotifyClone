import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';

export type AlbumProps = {
  album: Album,
}

const AlbumComponent = (props: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    console.log("here")
    console.log(props.album)
    navigation.navigate('AlbumScreen', { albumId: props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
          <Image source={{uri: props.album.imageUri}} style={styles.image}/>
          <Text style={styles.text}>{props.album.name.split('_').join(' ')}</Text>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default AlbumComponent;
