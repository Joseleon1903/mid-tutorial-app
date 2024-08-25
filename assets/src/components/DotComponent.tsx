import { View, StyleSheet  } from "react-native";
import { Palette } from "../utils/AppConstants";

type DotProps = {
    active : boolean;
};

export default function DotComponent( {active} : DotProps) {


    return (
           <View style={ active ? styles.dotActive : styles.dot} />
    )

}

const styles = StyleSheet.create({
    dotActive: {
        width: 20,                       // Ancho de cada bolita
        height: 20,                      // Alto de cada bolita
        borderRadius: 10,                // Hace que sea un círculo
        backgroundColor: Palette.primary,         // Color de la bolita
        marginHorizontal: 10,            // Espacio entre las bolitas
    },
    dot: {
        width: 20,                       // Ancho de cada bolita
        height: 20,                      // Alto de cada bolita
        borderRadius: 10,                // Hace que sea un círculo
        backgroundColor: Palette.alternative,         // Color de la bolita
        marginHorizontal: 10,            // Espacio entre las bolitas
    }
})