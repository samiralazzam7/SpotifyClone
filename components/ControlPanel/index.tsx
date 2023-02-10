import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styles from './styles';

export type ControlPanelProps = {

}

const ControlPanelComponent = (props: ControlPanelProps) => {

  return (
    <View style={styles.controllerContainer}>

        <AntDesign name="fastbackward" size={30} color={"white"} style={styles.controls}/>
        <AntDesign name="stepbackward" size={30} color={"white"} style={styles.controls}/>
        <AntDesign name="play" size={60} color={"white"} style={styles.controls}/>
        <AntDesign name="stepforward" size={30} color={"white"} style={styles.controls}/>
        <AntDesign name="fastforward" size={30} color={"white"} style={styles.controls}/>


        {/* <TouchableOpacity onPress={onPlayPausePress}> */}
            {/* <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/> */}
        {/* </TouchableOpacity> */}
    </View>
  )
}

export default ControlPanelComponent;
