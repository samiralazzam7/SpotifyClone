import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {Sound} from "expo-av/build/Audio/Sound";
import styles from './styles';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export type ControlPanelProps = {
  sound: Sound,
  position: number,
}

const ControlPanelComponent = (props: ControlPanelProps) => {

  
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlayPausePress = async () => {
    if (!props.sound) {
      return;
    }
    if (isPlaying) {
      await props.sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await props.sound.playAsync();
      setIsPlaying(true);
    }
  }

  const onStepAhead = async () => {
    if (!props.sound) {
      return;
    }
    props.sound.setPositionAsync(props.position + 50000)
  }

  const onStepBack = async () => {
    if (!props.sound) {
      return;
    }
    props.sound.setPositionAsync(props.position + 50000)
  }

  return (
    <View style={styles.controllerContainer}>

        <AntDesign name="fastbackward" size={30} color={"white"} style={styles.controls}/>
        
        <TouchableOpacity onPress={onStepAhead}>
          <AntDesign name="stepbackward" size={30} color={"white"} style={styles.controls}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPlayPausePress}>
          <AntDesign name={isPlaying ? "pause" : "play"} size={60} color={"white"} style={styles.controls}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onStepBack}>
          <AntDesign name="stepforward" size={30} color={"white"} style={styles.controls}/>
        </TouchableOpacity>
        
        <AntDesign name="fastforward" size={30} color={"white"} style={styles.controls}/>

    </View>
  )
}

export default ControlPanelComponent;
