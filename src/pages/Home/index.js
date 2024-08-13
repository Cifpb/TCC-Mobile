import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    const navegation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.produto}>
                <Image source={require('../../assets/projetosG.png')} style={styles.projetosG} />
                <View style={styles.pai}>
                    <View>
                        <Text style={styles.catTexto}>Mídia Visual</Text>
                        <Text style={styles.subTexto}>Projetos Gráficos</Text>
                    </View>
                    <View>
                        <View style={styles.icones}>
                            <TouchableOpacity onPress={() => 0}>
                                <Feather name="trash-2" size={18} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => 0}>
                                <Octicons name="pencil" size={18} color="white" />
                            </TouchableOpacity>
                        </View>
                        <LinearGradient style={styles.button} colors={["#FFD54F", "#FFB300"]}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>R$ 1000,00</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    produto: {
        width: '100%',
        backgroundColor: '#414141',
        borderRadius: 20,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        margin: 2,
        padding: 5,
    },
    projetosG: {
        width: '100%',
        resizeMode: "contain"
    },
    pai: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    catTexto: {
        fontSize: 20,
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
    },
    subTexto: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'left',
        paddingLeft: 10,
    },
    icones: {
        width: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 16,
        padding: 4,
        borderRadius: 15,
        width: 120,
        alignItems: 'center'
    },
    buttonText: {
        color: '#414141',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
