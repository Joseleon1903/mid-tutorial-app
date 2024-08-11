import { View, Text } from "react-native";
import Repositories from "../data/repository.json";
import Repository from "../types/Repository";


export default function RepositoryMapList() {

    const repositoryList = Repositories as Repository[];

    return (

      <View>

        {
            repositoryList.map( item =>(
                <View key={item.id}>
                    <Text>{item.nombre}</Text>
                    <Text>{item.descripcion}</Text>
                    <Text>{item.url}</Text>
                    <Text>{item.lenguaje}</Text>
                </View>
            ))

        }

      </View>
    );
  }
  