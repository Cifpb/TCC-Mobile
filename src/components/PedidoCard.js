import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ped from '../assets/pedidos/cards/ped.png';


export default function PedidoCard({ pedido, navigation, estado }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Data não disponível";
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const dataPedido = estado === 'Pedidos'
    ? pedido.data_solicitacao
    : estado === 'PedidosEmAndamento'
    ? pedido.data_aceito
    : pedido.data_finalizado;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Order')}>
      <View style={styles.card}>
        <Image style={styles.imgped} source={ped} />
        <View style={styles.infoped}>
          <Text style={styles.IdPedido}>ID: {'PED' + pedido.id}{pedido.codigo_aleatorio}</Text>
          <Text style={styles.dataPedido}>Data: {formatDate(dataPedido)}</Text>
          <Text style={styles.totalPedido}>Total: R${pedido.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  },
});
