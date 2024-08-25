import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import {View, Text } from 'react-native';
import RepositoryFlatList from './RepositoryFlatList';
import AppBar from './AppBar';
import {Navigate, Route, Routes} from 'react-router-native';
import VideoPlayerScreen from './VideoPlayerScreen';
import SliderScreen from './SliderScreen';
import { useState } from 'react';

export default function Main() {

  const images = [
    require('../image/image.png'),
    require('../image/image_1.png'),
    require('../image/image_2.png'),
    require('../image/mario-hd-png-mario-bros-png-transparent.png'),
  ];

    const textoSlider :string ="Cada paso que das, por pequeño que sea, te acerca un poco más a tus sueños. Sigue adelante con determinación y nunca te rindas.";

    const [imageIndex, setImageIndex] = useState<number>(0);


    const returnHome = ()=>{

      console.log("last image show");
      console.log("go next");

    }

    return (
      <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>

        {/* <RepositoryMapList /> */}

        <AppBar />


        
        <Routes>
          <Route path='/' element={<RepositoryFlatList />} />
          <Route path='/signin' element={<Text>Sign In</Text>} />
          <Route path='/video-player' element={<VideoPlayerScreen />} />
          <Route path='/slider' element={<SliderScreen images={images} text={textoSlider} onFinish={returnHome} index={imageIndex} setIndex={setImageIndex}/>} />
          <Route path='*' element={<Navigate to='/' />} />            
        </Routes>




      </View>
    );
  }
  
 