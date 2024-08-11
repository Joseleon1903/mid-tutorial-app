import Constants from 'expo-constants'
import {View , StyleSheet} from 'react-native';
import StyledText from './StyledText';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-native';

const AppBarTab = ( { children , to }: {
    children: ReactNode,
    to: string
})=>{

    const {pathname} = useLocation();

    const active = pathname === to;

    const textStyles = [
        active ? style.active: style.default,
        
    ];

    return (
        <Link to={to}>
            <StyledText big bold childStyles={textStyles}>{children}</StyledText>
        </Link>
    );
}

export default function AppBar() {
    return (
      <View style={{ flexGrow: 0, flexDirection: 'row',  backgroundColor: 'gray'} }>
        <AppBarTab to={'/'} >Repository</AppBarTab>
        <AppBarTab to={'/signin'}  >Sing in</AppBarTab>
      </View>
    );
  }
  

const style = StyleSheet.create({

    default:{
        fontSize: 25, 
        color: 'white',
        marginHorizontal: 10
    },
    active:{
        color: 'yellow',
        fontSize: 25,
        marginHorizontal: 10
    }
  

})
 