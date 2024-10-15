import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
    const navegation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={300} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={300} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    placeholderTextColor="#b08504"
                    style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha..."
                    placeholderTextColor="#b08504"
                    style={styles.input}
                    secureTextEntry
                />
                 <TouchableOpacity style={styles.buttonSenha} onPress={() => navegation.navigate('Reset')}>
                    <Text style={styles.registerText}>Esqueceu Senha</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.button} onPress={() => navegation.navigate('Home')}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navegation.navigate('Register')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navegation.navigate('Product')}>
                    <Text style={styles.registerText}>Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navegation.navigate('Requests')}>
                    <Text style={styles.registerText}>Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navegation.navigate('Plans')}>
                    <Text style={styles.registerText}>Planos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navegation.navigate('Category')}>
                    <Text style={styles.registerText}>Categoria</Text>
                </TouchableOpacity>
                
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2B707',
       
    },
    containerHeader: {
        marginTop: '12%',
        marginBottom: '5%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#161413',
        
    },
    containerForm: {
        backgroundColor: '#161413',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 10,
    },
    title: {
        paddingHorizontal: 10,
        fontSize: 20,
        marginTop: 28,
        color: '#F2B707',
    },
    input: {
        borderBottomWidth: 1,
        borderRadius: 10,
        height: 40,
        fontSize: 16,
        backgroundColor: '#2e2d2d',
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#ffffff',
    },

    button: {
        backgroundColor: '#F2B707',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    buttonText: {
        color: '#161413',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#cfa62d'
    },
    buttonSenha:{
        marginTop: 14,
        
    }
});
