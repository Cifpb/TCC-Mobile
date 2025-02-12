import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PedidoCard from '../../components/PedidoCard.js';
import cronometro from '../../assets/pedidos/menu/cronometro.png';
import andamento from '../../assets/pedidos/menu/em-andamento.png';
import complacente from '../../assets/pedidos/menu/complacente.png';

export default function MenuSuperior() {
  const navigation = useNavigation();
  const [itemSelecionado, setItemSelecionado] = useState('Pedidos');
  const [pedidos, setPedidos] = useState([]);
  const BASE_URL = 'https://next-projeto-p0qi9wbqw-ana-clara-da-silva-costas-projects.vercel.app';

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const estado = itemSelecionado === 'Pedidos'
          ? 'Aguardando'
          : itemSelecionado === 'PedidosEmAndamento'
          ? 'Em andamento'
          : 'Concluído';

        console.log(`${BASE_URL}/api/pedidos?estado=${estado}`);
        const response = await fetch(`${BASE_URL}/api/pedidos?estado=${estado}`);

        
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const text = await response.text();
        console.log("Resposta da API:", text);

        try {
          const data = JSON.parse(text);
          setPedidos(data);
        } catch (jsonError) {
          console.error("Erro ao converter resposta para JSON:", jsonError);
        }
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchPedidos();
  }, [itemSelecionado]);

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
        {pedidos.map((pedido) => (
          <PedidoCard
            key={pedido.id}
            pedido={pedido}
            navigation={navigation}
            id={pedido.id}
            data={pedido.data_aceito}
            valor={pedido.total}
            estado={itemSelecionado}
          />
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
});
