import { useNavigation } from '@react-navigation/native';
import cronometro from "../../assets/pedidos/menu/cronometro.png";
import andamento from "../../assets/pedidos/menu/em-andamento.png";
import complacente from "../../assets/pedidos/menu/complacente.png";
import ped from "../../assets/pedidos/cards/ped.png";
import ped1 from "../../assets/pedidos/cards/ped1.png";
import ped2 from "../../assets/pedidos/cards/ped2.png";
import ped3 from "../../assets/pedidos/cards/ped3.png";
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function MenuSuperior() {
  const navegation = useNavigation();
  const [itemSelecionado, setItemSelecionado] = useState('Pedidos');

  const pedidosSolicitados = [
    { id: 'PED8S2XE', data: '11/02/2025', imagem: ped, total: "R$400,00" },
    { id: 'PED7KP40', data: '10/02/2025', imagem: ped1, total: "R$1.600,00" },
    { id: 'PED6TC90', data: '09/02/2025', imagem: ped2, total: "R$1.000,00" },
    { id: 'PED5F12E', data: '09/02/2024', imagem: ped3, total: "R$800,00" },
    { id: 'PED4G30A', data: '08/02/2024', imagem: ped, total: "R$300,00" },
  ];

  const pedidosEmAndamento = [
    { id: 'PED3F5D1', data: '08/02/2025', imagem: ped2, total: "R$400,00" },
    { id: 'PED4D7R9', data: '07/02/2025', imagem: ped1, total: "R$1.000,00" },
    { id: 'PED5G6V8', data: '07/02/2025', imagem: ped, total: "R$150,00" },
    { id: 'PED6H0N1', data: '06/02/2025', imagem: ped3, total: "R$1.400,00" },
    { id: 'PED2K1M5', data: '05/02/2025', imagem: ped1, total: "R$950,00" },
  ];

  const pedidosConcluidos = [
    { id: 'PED0W3Q8', data: '05/02/2025', imagem: ped3, total: "R$800,00" },
    { id: 'PED1Y5F3', data: '06/02/2025', imagem: ped2, total: "R$1.400,00" },
    { id: 'PED2P0G0', data: '10/02/2024', imagem: ped1, total: "R$400,00" },
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
          <TouchableOpacity onPress={() => navegation.navigate('Order')}>
            <View key={index} style={styles.card}>
              <Image style={styles.imgped} source={pedido.imagem} />
              <View style={styles.infoped}>
                <Text style={styles.IdPedido}>{pedido.id}</Text>
                <Text style={styles.dataPedido}>{pedido.data}</Text>
                < Text style={styles.totalPedido}>{pedido.total}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  menuSuperior: {
    marginTop: 30,
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
    borderRadius: 10,
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
  totalPedido: {
    fontSize: 16,
    color: '#E0C200',
    marginBottom: 12,
    marginLeft: 110,
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
