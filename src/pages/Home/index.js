import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

// Array de Produtos
export const produtos = [
    {
        id: 'logotipoP1',
        imgP: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS1: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS2: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS3: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS4: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS5: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS6: require('../../assets/produtos/img-virgens/projetosG.png'),
        category: 'MÍDIA Visual',
        subCategory: 'Logotipo',
        promotion: "",
        price: '800,00'
    },
    {
        id: 'flyerP2',
        imgP: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS1: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS2: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS3: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS4: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS5: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS6: require('../../assets/produtos/img-virgens/projetosG.png'),
        category: 'MÍDIA VISUAL',
        subCategory: 'Flyer',
        promotion: "Novo",
        price: '150,00'
    },
    {
        id: 'motionP3',
        imgP: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS1: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS2: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS3: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS4: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS5: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS6: require('../../assets/produtos/img-virgens/projetosG.png'),
        category: 'MÍDIA VISUAL',
        subCategory: 'Motion',
        promotion: "10%",
        price: '250,00'
    },
    {
        id: 'projetosGrafP4',
        imgP: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS1: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS2: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS3: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS4: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS5: require('../../assets/produtos/img-virgens/projetosG.png'),
        imgS6: require('../../assets/produtos/img-virgens/projetosG.png'),
        category: 'MÍDIA VISUAL',
        subCategory: 'Projetos Gráficos',
        promotion: "Novo",
        price: '1000,00'
    },
];

// Array dos Principais Produtos
export const principaisProd = [
    { id: "produtoPrin1", img: require('../../assets/planos/imagens/plano1.png'), subCategory: 'Projetos Gráficos' },
    { id: "produtoPrin2", img: require('../../assets/principaisProdutos/flyer.png'), subCategory: 'Motion' },
    { id: "produtoPrin3", img: require('../../assets/principaisProdutos/flyer.png'), subCategory: 'Flyer' },
    { id: "prondutoPrin4", img: require('../../assets/principaisProdutos/flyer.png'), subCategory: 'Logotipo/Identidade Visual' },
];

// Array dos Planos
export const planos = [
    {
        id: "plan001",
        type: "Gold",
        value: "1000,00",
        promotion: "Novo",
        img: require('../../assets/planos/imagens/plano1.png'),
        content: "15 post Mensais. 15 Stories Mensais. Desenvolvimento das Artes. Desenvolvimento do Conteúdo.",
        document: require('../../assets/planos/documentos/DocPlano1.pdf'),
        emblem: ""
    },
    {
        id: "plan002",
        type: "Platinum",
        value: "1800,00",
        promotion: "10%",
        img: require('../../assets/planos/imagens/plano1.png'),
        content: "24 post Mensais. 24 Stories Mensais. Desenvolvimento das Artes. Gerenciamento de Anúncios. Desenvolvimento do Conteúdo.",
        document: require('../../assets/planos/documentos/DocPlano1.pdf'),
        emblem: "",
    },
    {
        id: "plan003",
        type: "Diamond",
        value: "2800,00",
        promotion: "",
        img: require('../../assets/planos/imagens/plano1.png'),
        content: "Post Mensais LIVRE. Stories Mensais LIVRE. Desenvolvimento das Artes. Gerenciamento de Anúncios. Desenvolvimento do Conteúdo.",
        document: require('../../assets/planos/documentos/DocPlano1.pdf'),
        emblem: ""
    },
];

export default function Home() {
    const navegation = useNavigation();
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}></View>

                <View>
                    {produtos.map(prod => (
                        <Animatable.View animation="fadeInUp" delay={300} style={styles.produto}>
                            {prod.promotion !== "" && (
                                <View
                                    style={[
                                        styles.promoFitaProd,
                                        { backgroundColor: prod.promotion === "Novo" ? "#388E3C" : "#D32F2F" }
                                    ]}
                                >
                                    <Text style={styles.promoTextProd}>{prod.promotion}</Text>
                                </View>
                            )}
                            <Image source={prod.imgP} style={styles.imagemProd} />
                            <View style={styles.caixapai}>
                                <View style={styles.caixaE}>
                                    <Text style={styles.catTexto}>{prod.category}</Text>
                                    <Text style={styles.subTexto}>{prod.subCategory}</Text>
                                </View>
                                <View style={styles.caixaD}>
                                    <View style={styles.icones}>
                                        <TouchableOpacity onPress={() => 0}>
                                            <Feather name="trash-2" size={18} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => 0}>
                                            <Octicons name="pencil" size={18} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                    <LinearGradient style={styles.button} colors={["#FFD54F", "#FFB300"]}>
                                        <TouchableOpacity>
                                            <Text style={styles.buttonText}>R$ {prod.price}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View>
                        </Animatable.View>
                    ))}
                </View>

                <FlatList 
                    horizontal data={principaisProd} 
                    renderItem={({item}) => (
                                    <View style={styles.conteinerPrin}>
                                        <Image source={item.img} style={styles.imgPrin} />
                                        <Text style={styles.nomePrin}>{item.subCategory}</Text>
                                    </View>
                    )}
                    keyExtractor={item => item.id} />
                
                <View>
                    {planos.map(plan => (
                        <Animatable.View
                            key={plan.id}
                            animation="fadeInUp"
                            delay={300}
                            style={styles.plano}
                        >
                            {plan.promotion !== "" && (
                                <View
                                    style={[
                                        styles.promoFita,
                                        { backgroundColor: plan.promotion === "Novo" ? "#388E3C" : "#D32F2F" }
                                    ]}
                                >
                                    <Text style={styles.promoTextProd}>{plan.promotion}</Text>
                                </View>
                            )}
                            <Image source={plan.img} style={styles.imagemPlano} />
                            <View style={styles.conteudoDiv}>
                                {plan.content.split('.').map((sentence, index) => {
                                    if (sentence.trim() !== "") {
                                        return <Text style={styles.textoCard} key={index}>{sentence}</Text>;
                                    }
                                    return null;
                                })}
                            </View>
                            <View style={styles.elementosPlanos}>
                                <LinearGradient style={styles.botaoCard} colors={["#FFD54F", "#FFB300"]}>
                                    <TouchableOpacity onPress={() => { plan.document }}>
                                        <Text style={styles.textoBntCard}>ACESSAR DOC</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <View style={styles.iconesPlano}>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Feather name="trash-2" size={18} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Octicons name="pencil" size={18} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animatable.View>
                    ))}
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },

    // Produtos
    produto: {
        width: '100%',
        backgroundColor: '#414141',
        borderRadius: 20,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        margin: 2,
        overflow: 'hidden',
    },
    promoFitaProd: {
        position: 'absolute',
        top: 4,
        left: -45,
        zIndex: 1,
        paddingVertical: 2,
        paddingHorizontal: 50,
        width: '40%',
        transform: [{ rotate: '-45deg' }],
    },
    promoTextProd: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    imagemProd: {
        width: '100%',
        height: 150,
        marginTop: 4,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    caixapai: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    caixaE: {
        paddingLeft: 25,
        marginBottom: 15,
    },
    caixaD: {
        paddingRight: 25,
        marginBottom: 15,
    },
    catTexto: {
        fontSize: 20,
        color: '#FFD54F',
        fontWeight: 'bold',
    },
    subTexto: {
        fontSize: 16,
        color: '#ccc',
        marginTop: 2,
    },
    icones: {
        paddingLeft: 50,
        width: 117,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 2,
        padding: 4,
        borderRadius: 10,
        width: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: '#414141',
        fontWeight: 'bold',
        fontSize: 14,
    },

    // Principais Produtos
    conteinerPrin: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

    },
    principaisProd: {
        flexDirection:"row",
        flexWrap:"nowrap"
    },
    imgPrin: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 100,  
        borderWidth: 2,  // adiciona a borda
        borderColor: '#4f4f4f',
        margin: 10,
    },
    nomePrin: {
        fontSize: 16,
        color: '#ccc',
        marginTop: 2,
        textAlign: 'center',
    },

    // Planos
    plano: {
        width: '70%',
        backgroundColor: '#414141',
        borderRadius: 20,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        margin: 3,
        marginTop: 20,
        overflow: 'hidden',
    },
    imagemPlano: {
        width: '100%',
        height: 146,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    promoFita: {
        position: 'absolute',
        top: 4,
        left: -30,
        zIndex: 1,
        paddingVertical: 2,
        paddingHorizontal: 32.5,
        width: '40%',
        transform: [{ rotate: '-45deg' }],
    },
    promoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    conteudoDiv: {
        width: '100%',
        padding: 4,
        paddingBottom: 5,
        paddingTop: 15,
    },
    textoCard: {
        fontSize: 14,
        color: 'white',
        marginBottom: 8,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#646464',
        paddingBottom: 4,
    },
    elementosPlanos: {
        flexDirection: 'row', // Alinha os filhos horizontalmente
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 17,
    },
    botaoCard: {
        padding: 4,
        borderRadius: 10,
        width: 120,
        alignItems: 'center',
    },
    textoBntCard: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    iconesPlano: {
        flexDirection: 'row',
        gap: 25,
    },
});
