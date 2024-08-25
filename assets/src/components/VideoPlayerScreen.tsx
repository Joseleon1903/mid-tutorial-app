import { View , Text, Button, StyleSheet, Dimensions} from "react-native";
import Constants from 'expo-constants'
import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av";
import React from "react";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utils/AppConstants";

export default function VideoPlayerScreen() {

    const video = React.useRef<Video>(null);
    const [status, setStatus] = React.useState<any>();
    
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../video/footbalvideo.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        
        
        //onPlaybackStatusUpdate={status => setStatus(status)}
      />



    </View>
  );
  }

const BACKGROUND_COLOR = "#FFF8ED";
const FONT_SIZE = 14;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;

  const styles = StyleSheet.create({
    emptyContainer: {
      alignSelf: "stretch",
      backgroundColor: BACKGROUND_COLOR
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
      backgroundColor: BACKGROUND_COLOR
    },
    wrapper: {},
    nameContainer: {
      height: FONT_SIZE
    },
    space: {
      height: FONT_SIZE
    },
    videoContainer: {
      height: VIDEO_CONTAINER_HEIGHT
    },

    video: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT /2,

        marginHorizontal:10
      
    },
    playbackSlider: {
      alignSelf: "stretch"
    },
    timestampRow: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      alignSelf: "stretch",
      minHeight: FONT_SIZE
    },
    text: {
      fontSize: FONT_SIZE,
      minHeight: FONT_SIZE
    },
    buffering: {
      textAlign: "left",
      paddingLeft: 20
    },
    timestamp: {
      textAlign: "right",
      paddingRight: 20
    },
    button: {
      backgroundColor: BACKGROUND_COLOR
    },
    buttonsContainerBase: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },


    volumeContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: DEVICE_WIDTH / 2.0,
      maxWidth: DEVICE_WIDTH / 2.0
    },

    buttonsContainerBottomRow: {
      maxHeight: 32,
      alignSelf: "stretch",
      paddingRight: 20,
      paddingLeft: 20
    },
    rateSlider: {
      width: DEVICE_WIDTH / 2.0
    },
    buttonsContainerTextRow: {
      maxHeight: FONT_SIZE,
      alignItems: "center",
      paddingRight: 20,
      paddingLeft: 20,
      minWidth: DEVICE_WIDTH,
      maxWidth: DEVICE_WIDTH
    }
  });

  
