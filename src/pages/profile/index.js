import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import editar from "../../assets/pedidos/cards/lapis.png";
import foto from "../../assets/perfil/foto.jpg";

export default function Profile() {
    const navigation = useNavigation();

    const nome = "Maria Beatriz Dias da Silva";
    const email = "bia4056@gmail.com";
    const cpf = "000.000.000-00";
    const telefone = "(12) 3 4567-8910";
    const dataN = "26/07/2006";
    const localizacao = "----";

    return (
   
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={300} style={styles.containerHeader}>
                <Text style={styles.message}>Perfil</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={300} style={styles.containerForm}>
    <TouchableOpacity style={styles.lapisContainer}>
        <Image style={styles.lapis} source={editar} />
    </TouchableOpacity>
    <View style={styles.profileHeader}>
        <Image style={styles.fotoperfil} source={foto} />
    </View>
    
    <Text style={styles.label}>Nome:</Text>
    <Text style={styles.info}>{nome}</Text>
    <Text style={styles.label}>E-mail:</Text>
    <Text style={styles.info}>{email}</Text>
    <Text style={styles.label}>CPF:</Text>
    <Text style={styles.info}>{cpf}</Text>
    <Text style={styles.label}>Telefone:</Text>
    <Text style={styles.info}>{telefone}</Text>
    <Text style={styles.label}>Data de Nascimento:</Text>
    <Text style={styles.info}>{dataN}</Text>
    <Text style={styles.label}>Localização:</Text>
    <Text style={styles.info}>{localizacao}</Text>
</Animatable.View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2B707',
    },
    containerHeader: {
      marginTop: '12%',
      marginBottom: '5%',
      paddingStart: '5%',
      position: 'relative',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#161413',
        marginTop: 10,
    },
    lapisContainer: {
      position: 'absolute',
      top: 15,
      right: 20,
      zIndex: 10, 
  },
    lapis: {
        width: 30,
        height: 30,
    },
    containerForm: {
        backgroundColor: '#161413',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingVertical: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginTop: -50,
        marginBottom: 20,
    },
    fotoperfil: {
        width: 100,
        height: 100,
        borderColor: '#E0C200',
        borderWidth: 2,
        borderRadius: 50,
    },
    label: {
        fontSize: 18,
        color: '#F2B707',
        marginTop: 10,
    },
    info: {
        color: '#ffffff',  
        fontSize: 16,    
        padding: 10,   
        backgroundColor: '#2e2d2d', 
        borderColor: '#F2B707',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
});
