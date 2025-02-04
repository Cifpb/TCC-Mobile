import React from 'react';
import foto from '../assets/perfil/foto.jpg';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={foto} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.nome1}>{data.name}</Text>
        <Text style={styles.email2}>{data.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#b08504',
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  itemInfo: {
    marginLeft: 20,
  },
  nome1: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 5
  },
  email2: {
    fontSize: 18,
    color: '#999999',
  },
});

export default ListItem;
