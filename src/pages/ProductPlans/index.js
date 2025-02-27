import { useNavigation } from '@react-navigation/native';
import prod from "../../assets/planoseprodutos/produto.png";
import planos from "../../assets/planoseprodutos/planos.png";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import adicionar from "../../assets/adicionar produto/icon2.png";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const produto = [
  {
    id: 'logotipoP1',
    imgP: require('../../assets/produtos/logotipo.png'),
    category: 'MÍDIA VISUAL',
    subCategory: 'Logotipo',
    promotion: "",
    price: '800,00',
  },
  {
    id: 'flyerP2',
    imgP: require('../../assets/produtos/flyer.png'),
    category: 'MÍDIA VISUAL',
    subCategory: 'Flyer',
    promotion: "Novo",
    price: '150,00',
  },
  {
    id: 'motionP3',
    imgP: require('../../assets/produtos/motion.png'),
    category: 'MÍDIA VISUAL',
    subCategory: 'Motion',
    promotion: "10%",
    price: '250,00',
  },
  {
    id: 'projetosGrafP4',
    imgP: require('../../assets/produtos/proj.png'),
    category: 'MÍDIA VISUAL',
    subCategory: 'Projetos Gráficos',
    promotion: "Novo",
    price: '1000,00',
  },
];

export const plano = [
  {
    id: "plan001",
    type: "Gold",
    value: "1000,00",
    promotion: "Novo",
    img: require('../../assets/planos/imagens/gold.png'),
    content: "15 posts mensais. 15 stories mensais. Desenvolvimento das artes. Desenvolvimento do conteúdo.",
    document: require('../../assets/planos/documentos/DocPlano1.pdf'),
    emblem: ""
  },
  {
    id: "plan002",
    type: "Platinum",
    value: "1800,00",
    promotion: "10%",
    img: require('../../assets/planos/imagens/platinum.png'),
    content: "24 posts mensais. 24 stories mensais. Desenvolvimento das artes. Gerenciamento de anúncios. Desenvolvimento do conteúdo.",
    document: require('../../assets/planos/documentos/DocPlano1.pdf'),
    emblem: "",
  },
  {
    id: "plan003",
    type: "Diamond",
    value: "2800,00",
    promotion: "",
    img: require('../../assets/planos/imagens/diamond.png'),
    content: "Posts mensais LIVRE. Stories mensais LIVRE. Desenvolvimento das artes. Gerenciamento de anúncios. Desenvolvimento do conteúdo.",
    document: require('../../assets/planos/documentos/DocPlano1.pdf'),
    emblem: ""
  },
];
export default function MenuSuperior() {
    const navigation = useNavigation();
    const [itemSelecionado, setItemSelecionado] = useState('Produto');
  
    return (
      <View style={styles.tela}>
        <View style={styles.menuSuperior}>
          <TouchableOpacity
            style={[styles.menuItem, itemSelecionado === 'Produto' && styles.itemSelecionado]}
            onPress={() => {
              setItemSelecionado('Produto');
              navigation.navigate('Produto');
            }}
          >
            <Image style={styles.iconMenu} source={prod} />
            <Text style={styles.textoMenu}>PRODUTOS</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.menuItem, itemSelecionado === 'Planos' && styles.itemSelecionado]}
            onPress={() => {
              setItemSelecionado('Planos');
              navigation.navigate('Planos');
            }}
          >
            <Image style={styles.iconMenu} source={planos} />
            <Text style={styles.textoMenu}>PLANOS</Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView style={styles.produtosContainer}>
          {itemSelecionado === 'Produto' &&
            produto.map((item) => (
              <View key={item.id} style={styles.produto}>
                <Image source={item.imgP} style={styles.imagemProd} />
                <View style={styles.caixapai}>
                  <View style={styles.caixaE}>
                    <Text style={styles.catTexto}>{item.category}</Text>
                    <Text style={styles.subTexto}>{item.subCategory}</Text>
                  </View>
                  <View style={styles.caixaD}>
                    <View style={styles.icones}>
                      <TouchableOpacity>
                        <Feather name="trash-2" size={18} color="white" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Octicons name="pencil" size={18} color="white" />
                      </TouchableOpacity>
                    </View>
                    <LinearGradient style={styles.button} colors={["#FFD54F", "#FFB300"]}>
                      <TouchableOpacity>
                        <Text style={styles.buttonText}>R$ {item.price}</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              </View>
            ))}
  
          {itemSelecionado === 'Planos' &&
            plano.map((item) => (
              <View>
              <View key={item.id} style={styles.plano}>
                <Image source={item.img} style={styles.imagemPlano} />
                <View style={styles.conteudoDiv}>
                  {item.content.split('.').map((sentence, index) => {
                    if (sentence.trim() !== "") {
                      return (
                        <View key={index} style={styles.conteudoLinha}>
                          <Text style={styles.textoCard}>{sentence}</Text>
                          {index !== item.content.split('.').length - 1 && (
                            <View style={styles.linhaDivisoria} />
                          )}
                        </View>
                      );
                    }
                    return null;
                  })}
                </View>
                <View style={styles.elementosPlanos}>
                  <View style={styles.iconesPlano}>
                    <TouchableOpacity>
                      <Feather name="trash-2" size={18} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Octicons name="pencil" size={18} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              </View>
              
            ))}
        </ScrollView>
        {itemSelecionado === 'Planos' && (
  <TouchableOpacity onPress={() => { navigation.navigate('Plans') }}>
    <Image source={adicionar} style={styles.adiciona} />
  </TouchableOpacity>
)}
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    tela: {
      backgroundColor: 'black',
      flex: 1,
    },
    menuSuperior: {
      marginTop: 30,
      height: 80,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#FFD700',
    },
    menuItem: {
      alignItems: 'center',
      padding: 10,
    },
    iconMenu: {
      width: 40,
      height: 40,
      marginBottom: 5,
    },
    textoMenu: {
      fontSize: 12,
      color: '#FFD700',
    },
    itemSelecionado: {
      borderBottomWidth: 2,
      borderBottomColor: '#FFD700',
    },
    produtosContainer: {
      padding: 10,
      marginBottom:60,
    },
    produto: {
      backgroundColor: '#414141',
      borderRadius: 20,
      marginVertical: 10,
      padding: 5,
    },
    imagemProd: {
      width: '100%',
      height: 150,
      resizeMode: 'contain',
    },
    caixapai: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    caixaE: {
      paddingLeft: 10,
    },
    caixaD: {
      alignItems: 'flex-end',
    },
    catTexto: {
      fontSize: 18,
      color: '#FFD54F',
      fontWeight: 'bold',
    },
    subTexto: {
      fontSize: 14,
      color: '#ccc',
    },
    icones: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 60,
    },
    button: {
      marginTop: 10,
      padding: 5,
      borderRadius: 10,
      marginBottom: 5,
    },
    buttonText: {
      color: '#414141',
      fontWeight: 'bold',
      fontSize: 14,
    },
    plano: {
      width: '85%',
      backgroundColor: '#414141',
      borderRadius: 20,
      marginVertical: 10,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    imagemPlano: {
      width: '100%',
      height: 150,
    },
    promoFita: {
      position: 'absolute',
      top: 4,
      left: -30,
      zIndex: 1,
      paddingVertical: 2,
      paddingHorizontal: 32.5,
      transform: [{ rotate: '-45deg' }],
    },
    promoText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 13,
    },
    conteudoDiv: {
      padding: 15,
    },
    conteudoLinha: {
      marginBottom: 10,
    },
    linhaDivisoria: {
      height: 1,
      backgroundColor: '#ccc', // Linha cinza separando as linhas de conteúdo
      marginTop: 5,
    },
    textoCard: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
    },
    elementosPlanos: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 15,
    },
    botaoCard: {
      padding: 10,
      borderRadius: 10,
      width: '45%',
      alignItems: 'center',
    },
    iconesPlano: {
      flexDirection: 'row',
      gap: 25,
      left:210,
    },
    adiciona: {
      position: 'absolute',
      bottom:70,
      right: 20,  
      height: 50,
      width: 50,
      zIndex: 1, 

    }
  });
  