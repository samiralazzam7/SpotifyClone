import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';

import styles from './styles';
import {Essay} from "../../types";
import {Sound} from "expo-av/build/Audio/Sound";

import { AppContext } from '../../AppContext';
import {getEssay} from "../../src/graphql/queries";

const PlayerWidget = () => {

  const [essay, setEssay] = useState(null);
  const [sound, setSound] = useState<Sound|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);

  const { essayId } = useContext(AppContext);

  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getEssay, { id: essayId }))
        setEssay(data.data.getEssay);
      } catch (e) {
        console.log(e);
      }
    }

    fetchEssay();
  }, [essayId])

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }

  const playCurrentEssay = async () => {
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

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%`}]} />
      <View style={styles.row}>
        <Image source={{ uri: essay.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{essay.name}</Text>
            <Text style={styles.author}>{essay.authorId}</Text>
          </View>

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
