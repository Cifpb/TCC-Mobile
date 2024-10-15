import { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return image ? 
        <View style={styles.quadrado}>
            <Image source={{ uri: image }} style={styles.image} />
        </View> : 
        <TouchableOpacity onPress={pickImage} style={styles.quadrado}>
            <Image source={require("../assets/adicionar produto/icon.png")} />
            <Text style={styles.upl}>Faça o upload da imagem</Text>
        </TouchableOpacity>
    ;
}

const styles = StyleSheet.create({
  quadrado: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#E0C200',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 200
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  upl: {
    color: 'white',
    fontSize: 16,
    padding: '2%',
    fontWeight: 'bold'
  }
});
