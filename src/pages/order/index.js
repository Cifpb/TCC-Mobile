import { useNavigation } from '@react-navigation/native';
import ped from "../../assets/pedidos/cards/ped.png";
import ped1 from "../../assets/pedidos/cards/ped1.png";
import ped2 from "../../assets/pedidos/cards/ped2.png";
import ped3 from "../../assets/pedidos/cards/ped3.png";
import voltar from "../../assets/pedidos/telaPed/voltar.png"
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Order (){
   const navigation = useNavigation();
    return(
     <View style={styles.telaPedido} >
        <Image style={styles.voltar} source={voltar}/>
        <View style={styles.blocoPedido}>
          <Text style={styles.idPed}>Pedido OPI65876</Text>
          <View style={styles.imgsProds}>

          </View>
        </View>
     </View>
    );
}
const styles = StyleSheet.create({
    telaPedido:{
        backgroundColor: "black",
        flex: 1,
    },
    voltar: {
        width: 35,
        height: 45,
        margin: 15
    },
    blocoPedido:{
        margin: "2%",
        width: "97%",
        height: "90%",
        borderColor: '#E0C200',
        borderWidth: 2,
        borderRadius: 10,

    },
    idPed:{
        color: '#E0C200',
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    imgsProds:{
        flexDirection: 'row',
    }
})