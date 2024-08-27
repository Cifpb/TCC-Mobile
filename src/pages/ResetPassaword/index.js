import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Img from '../../assets/logo.png';

export default function Reset() {
  const navegation = useNavigation();
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    const validateEmail = (email) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    if (validateEmail(email) == true) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email]);

  useEffect(() => imgRef.current.startAnimation(500, 0, () => { }), []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animatable.Image
          animation="flipInY"
          delay={900}
          ref={r => imgRef.current = r}
          source={Img}
          style={styles.logo}
          resizeMode="contain"
        />
        <Animatable.Text delay={600} animation="fadeInUp" style={styles.title}>Redefinir Senha</Animatable.Text>
        <Animatable.Text delay={600} animation="fadeInUp" style={styles.text}>Informe um e-mail e enviaremos um link para a recuperação da sua senha.</Animatable.Text>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.inputButtonView}>
          <View style={styles.textInputContainer} >
            <Text style={styles.textInputLabel}>E-mail</Text>
            <TextInput type="email" style={valid ? styles.textInput : styles.invalidEmail}
              placeholder="Digite seu e-mail"
              placeholderTextColor={"#b08504"}
              value={email}
              onChangeText={text => setEmail(text)} />
          </View>
          <LinearGradient style={styles.button} colors={["#FFD54F", "#FFB300"]}>
            <TouchableOpacity style={styles.button} onPress={() => navegation.navigate('SignIn')}>
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
    width: 180,
    height: 180,
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
    marginBottom: 20,
    margin: 10
  },
  button: {
    padding: '1%',
    alignItems: 'center',
    borderRadius: '4',
    minWidth: "30%"
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center'
  },
  textInputLabel: {
    color: "#F2B707",
  },
  textInput: {
    backgroundColor: "#2e2d2d",
    color: '#ffffff',
    borderRadius: 10,
    minWidth: '100%',
  },
  invalidEmail: {
    backgroundColor: "#2e2d2d",
    color: '#ffffff',
    borderRadius: 10,
    padding: 8,
    color: "red",
    minWidth: '100%'
  },
  inputButtonView: {
    minWidth: "100%",
    alignItems: 'center',
    paddingHorizontal: 25
  },
  textInputContainer: {
    gap: 10,
    marginBottom: 20,
    alignItems: 'start',
    width: "100%",
  }
});