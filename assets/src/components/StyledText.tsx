
import { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function StyledText({
    blue,
    bold,
    children,
    big, 
    small
  }: {
    blue?: boolean;
    bold?: boolean;
    children: ReactNode;
    big?: boolean;
    small?: boolean;
  }) {

    const textStyles = [
        style.text,
        blue && style.blue,
        bold && style.bold,
        big && style.big,
        small && style.small
    ];


    return (
      <View>

        <Text style={textStyles}> 
            {children}    
        </Text>

      </View>
    );
}

const style = StyleSheet.create({

    text:{
        fontSize: 12, 
        color: 'grey'
    },
    bold:{
        fontWeight: 200
    },
    blue:{
        color: 'blue'

    },
    big:{
        fontSize:20
    },
    small:{
        fontSize:12

    }

});
  