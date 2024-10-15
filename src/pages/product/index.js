import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Switch,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Seletor from '../../components/Dropdown';
import { TextInputMask } from 'react-native-masked-text';
import ImagePicker from '../../components/ImagePicker';
import { useNavigation } from "@react-navigation/native";


const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const date = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const parc = [
  { label: '1X', value: '1' },
  { label: '2X', value: '2' },
  { label: '3X', value: '3' },
  { label: '4X', value: '4' },
  { label: '5X', value: '5' },
  { label: '6x', value: '6' },
  { label: '7X', value: '7' },
  { label: '8X', value: '8' },
];


const Product = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [money1, setMoney1] = useState('');
  const [money2, setMoney2] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navegation = useNavigation();


  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.prod}> Novo Produto</Text>
      <View style={styles.container}>
        <View style={styles.quadrado}>
          <Text style={styles.inf}>Informações principais</Text>
          <Text style={styles.dado}>Categoria:</Text>
          <Seletor data={data} placeholder= "Selecionar Categoria" search={true} />
          <Text style={styles.dado}>Subcategoria:</Text>

          <TextInput style={styles.textInput}
            placeholder="Insira o nome do produto"
            placeholderTextColor={"#b08504"} />
        </View>
        <View style={styles.quadrado2}>
          <Text style={styles.inf}>Informações secundárias</Text>
          <Text style={styles.dado}>Descrição:</Text>
          <TextInput style={styles.textInput}
            placeholder="Descreva as principais características "
            placeholderTextColor={"#b08504"} 
            multiline={true}/>
          <Text style={styles.dado}>Preço PIX:</Text>
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
          <Text style={styles.dado}>Preço cartão crédito/débito:</Text>
          <TextInputMask
            style={styles.textInput}
            placeholder="Insira o valor"
            placeholderTextColor={"#b08504"}
            type={'money'}
            options={{
              maskType: 'BRL',
            }}
            value={money2}
            onChangeText={text => setMoney2(text)}
          />
          <Text style={styles.dado}>Parcelamento:</Text>
          <Seletor data={data} placeholder= "Selecionar parcelamento" />
        </View>
        <Text style={styles.inf}>Imagem principal (Web)</Text>
        <ImagePicker />
        <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>

        <Text style={styles.inf}>Imagem principal (Mobile)</Text>
        <ImagePicker />
        <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>

        <View style={styles.addtela}>
        <Text style={styles.pri}>Principais trabalhos</Text>
        <Switch
        trackColor={{false: '#626262', true: '#333131'}}
        thumbColor={isEnabled ? '#E0C200' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
        <Text style={styles.inf}>Imagem principal (Principais trabalhos)</Text>
          <ImagePicker />
          <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>
          <Text style={styles.inf}>Imagem portfólio (Catálogo)</Text>
          <ImagePicker />
          <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>
          <Text style={styles.inf}>Imagem secundária (Carrinho) </Text>
          <ImagePicker />
          <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>
      </View>
          <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.btsal} onPress={() => navegation.navigate('Home')}>
      <Text style={styles.buttonText}>Salvar</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btcanc} onPress={() => navegation.goBack('Home')}>
    <Text style={styles.buttonText}>Cancelar</Text>
  </TouchableOpacity>
</View>
    </ScrollView>
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
    alignContent: 'center',
    flex: 1,
    color: 'black'
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  quadrado: {
    borderWidth: 2,
    marginBottom: '5%',
    borderColor: '#E0C200',
    padding: 10,
    borderRadius: 8,
    height: 240
  },
  quadrado2: {
    borderWidth: 2,
    marginBottom: '8%',
    borderColor: '#E0C200',
    padding: 10,
    borderRadius: 8,
    height: 420
  },
  dado: {
    color: 'white',
    fontSize: 16,
    padding: '2%',
  },
  addtela:{
    flexDirection: 'row',
    gap: 150,
    marginTop: 15
  },
  pri: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },

  inf: {
    color: 'white',
    fontSize: 16,
    padding: '2%',
    fontWeight: 'bold'
  },
  tam: {
    color: '#626262',
    fontSize: 16,
    marginLeft: 7
  },
  prod: {
    color: 'white',
    fontSize: 20,
    marginTop: '20%',
    padding: '5%',
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10,
    borderColor: '#E0C200',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    height: 50,
    fontSize: 16,
  },
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: 15,
  marginTop: 20,
  marginBottom: 40, 
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