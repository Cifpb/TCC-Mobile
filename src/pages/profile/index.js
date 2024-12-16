import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Seletor from '../../components/Dropdown';
import foto from "../../assets/perfil/fotoperfil.png"

export default function Profile () {
const navegation = useNavigation();

const nome = "Maria Beatriz";
const cpf = "000.000.000-00";
const telefone = "(00) 0 0000-0000";

const data = [
    { label: 'Nenhum', value: '1' },
    { label: 'Gold', value: '2' },
    { label: 'Platinum', value: '3' },
    { label: 'Diamond', value: '4' },
];

return (
 <ScrollView style={styles.scrollView}>
  <View style={styles.container}>
 <View style={styles.quadrado}>
<View style= {styles.perfil}>
<Image style={styles.fotoperfil} source={foto} />
</View>
  <Text style={styles.dado}>Nome:</Text>
  <Text style={styles.nome}>{nome}</Text>
  <Text style={styles.dado}>CPF:</Text>
  <Text style={styles.nome}>{cpf}</Text>
  <Text style={styles.dado}>Telefone:</Text>
  <Text style={styles.nome}>{telefone}</Text>
    <Text style={styles.dado}>Plano:</Text>
            <Seletor data={data} placeholder="Selecione um plano" />
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
        marginTop: '20%',
        borderColor: '#E0C200',
        padding: 10,
        borderRadius: 8,
        height: 650,
        gap: 10,
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
      nome: {
        color: '#E0C200',  
        fontSize: 16,    
        padding: '4%',   
        backgroundColor: 'black', 
        borderColor: '#E0C200',
        borderWidth: 1,
        borderRadius: 12,
      },
      fotoperfil: {
        width: 60,
        height: 60,
        borderColor: '#E0C200',
        borderWidth: 1,
        borderRadius: 30,
    },
    perfil: {
        marginTop: 6,
       alignItems: "center",
    },

});