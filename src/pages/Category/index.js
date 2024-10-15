import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Seletor from '../../components/Dropdown';

export default function Category() {
    const navegation = useNavigation(); 
    const [isFocus, setIsFocus] = useState(false);
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

    return (
       <ScrollView style={styles.scrollView}>
        <Text style={styles.cat}> Nova Categoria</Text>
        <View style={styles.container}>
          <View style={styles.quadrado}>
          <Text style={styles.inf}>Informações principais</Text>
          <Text style={styles.dado}>Nome da categoria:</Text>
          <TextInput style={styles.textInput}
            placeholder="Insira o nome da categoria"
            placeholderTextColor={"#b08504"} />
              <Text style={styles.dado}>Selecionar produtos:</Text>
              <Seletor data={data} placeholder= "Selecionar produtos" />
          </View>
</View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black'
      },
      cat: {
        color: 'white',
        fontSize: 20,
        marginTop: '20%',
        padding: '5%',
        fontWeight: 'bold'
      },
      container: {
        backgroundColor: 'black',
        padding: 16,
        alignContent: 'center',
        flex: 1,
        color: 'black'
      },
      quadrado: {
        borderWidth: 2,
        marginBottom: '5%',
        borderColor: '#E0C200',
        padding: 10,
        borderRadius: 8,
        height: 250
      },
      inf: {
        color: 'white',
        fontSize: 16,
        padding: '2%',
        fontWeight: 'bold'
      },
      dado: {
        color: 'white',
        fontSize: 16,
        padding: '2%',
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
     
});

