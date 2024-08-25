import { View , StyleSheet, Image, Animated, ImageProps, TouchableOpacityComponent, TouchableOpacity} from "react-native";
import { Palette } from "../utils/AppConstants";
import { useEffect, useRef, useState } from "react";
import { TypewriterText } from "./TypewriterText";
import DotComponent from "./DotComponent";

type SliderProps = {
    images : ImageProps[];
    text: string;
    speed? : number
    onFinish : () => void;
    index: number,
    setIndex : any;
};

export default function SliderScreen({images, text, speed=100, onFinish, index, setIndex }: SliderProps) {

    const slideAnim = useRef(new Animated.Value(-300)).current;


    const onImagePress = ()=>{
        console.log("entering on onImagePress ");
        console.log("index "+ index);

        if(index < images.length -1){
           setIndex(index +1);
        }else{
            setIndex(0);
        }
    }

    useEffect(() => {
        Animated.timing(
          slideAnim, // Valor que se animará
          {
            toValue: 0, // Valor final de la animación (posición visible)
            duration: 500, // Duración de la animación en milisegundos (1 segundo)
            useNativeDriver: true, // Optimiza la animación usando el driver nativo
          }
        ).start(); // Inicia la animación
    }, [slideAnim]);


    return (

        

        <View style={styles.container} >

           <TouchableOpacity onPress={onImagePress} style={{flex: 1} }> 

                <Animated.View style={[styles.imageContainer, {transform: [{ translateX: slideAnim }] }]}>

                    <Image source={images[index] }
                        style={styles.image} /> 

                </Animated.View>

                <View style={styles.textContainer} >

                    <TypewriterText text={text} speed={25} />

                </View>

                <View style={styles.dotContainer}>

                    {
                        Array.from({ length: images.length }).map((value, indexd) => (

                            <DotComponent active={true}/>
                            
                        ))
                    }


                </View>

            
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Palette.secondary
    },

    // imagen view
    imageContainer:{
        flex: 1,           
        justifyContent: 'center', 
        alignItems: 'center',
        height: 500
    },
    image: {
        flex: 1,  
        marginVertical:15,    // Alto de la imagen
        resizeMode: 'contain',  // Ajusta la imagen manteniendo la relación de aspecto
    },

    // Text view
    textContainer:{
        flex: 1,           
        justifyContent: 'center', 
        alignItems: 'center',
        flexShrink: 1

    },
    title:{
        color: Palette.secondaryLight,
        fontSize: 35,
        fontStyle: "normal",
        fontWeight: "bold"

    },
    // bottom
    dotContainer: {
        flex: 1,                         // Ocupa todo el espacio disponible
        flexDirection: 'row',            // Alinea los elementos en fila
        justifyContent: 'center',        // Centra horizontalmente las bolitas
        alignItems: 'center',
        maxHeight: 50            // Centra verticalmente las bolitas
    },
    

})