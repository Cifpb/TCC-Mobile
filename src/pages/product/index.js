import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {TextInputMask} from 'react-native-masked-text';


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
  const [money,setMoney] = useState('');


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <Text style={styles.trab}> NOVO PRODUTO</Text>
      <View style={styles.container}>
        <View style={styles.quadrado}>
          <Text style={styles.inf}>Informações Principais</Text>
          <Text style={styles.dado}>Categoria:</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#F2B707' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecionar Categoria' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}

          />
           <Text style={styles.dado}>Subcategoria:</Text>

          <TextInput style={styles.textInput}
            placeholder="Insira o nome do produto"
            placeholderTextColor={"#b08504"} />

          <Text style={styles.dado}>Classificação:</Text>

          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#F2B707' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={date}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Classifique o Trabalho' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.quadrado2}>
        <Text style={styles.inf}>Informações Secundaria</Text>
        <Text style={styles.dado}>Descrição:</Text>
        <TextInput style={styles.textInput}
            placeholder="Descreva as principais características "
            placeholderTextColor={"#b08504"} />
            <Text style={styles.dado}>Preço PIX:</Text>
            <TextInputMask 
              style={styles.textInput}
              placeholder="Insira o valor"
              placeholderTextColor={"#b08504"}
              type= {'money'}
              options={{
                maskType:'BRL',
              }}
              value={money}
              onChangeText={text => setMoney(text)}
              />
              <Text style={styles.dado}>Preço cartão credito/debito:</Text>
              <TextInputMask 
              style={styles.textInput}
              placeholder="Insira o valor"
              placeholderTextColor={"#b08504"}
              type= {'money'}
              options={{
                maskType:'BRL',
              }}
              value={money}
              onChangeText={text => setMoney(text)}
              />
               <Text style={styles.dado}>Parcelamento:</Text>
               <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#F2B707' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={parc}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Escolha o parcelamento' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};


export default Product;

const styles = StyleSheet.create({

  scrollView: {
    flexGrow: 1, 
    backgroundColor: 'black'
  },

  container: {
    backgroundColor: 'black',
    padding: 16,
    alignContent: 'center',
    flex: 1,
    color: 'black',
    height:'100%'
  },
  dropdown: {
    height: 50,
    borderColor: '#b08504',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  quadrado: {
    borderWidth: 2,
    marginBottom: '5%',
    borderColor: '#F2B707',
    padding: 10,
    borderRadius: 8,
    height: 330
  },
  quadrado2: {
    borderWidth: 2,
    marginBottom: '5%',
    borderColor: '#F2B707',
    padding: 10,
    borderRadius: 8,
    height: 420
  },
  dado: {
    color: 'white',
    fontSize: 16,
    padding: '2%',
  },
  inf:{
    color: 'white',
    fontSize: 16,
    padding: '2%',
    fontWeight: 'bold'
  },
  trab: {
    color: 'white',
    fontSize: 20,
    marginTop: '20%',
    padding: '5%',
    fontWeight: 'bold'
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#b08504',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  textInput: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10,
    borderColor: '#b08504',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    height: 50,
    fontSize: 16,
  },
});