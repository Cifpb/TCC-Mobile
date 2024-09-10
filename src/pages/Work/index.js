import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


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


const Work = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <View style={styles.container}>
  <View style={styles.quadrado}>
  <Text style={styles.inf}>Informações Principais</Text>
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
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        dropdownStyle={styles.dropdownOpenedStyle}
      />
        <TextInput style={styles.textInput}
              placeholder="Subcategoria"
              placeholderTextColor={"#b08504"}/>


         <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#F2B707' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Adicionar Categoria' : '...'}
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
  );
};


export default Work;


const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor: 'black',
    padding: 16,
    alignContent:'center',
    flex: 1
  },
  dropdown: {
    height: 50,
    borderColor: '#b08504',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  dropdownOpenedStyle:{
    backgroundColor: 'black',
    borderColor: '#b08504'
  },
 
  quadrado:{
    borderWidth: 2,
    borderColor: '#F2B707',
    padding: 10,
    borderRadius: 8,
    height: 400
  },
  inf:{
    color: 'white',
    fontSize: 16,
    padding: '2%'
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'#b08504'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "black",
    color: 'white',
    borderRadius: 10,
    borderColor:'#b08504',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    height:50,
    fontSize: 16
  },
});


