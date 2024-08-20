import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Reset() {
    const navegation = useNavigation();
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState("");

    useEffect(() => {
      const validateEmail = (email) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      };
  
      if(validateEmail(email) == true){
        setValid(true);
      } else {
        setValid(false);
      }
    }, [email]);
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
                <Animatable.Text delay={600} animation="fadeInUp" style={styles.title}>Redefinir Senha</Animatable.Text>
                <Animatable.Text delay={600} animation="fadeInUp" style={styles.text}>Informe um email e enviaremos um link para a recuperação da sua senha.</Animatable.Text>
                <Animatable.View delay={600} animation="fadeInUp">
        <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>E-mail</Text>
              <TextInput type="email" style={valid ? styles.textInput : styles.invalidEmail} 
              placeholder="Digite seu e-mail"
              placeholderTextColor={"#b08504"}
              value={email}
              onChangeText={text => setEmail(text)}/>
            </View>
            <LinearGradient style={styles.button} colors={["#FFD54F", "#FFB300"]}>
                    <TouchableOpacity style={styles.button} onPress={()=>navegation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                    </LinearGradient>
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
        paddingHorizontal: 15
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
        color: '#F2B707',
        marginBottom: 8
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20
    },
    button: {
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInputLabel: {
        color: "#F2B707",
        
      },

    textInput: {
        backgroundColor: "#2e2d2d",
        color: '#ffffff',
        borderRadius: 10,
        padding: 8,
        width:"60%"
      },
      invalidEmail: {
        backgroundColor: "#2e2d2d",
        color: '#ffffff',
        borderRadius: 10,
        padding: 8,
        color: "red"
      },
      textInputContainer: {
        gap: 10,
        marginBottom: 20
      }
});
