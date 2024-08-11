import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native';
import RepositoryMapList from './RepositoryMapList';
import RepositoryFlatList from './RepositoryFlatList';
import StyledText from './StyledText';


export default function Main() {
    return (
      <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>

        {/* <RepositoryMapList /> */}

        <RepositoryFlatList />

        <StyledText bold blue big> Texto extilizado reusable </StyledText>


      </View>
    );
  }
  
 