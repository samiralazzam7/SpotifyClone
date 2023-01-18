import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Author } from "../../types";
import styles from './styles';

export type AuthorHeaderProps = {
  author: Author;
}

const AuthorHeader = (props: AuthorHeaderProps) => {
  const { author } = props;
  return (
      <View style={styles.container}>
      <Image source={{ uri: author.imageUri}} style={styles.image} />
      <Text style={styles.name}>{author.name.replaceAll('_', ' ')}</Text>
      {/* <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {author.name}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View> */}
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AuthorHeader;
