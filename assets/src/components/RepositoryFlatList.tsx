import { View, Text, FlatList } from "react-native";
import Repositories from "../data/repository.json";
import Repository from "../types/Repository";



export default function RepositoryFlatList() {

    const repositoryList = Repositories as Repository[];



    return (

      <View>

        <FlatList data={repositoryList}

        renderItem={({item, index}) =>
            <View key={item.id}>
                <Text>{item.nombre}</Text>
                <Text>{item.descripcion}</Text>
                <Text>{item.url}</Text>
                <Text>{item.lenguaje}</Text>
            </View>
        }
        keyExtractor={item => item.nombre}/>


      </View>
    );
  }
  