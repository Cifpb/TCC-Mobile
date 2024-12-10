import { useNavigation } from '@react-navigation/native';
import ped from "../../assets/pedidos/cards/ped.png";
import ped1 from "../../assets/pedidos/cards/ped1.png";
import ped2 from "../../assets/pedidos/cards/ped2.png";
import ped3 from "../../assets/pedidos/cards/ped3.png";
import voltar from "../../assets/pedidos/telaPed/voltar.png";
import pix from "../../assets/pedidos/telaPed/pix.png";
import perfil from "../../assets/clientes/perfil.jpg";
import editar from "../../assets/pedidos/cards/lapis.png";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Order1() {
    const navigation = useNavigation();
    return (
        <View style={styles.telaPedido} >
            <TouchableOpacity onPress={() => navigation.navigate('Requests')}>
                <Image style={styles.voltar} source={voltar} />
            </TouchableOpacity>
            <View style={styles.blocoPedido}>
                <View style={styles.blocosuperior}>
                    <Text style={styles.idPed}>Pedido OPI65876</Text>
                    <Image style={styles.editar} source={editar} />
                </View>
                <View style={styles.imgsProds}>
                    <Image style={styles.imgprod} source={ped} />
                    <Image style={styles.imgprod} source={ped1} />
                    <Image style={styles.imgprod} source={ped3} />
                    <Image style={styles.imgprod} source={ped2} />
                    <Image style={styles.imgprod} source={ped} />
                </View>
                <Text style={styles.dataProds}>Data  da Solicitação: 29/09/2024</Text>
                <Text style={styles.dataProds}>Data  de Conclusão: 10/10/2024</Text>
                <Text style={styles.idPed}>Pagamento</Text>
                <View style={styles.parteinferior}>
                    <View style={styles.pagamento}>
                        <Image style={styles.imgPag} source={pix} />
                        <Text style={styles.dataProds}>Pix</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalPed}>ToTal:</Text>
                        <Text style={styles.totalPed}>855,00</Text>
                    </View>
                </View>
                <Text style={styles.idPed}>Cliente</Text>
                <View style={styles.cliente}>
                    <Image style={styles.perfil} source={perfil} />
                    <Text style={styles.nomecliente}>Maria Beatriz Dias da Silva</Text>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.negar}>
                        <Text style={styles.textoBotao}>Negar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.aceitar}>
                        <Text style={styles.textoBotao}>Aceitar</Text>
                    </TouchableOpacity>
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
    blocosuperior: {
        flexDirection: 'row',
        gap: 180,
    },
    editar: {
        marginTop: 15,
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
    imgPag: {
        marginLeft: 15,
    },
    parteinferior: {
        flexDirection: 'row',
        gap: 150,
        marginBottom: 10,
    },
    pagamento: {
        flexDirection: 'row',
    },
    total: {
        flexDirection: 'row',
        marginTop: 5,
    },
    totalPed: {
        color: '#E0C200',
        margin: 2,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cliente: {
        flexDirection: 'row',
        marginBottom: 190,
    },
    perfil: {
        height: 50,
        width: 50,
        marginLeft: 15,
        borderRadius: 30,
    },
    nomecliente: {
        fontSize: 16,
        color: '#E0C200',
        margin: 8,
        marginTop: 15,
    },
    negar: {
        backgroundColor: "#661515",
        width: 100,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textoBotao: {
        color: "white",
        fontWeight: 'bold',
    },
    aceitar: {
        backgroundColor: "#F2B707",
        width: 100,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    botoes: {
        flexDirection: 'row',
        marginLeft: 170,
        gap: 10,
    }
})