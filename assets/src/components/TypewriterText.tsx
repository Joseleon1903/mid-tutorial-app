import { useState, useEffect } from "react";
import { View , Text, StyleSheet} from "react-native";
import { Palette } from "../utils/AppConstants";

type TypewriterProps = {
    text: string;
    speed? : number
};

export const TypewriterText = ({ text, speed = 100 }: TypewriterProps ) => {

    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;

  
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
  
        if (currentIndex >= text.length) {
          clearInterval(interval); // Detiene la animación cuando se completa el texto
        }
      }, speed);
  
      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [text, speed]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{displayedText}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    text: {
      fontSize: 24,
      color: Palette.secondaryLight,
      fontWeight: 'bold',
    },
  });