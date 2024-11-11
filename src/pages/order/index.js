import { useNavigation } from '@react-navigation/native';
import ped from "../../assets/pedidos/cards/ped.png";
import ped1 from "../../assets/pedidos/cards/ped1.png";
import ped2 from "../../assets/pedidos/cards/ped2.png";
import ped3 from "../../assets/pedidos/cards/ped3.png";
import voltar from "../../assets/pedidos/telaPed/voltar.png";
import pix from "../../assets/pedidos/telaPed/pix.png";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Order() {
    const navigation = useNavigation();
    return (
        <View style={styles.telaPedido} >
            <Image style={styles.voltar} source={voltar} />
            <View style={styles.blocoPedido}>
                <Text style={styles.idPed}>Pedido OPI65876</Text>
                <View style={styles.imgsProds}>
                    <Image style={styles.imgprod} source={ped} />
                    <Image style={styles.imgprod} source={ped1} />
                    <Image style={styles.imgprod} source={ped3} />
                    <Image style={styles.imgprod} source={ped2} />
                    <Image style={styles.imgprod} source={ped} />
                </View>
                <Text style={styles.dataProds}>Data  da Solicitação: 29/09/2024</Text>
                <Text style={styles.dataProds}>Data  de Conclusão: 10/10/2024</Text>
                <View style={styles.pagamento}>
                    <Text style={styles.idPed}>Pagamento</Text>
                    <Image source={pix} />
                    <Text>Pix</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    telaPedido: {
        backgroundColor: "black",
        flex: 1,
    },
    voltar: {
        width: 35,
        height: 45,
        margin: 15
    },
    blocoPedido: {
        margin: "2%",
        width: "97%",
        height: "90%",
        borderColor: '#E0C200',
        borderWidth: 2,
        borderRadius: 10,
    },
    idPed: {
        color: '#E0C200',
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    imgsProds: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imgprod: {
        margin: 7,
        borderRadius: 8,
    },
    dataProds: {
        fontSize: 16,
        color: '#E0C200',
        margin: 8,
    },
})