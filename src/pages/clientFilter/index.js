import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from '../../components/ListItem';

import results from './results';

const Filter = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.cliente}>Buscar Clientes</Text>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma pessoa"
          placeholderTextColor="#b08504"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
       <MaterialIcons name="search" size={28} color="#E0C200" style={styles.icon} />
      </View>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#363636',
    margin: 20,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  icon: {
    position: 'absolute',
    right: 30, 
  },
  list: {
    flex: 1,
  },
  cliente: {
    color: 'white',
    fontSize: 20,
    marginTop: '5%',
    padding: '5%',
    fontWeight: 'bold'
  },
});

export default Filter;
