import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Switch,TouchableOpacity, KeyboardAvoidingView, Platform} from'react-native';
import { TextInputMask } from 'react-native-masked-text';
import ImagePicker from '../../components/ImagePicker';
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const [money1, setMoney1] = useState('');
  const [money2, setMoney2] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.prod}>Novo Produto</Text>
        
        <View style={styles.container}>
          <View style={styles.quadrado}>
            <Text style={styles.inf}>Informações principais</Text>
            <Text style={styles.dado}>Nome do Produto:</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="Insira o nome do produto"
              placeholderTextColor={"#b08504"} 
            />

            <Text style={styles.dado}>Descrição:</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="Descreva as principais características"
              placeholderTextColor={"#b08504"}
              multiline 
            />

<Text style={styles.dado}>Preço:</Text>
          <TextInputMask
            style={styles.textInput}
            placeholder="Insira o valor"
            placeholderTextColor={"#b08504"}
            type={'money'}
            options={{
              maskType: 'BRL',
            }}
            value={money1}
            onChangeText={text => setMoney1(text)}
          />
            <Text style={styles.dado}> Oferta:</Text>
            <TextInputMask
            style={styles.textInput}
            placeholder="Insira a porcentagem"
            placeholderTextColor={"#b08504"}
            type={'money'}
            options={{
              maskType: 'BRL',
            }}
            value={money2}
            onChangeText={text => setMoney2(text)}
          />
          </View>

          
          <View style={styles.addtela}>
            <Text style={styles.pri}>Principais trabalhos</Text>
            <Switch
              trackColor={{ false: '#626262', true: '#333131' }}
              thumbColor={isEnabled ? '#E0C200' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <Text style={styles.inf}>Imagem principal (Principais trabalhos)</Text>
          <ImagePicker />
          <Text style={styles.tam}>Tamanho recomendado: 000px x 000px</Text>

          <Text style={styles.inf}>Imagem portfólio (Catálogo)</Text>
          <ImagePicker />
          <Text style={styles.tam}>Tamanho recomendado: 000px x 000px</Text>

          <Text style={styles.inf}>Imagem secundária (Carrinho) </Text>
          <ImagePicker />
          <Text style={styles.tam}>Tamanho recomendado: 000px x 000px</Text>

          {/* Botões */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btsal} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btcanc} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Product;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    backgroundColor: 'black',
    padding: 16,
    flex: 1,
  },
  quadrado: {
    borderWidth: 2,
    borderColor: '#E0C200',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  dado: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 5,
  },
  addtela: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop: 15,
  },
  pri: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inf: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: 'bold'
  },
  tam: {
    color: '#626262',
    fontSize: 14,
    marginLeft: 7
  },
  prod: {
    color: 'white',
    fontSize: 20,
    marginTop: '10%',
    padding: '5%',
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10,
    borderColor: '#E0C200',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginTop: 20,
    marginBottom: 80,
  },
  btsal: {
    backgroundColor: '#E0C200',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '30%',
    alignItems: 'center',
  },
  btcanc: {
    backgroundColor: '#D9534F',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '30%',
    alignItems: 'center',
    marginRight: 12
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
});
