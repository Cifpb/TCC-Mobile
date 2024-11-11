import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, FlatList, Modal } from "react-native";
import * as Animatable from 'react-native-animatable';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

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
        category: 'MÍDIA VISUAL',
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
    { id: "produtoPrin4", img: require('../../assets/principaisProdutos/flyer.png'), subCategory: 'Logotipo/Identidade Visual' },
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
    const width = Dimensions.get('window').width;

    const [listaProdutos, setListaProdutos] = useState(produtos);
    const [principaisProd1, setPrincipaisProd] = useState(principaisProd);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Produto que será excluído

    const abrirModalParaExcluir = (produto) => {
        setProdutoSelecionado(produto); // Define o produto selecionado
        setModalVisivel(true); // Abre o modal
    };

    const confirmarExclusao = () => {
        if (produtoSelecionado) {
            // Remove da lista de produtos
            setListaProdutos(prevLista => prevLista.filter(item => item.id === produtoSelecionado.id));

            // Verifica se o produto está na lista de principais produtos e remove se o subCategory for igual
            setPrincipaisProd(prevPrincipaisProd =>
                prevPrincipaisProd.filter(item => item.subCategory === produtoSelecionado.subCategory)
            );
        }
        setModalVisivel(false); // Fecha o modal
        setProdutoSelecionado(null); // Reseta o produto selecionado
    };

    const cancelarExclusao = () => {
        setModalVisivel(false); // Fecha o modal sem fazer alterações
        setProdutoSelecionado(null); // Reseta o produto selecionado
    };

    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={require('../../assets/logo/empresa.png')} style={styles.logo} />
                </View>

                <View>
                    <View style={styles.textoConteiner}>
                        <Text style={styles.textoLista}>LISTA DE PRODUTOS</Text>
                        <View style={styles.iconeAdd}>
                            <TouchableOpacity onPress={() => navegation.navigate('Product')}>
                                <AntDesign name="pluscircleo" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Carousel
                        loop
                        height={240}
                        width={width}
                        autoPlay={true}
                        data={produtos}
                        scrollAnimationDuration={2000}
                        renderItem={({ item }) => (
                            <Animatable.View animation="fadeInUp" delay={300} style={styles.produto}>
                                {item.promotion !== "" && (
                                    <View
                                        style={[
                                            styles.promoFitaProd,
                                            { backgroundColor: item.promotion === "Novo" ? "#388E3C" : "#D32F2F" }
                                        ]}
                                    >
                                        <Text style={styles.promoTextProd}>{item.promotion}</Text>
                                    </View>
                                )}
                                <Image source={item.imgP} style={styles.imagemProd} />
                                <View style={styles.caixapai}>
                                    <View style={styles.caixaE}>
                                        <Text style={styles.catTexto}>{item.category}</Text>
                                        <Text style={styles.subTexto}>{item.subCategory}</Text>
                                    </View>
                                    <View style={styles.caixaD}>
                                        <View style={styles.icones}>
                                            <TouchableOpacity onPress={() => abrirModalParaExcluir(item)}>
                                                <Feather name="trash-2" size={18} color="white" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => 0}>
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
                            </Animatable.View>
                        )} />
                </View>

                {/* Modal */}

                {modalVisivel && (
                    <Modal transparent={true} animationType="slide">
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContent}>
                                <Text style={styles.textoModal}>Você tem certeza de que deseja excluir este produto?</Text>
                                <Text style={styles.textoLembrete}>Lembre-se de que, se ele estiver listado entre os principais produtos, também será removido dessa lista.</Text>
                                <View style={styles.bntElementos}>
                                    <TouchableOpacity style={styles.botaoModal1} onPress={confirmarExclusao}>
                                        <Text style={styles.textoBModal1}>SIM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.botaoModal2} onPress={cancelarExclusao}>
                                        <Text style={styles.textoBModal2}>NÃO</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}

                <View>
                    <View style={styles.textoConteiner}>
                        <Text style={styles.textoLista}>LISTA DE PRINCIPAIS PRODUTOS</Text>
                        <View style={styles.iconeAdd}>
                            <TouchableOpacity onPress={() => navegation.navigate('Product')}>
                                <AntDesign name="pluscircleo" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Carousel
                        loop
                        height={240}
                        width={width}
                        autoPlay={true}
                        data={principaisProd}
                        scrollAnimationDuration={2000}
                        renderItem={({ item }) => (
                            <View style={styles.conteinerPrin}>
                                <Image source={item.img} style={styles.imgPrin} />
                                <Text style={styles.nomePrin}>{item.subCategory}</Text>
                            </View>
                        )} />
                </View>

                <View>
                    <View style={styles.textoConteiner}>
                        <Text style={styles.textoLista}>LISTA DE PLANOS</Text>
                        <View style={styles.iconeAdd}>
                            <TouchableOpacity onPress={() => navegation.navigate('Plans')}>
                                <AntDesign name="pluscircleo" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Carousel
                        loop
                        height={450}
                        width={width}
                        autoPlay={true}
                        data={planos}
                        scrollAnimationDuration={2000}
                        renderItem={({ item }) => (
                            <View style={styles.conteinerPlanos}>
                                <Animatable.View
                                    key={item.id}
                                    animation="fadeInUp"
                                    delay={300}
                                    style={styles.plano}
                                >
                                    {item.promotion !== "" && (
                                        <View
                                            style={[
                                                styles.promoFita,
                                                { backgroundColor: item.promotion === "Novo" ? "#388E3C" : "#D32F2F" }
                                            ]}
                                        >
                                            <Text style={styles.promoTextProd}>{item.promotion}</Text>
                                        </View>
                                    )}
                                    <Image source={item.img} style={styles.imagemPlano} />
                                    <View style={styles.conteudoDiv}>
                                        {item.content.split('.').map((sentence, index) => {
                                            if (sentence.trim() !== "") {
                                                return <Text style={styles.textoCard} key={index}>{sentence}</Text>;
                                            }
                                            return null;
                                        })}
                                    </View>
                                    <View style={styles.elementosPlanos}>
                                        <LinearGradient style={styles.botaoCard} colors={["#FFD54F", "#FFB300"]}>
                                            <TouchableOpacity onPress={() => { item.document }}>
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
                            </View>
                        )} />
                </View>



            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        color: 'black'
    },
    textoConteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 2,
        marginTop: 30,
        marginBottom: 15
    },
    textoLista: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconeAdd: {
        flexDirection: 'row',
        marginRight: 5
    },

    //Cabecalho
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 5,
    },
    logo: {
        width: 120,
        height: 70,
    },

    // Produtos
    produto: {
        width: '95%',
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

    //Modal
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#3b3a39',
        alignItems: 'center',
    },
    textoModal: {
        fontSize: 18,
        marginBottom: 12,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    textoLembrete: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ccc'
    },
    bntElementos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 50
    },
    botaoModal1: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f7cc25',
        width: '100%',
        alignItems: 'center',
        width: 90
    },
    botaoModal2: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#3b3a39',
        borderColor: '#f7cc25',
        borderWidth: 2,
        width: '100%',
        alignItems: 'center',
        width: 90
    },
    textoBModal1: {
        color: '#3b3a39',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textoBModal2: {
        color: '#f7cc25',
        fontSize: 16,
        fontWeight: 'bold'
    },

    // Principais Produtos
    conteinerPrin: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    principaisProd: {
        flexDirection: "row",
        flexWrap: "nowrap"
    },
    imgPrin: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 100,
        borderWidth: 2,
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
    conteinerPlanos: {
        alignItems: 'center'
    },
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
        resizeMode: 'contain'
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
        flexDirection: 'row',
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

