import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from '../product/components/ImagePicker';

export default function Plans() {
    const navegation = useNavigation(); 
    
    return (
       <ScrollView style={styles.scrollView}>
        <Text style={styles.plan}> Novo Plano</Text>
        <View style={styles.container}>
          <View style={styles.quadrado}>
          <Text style={styles.inf}>Informações principais</Text>
          <Text style={styles.dado}>Tipo do plano:</Text>
          <TextInput style={styles.textInput}
            placeholder="Descreva o tipo do plano"
            placeholderTextColor={"#b08504"} />
          <Text style={styles.dado}>Descrição:</Text>
          <TextInput style={styles.textInput}
            placeholder="Descreva as característica do plano"
            placeholderTextColor={"#b08504"} 
            multiline={true}/>
            <Text style={styles.dado}>Porcentagem:</Text>
            <TextInput style={styles.textInput}
            placeholder="Insira a porcentagem"
            placeholderTextColor={"#b08504"} 
           />
          </View>
          <View> 
          <Text style={styles.inf}>Imagem principal do plano</Text>
          <ImagePicker />
          <Text style={styles.tam}>tamanho recomendado: 000px x 000px</Text>
          <Text style={styles.inf}>Upload documento</Text>
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
        </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black'
      },
      plan: {
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
        height: 330
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
      tam: {
        color: '#626262',
        fontSize: 16,
        marginLeft: 7
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

