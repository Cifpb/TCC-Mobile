import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Plans() {
    const navigation = useNavigation(); 

    return (
       <ScrollView style={styles.scrollView}>
        <Text style={styles.plan}> NOVO PLANO</Text>
        <View style={styles.container}>

        </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black'
      },
      plan: {
        color: 'white',
        fontSize: 20,
        marginTop: '20%',
        padding: '5%',
        fontWeight: 'bold'
      },
      container: {
        backgroundColor: 'black',
        padding: 16,
        alignContent: 'center',
        flex: 1,
        color: 'black'
      },
});

