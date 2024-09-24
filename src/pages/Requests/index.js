import arrow from "../../assets/pedidos/menu/menu.png";
import cronometro from "../../assets/pedidos/menu/cronometro.png";
import andamento from "../../assets/pedidos/menu/em-andamento.png";
import complacente from "../../assets/pedidos/menu/complacente.png";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


export default function MenuLateral() {
    const navigation = useNavigation();
    const [menuAberto, setMenuAberto] = useState(false);
  
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };
  
    return (
      <View style={styles.Telaped}>
      <View style={[styles.menuLateral, { width: menuAberto ? 200 : 70 }]}>
        <TouchableOpacity style={styles.btnPedido} onPress={toggleMenu}>
          <Image style={[styles.arrowPedido, { transform: [{ rotate: menuAberto ? '180deg' : '0deg' }] }]} source={arrow} />
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.menuPedido} onPress={() => navigation.navigate('Pedidos')}>
          <Image style={styles.iconPedido} source={cronometro} />
          {menuAberto && <Text style={styles.textoPedido}>PEDIDOS SOLICITADOS</Text>}
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.menuPedido} onPress={() => navigation.navigate('PedidosEmAndamento')}>
          <Image style={styles.iconPedido} source={andamento} />
          {menuAberto && <Text style={styles.textoPedido}>PEDIDOS EM ANDAMENTO</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuPedido} onPress={() => navigation.navigate('PedidosConcluidos')}>
          <Image style={styles.iconPedido} source={complacente} />
          {menuAberto && <Text style={styles.textoPedido}>PEDIDOS CONCLUÍDOS</Text>}
        </TouchableOpacity>
      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

    Telaped:{
      flex:1,
      backgroundColor: "black",
    },

    menuLateral: {
      position: 'absolute',
      height: '100%',
      backgroundColor: "black",
      padding: 8,
      shadowColor: '#FFD700', 
      shadowOpacity: 2, 
      shadowRadius: 30, 
      shadowOffset: { width: 15, height: 15 },
      elevation: 25, 
    },

    btnPedido: {
      left: 8,
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 15,
      
    },
    arrowPedido: {
      height: 30,
      width: 30,
      marginBottom: 20,
    },
    menuPedido: {
      left: 8,
      height: 60,
      borderBottomColor: '#bc8506',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    iconPedido: {
      width: 30,
      height: 30,
    
    },
    textoPedido: {
      fontSize: 11,
      color: '#E0C200',
      textShadowOffset: { width: 0.2, height: 0.1 },
      textShadowRadius: 0.2,
    },
  });