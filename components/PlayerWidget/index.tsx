import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';

import styles from './styles';
import {Sound} from "expo-av/build/Audio/Sound";
import {Audio} from "expo-av"

import { AppContext } from '../../AppContext';
import {getEssay, getAuthor} from "../../src/graphql/queries";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as RootNavigation from '../../navigation/index'

const PlayerWidget = () => {

  const [essay, setEssay] = useState(null);
  const [authorName, setAuthorName] = useState<String|null>(null);
  const [sound, setSound] = useState<Sound|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);

  const { essayId } = useContext(AppContext);

  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const essayPromise = await API.graphql(graphqlOperation(getEssay, { id: essayId }));
        setEssay(essayPromise.data.getEssay);
      } catch (e) {
        console.log(e);
      }
    }

    fetchEssay();
  }, [essayId])

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const authorPromise = await API.graphql(graphqlOperation(getAuthor, { id: essay.authorId }));
        setAuthorName(authorPromise.data.getAuthor.name.replaceAll('_', ' '));
      } catch (e) {
        console.log(e);
      }
    }

    fetchAuthor();
  }, [essay])

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }

  const playCurrentEssay = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });

    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: essay.audioUri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    )
    setSound(newSound)
  }

  useEffect(() => {
    if (essay) {
      playCurrentEssay();
    }
  }, [essay])

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  }

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  }

  if (!essay) {
    return null;
  }

  const onPress = () => {
    RootNavigation.navigate('PlayScreen', { essayId: essay.id })
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%`}]} />
      <View style={styles.row}>
        <Image source={{ uri: essay.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.nameContainer}>
              <Text style={styles.name} numberOfLines={1}>{essay.name.replaceAll('_', ' ')}</Text>
              <Text style={styles.author} numberOfLines={1}>{authorName}</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={"white"}/>
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PlayerWidget;
