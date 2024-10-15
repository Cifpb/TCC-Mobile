import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';

export default function Register() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState("");
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');

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
  const navegation = useNavigation();
  return (
    <KeyboardAvoidingView behavior={'height'} style={styles.scrollView}>
      <Animatable.View animation="fadeInUp" delay={1} style={styles.container}>
        <FontAwesome name="user-circle-o" size={60} color="#E0C200" style={styles.iconUser} />
        <View>
          <Animatable.View animation="fadeInUp" style={styles.viewCentral}>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Nome de usuário</Text>
              <TextInput style={styles.textInput}
                placeholder="Digite seu nome"
                placeholderTextColor={"#b08504"} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>E-mail</Text>
              <TextInput type="email" style={valid ? styles.textInput : styles.invalidEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor={"#b08504"}
                value={email}
                onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Telefone</Text>
              <TextInputMask
                style={styles.telefInput}
                placeholder="+00 00 0000-0000"
                placeholderTextColor={"#b08504"}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '+ 99 (99) ',


                }}
                value={cell}
                onChangeText={text => setCell(text)}
              />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>CPF</Text>
              <TextInputMask
                style={styles.cpfInput}
                placeholder="000.000.000-00"
                placeholderTextColor={"#b08504"}
                type={'cpf'}

                value={cpf}
                onChangeText={text => setCpf(text)}
              />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Senha</Text>
              <TextInput style={styles.textInput}
                secureTextEntry
                minLength={8}
                maxLength={12}
                placeholder="Digite sua senha"
                placeholderTextColor={"#b08504"} />
            </View>
            <View style={styles.textInputContainer} >
              <Text style={styles.textInputLabel}>Confirmar senha</Text>
              <TextInput style={styles.textInput}
                secureTextEntry
                minLength={8}
                maxLength={12}
                placeholder="Digite sua senha novamente"
                placeholderTextColor={"#b08504"} />

            </View>
            <View style={styles.parteInferior}>
              <TouchableOpacity onPress={() => navegation.navigate('SignIn')} >
                <Text style={styles.textPosuiconta}> Possuo cadastro</Text>
              </TouchableOpacity>
              <LinearGradient style={styles.textoBotao} colors={["#FFD54F", "#FFB300"]}>
                <TouchableOpacity onPress={() => navegation.navigate('Home')} style={styles.botaoCadastro}>
                  <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Animatable.View>
        </View>

      </Animatable.View>
    </KeyboardAvoidingView>

  );
}


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },

  viewCentral: {
    height: 600,
    width: 350,
    borderWidth: 5,
    borderColor: "#E0C200",
    borderRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  textInputLabel: {
    color: "#E0C200"
  },
  textPosuiconta: {
    color: "#E0C200"
  },

  textInput: {
    backgroundColor: "#2e2d2d",
    color: 'white',
    borderRadius: 10,
    padding: 8
  },
  invalidEmail: {
    backgroundColor: "#2e2d2d",
    color: 'white',
    borderRadius: 10,
    padding: 8,
    color: "red"
  },
  textInputContainer: {
    gap: 10,
    marginBottom: 20
  },
  botaoCadastro: {
    borderRadius: 10,
    padding: 6
  },
  parteInferior: {
    flexDirection: "row",
    gap: 100,
  },
  textoBotao: {
    fontWeight: "bold",
    borderRadius: 10,
    color: 'white'
  },
  iconUser: {
    top: '-10px',
  },
  telefInput: {
    backgroundColor: "#2e2d2d",
    color: 'white',
    borderRadius: 10,
    padding: 8
  },
  cpfInput: {
    backgroundColor: "#2e2d2d",
    color: 'white',
    borderRadius: 10,
    padding: 8
  }

});


