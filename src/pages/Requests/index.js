import { useNavigation } from '@react-navigation/native';
import cronometro from "../../assets/pedidos/menu/cronometro.png";
import andamento from "../../assets/pedidos/menu/em-andamento.png";
import complacente from "../../assets/pedidos/menu/complacente.png";
import ped from "../../assets/pedidos/cards/ped.png";
import ped1 from "../../assets/pedidos/cards/ped1.png";
import ped2 from "../../assets/pedidos/cards/ped2.png";
import ped3 from "../../assets/pedidos/cards/ped3.png";
import Aceito from "../../assets/pedidos/cards/aceito.png";
import Negar from "../../assets/pedidos/cards/negar.png";
import Lapis from "../../assets/pedidos/cards/lapis.png";
import Olho from "../../assets/pedidos/cards/olho.png";
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function MenuLateral() {
  const navigation = useNavigation();
  const [itemSelecionado, setItemSelecionado] = useState('Pedidos'); 

  const pedidosSolicitados = [
    { id: 'GU57653', data: '12/10/2024', imagem: ped },
    { id: 'JU77654', data: '10/10/2024', imagem: ped1 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped2 },
    { id: 'JA77656', data: '08/10/2024', imagem: ped3 },
    { id: 'VM77657', data: '07/10/2024', imagem: ped },
    { id: 'GU57653', data: '12/10/2024', imagem: ped2 },
    { id: 'JU77654', data: '10/10/2024', imagem: ped1 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped },
    { id: 'JA77656', data: '08/10/2024', imagem: ped3 },
    { id: 'VM77657', data: '07/10/2024', imagem: ped1 },
  ];

  const pedidosEmAndamento = [
    { id: 'GU57653', data: '12/10/2024', imagem: ped2 },
    { id: 'JU77654', data: '10/10/2024', imagem: ped1 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped },
    { id: 'JA77656', data: '08/10/2024', imagem: ped3 },
    { id: 'VM77657', data: '07/10/2024', imagem: ped1 },
    { id: 'GU57653', data: '12/10/2024', imagem: ped },
    { id: 'JU77654', data: '10/10/2024', imagem: ped1 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped2 },
    { id: 'JA77656', data: '08/10/2024', imagem: ped3 },
    { id: 'VM77657', data: '07/10/2024', imagem: ped },
  ];

  const pedidosConcluidos = [
    { id: 'GU57653', data: '12/10/2024', imagem: ped3 },
    { id: 'JU77654', data: '10/10/2024', imagem: ped2 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped1 },
    { id: 'JA77656', data: '08/10/2024', imagem: ped },
    { id: 'VM77657', data: '07/10/2024', imagem: ped3 },
    { id: 'GU57653', data: '12/10/2024', imagem: ped },
    { id: 'JU77654', data: '10/10/2024', imagem: ped1 },
    { id: 'KH77655', data: '10/10/2024', imagem: ped2 },
    { id: 'JA77656', data: '08/10/2024', imagem: ped3 },
    { id: 'VM77657', data: '07/10/2024', imagem: ped },
  ];

  const getPedidos = () => {
    if (itemSelecionado === 'Pedidos') {
      return pedidosSolicitados;
    } else if (itemSelecionado === 'PedidosEmAndamento') {
      return pedidosEmAndamento;
    } else if (itemSelecionado === 'PedidosConcluidos') {
      return pedidosConcluidos;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuSuperior}>
        <TouchableOpacity
          style={[styles.menuItem, itemSelecionado === 'Pedidos' && styles.itemSelecionado]}
          onPress={() => setItemSelecionado('Pedidos')} 
        >
          <Image style={styles.iconPedido} source={cronometro} />
          <Text style={styles.textoPedido}>SOLICITADOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, itemSelecionado === 'PedidosEmAndamento' && styles.itemSelecionado]}
          onPress={() => setItemSelecionado('PedidosEmAndamento')} 
        >
          <Image style={styles.iconPedido} source={andamento} />
          <Text style={styles.textoPedido}>ANDAMENTO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, itemSelecionado === 'PedidosConcluidos' && styles.itemSelecionado]}
          onPress={() => setItemSelecionado('PedidosConcluidos')} 
        >
          <Image style={styles.iconPedido} source={complacente} />
          <Text style={styles.textoPedido}>CONCLUÍDOS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {getPedidos().map((pedido, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.imgped} source={pedido.imagem} />
            <View style={styles.infoped}>
              <Text style={styles.IdPedido}>{pedido.id}</Text>
              <Text style={styles.dataPedido}>{pedido.data}</Text>
              <View style={styles.botoes}>
                {itemSelecionado === 'Pedidos' && (
                  <>
                    <TouchableOpacity>
                      <Image style={styles.negar} source={Negar} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image style={styles.aceito} source={Aceito} />
                    </TouchableOpacity>
                  </>
                )}
                {itemSelecionado === 'PedidosEmAndamento' && (
                  <TouchableOpacity>
                    <Image style={styles.lapis} source={Lapis} />
                  </TouchableOpacity>
                )}
                {itemSelecionado === 'PedidosConcluidos' && (
                  <TouchableOpacity>
                    <Image style={styles.olho} source={Olho} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuSuperior: {
    height: 80,
    backgroundColor: 'black',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  menuItem: {
    alignItems: 'center',
  },
  iconPedido: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  textoPedido: {
    fontSize: 10,
    color: '#E0C200',
  },
  itemSelecionado: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  card: {
    flexDirection: 'row',
    borderColor: '#E0C200',
    borderWidth: 2,
    borderRadius: 10,
    width: '90%',
    height: 120,
    padding: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  imgped: {
    width: 124,
    height: 100,
    marginBottom: 3,
  },
  IdPedido: {
    fontSize: 16,
    color: '#E0C200',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  dataPedido: {
    fontSize: 16,
    color: '#E0C200',
    marginBottom: 12,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aceito: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  negar: {
    width: 25,
    height: 25,
    marginLeft: 140,
  },
  lapis: {
    width: 25,
    height: 25,
    marginLeft: 175,
  },
  olho: {
    width: 25,
    height: 25,
    marginLeft: 175,
  },
});
