import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navegation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Animatable.Image
                    animation="flipInY"
                    delay={900}
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Animatable.Text delay={600} animation="fadeInUp" style={styles.title}>Seja Bem Vindo(a)!</Animatable.Text>
                <Animatable.Text delay={600} animation="fadeInUp" style={styles.text}>Faça o login para começar</Animatable.Text>
                <Animatable.View delay={600} animation="fadeInUp">
                    <TouchableOpacity style={styles.button} onPress={()=>navegation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161413',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logo: {
        right: 5,
        width: 200,
        height: 200,
        marginBottom: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#F2B707',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});
