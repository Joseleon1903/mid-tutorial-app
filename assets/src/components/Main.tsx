import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import {View, Text } from 'react-native';
import RepositoryFlatList from './RepositoryFlatList';
import AppBar from './AppBar';
import {Navigate, Route, Routes} from 'react-router-native';

export default function Main() {
    return (
      <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>

        {/* <RepositoryMapList /> */}

        <AppBar />

        
        <Routes>
          <Route path='/' element={<RepositoryFlatList />} />
          <Route path='/signin' element={<Text>Sign In</Text>} />
          <Route path='*' element={<Navigate to='/' />} />            
        </Routes>




      </View>
    );
  }
  
 