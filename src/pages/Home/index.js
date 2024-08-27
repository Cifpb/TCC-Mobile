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
            <Animatable.View animation="fadeInUp" delay={300} style={styles.produto}>
                <Image source={require('../../assets/projetosP.png')} style={styles.imagemProd} />
                <View style={styles.caixapai}>
                    <View style={styles.caixaE}>
                        <Text style={styles.catTexto}>Mídia Visual</Text>
                        <Text style={styles.subTexto}>Projetos Gráficos</Text>
                    </View>
                    <View style={styles.caixaD}>
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
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    produto: {
        width: '100%',
        backgroundColor: '#414141',
        borderRadius: 20,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        margin: 2,
    },
    imagemProd: {
        width: '100%',
        height: 150,
        marginTop: 4,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    caixapai: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    caixaE: {
        paddingLeft: 25,
        marginBottom: 15,
    },
    caixaD: {
        paddingRight: 25,
        marginBottom: 15,
    },
    catTexto: {
        fontSize: 20,
        color: '#FFD54F',
        fontWeight: 'bold',
    },
    subTexto: {
        fontSize: 16,
        color: '#ccc',
        marginTop: 2,
    },
    icones: {
        paddingLeft: 50,
        width: 117,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 2,
        padding: 4,
        borderRadius: 10,
        width: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: '#414141',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
