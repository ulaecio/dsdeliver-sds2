import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Home(){
  return (
    <View style={styles.container}>
       {/* <Image source={require('../assets/logo.png')} />*/}
       <Text>Conteudo da pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create();

export default Home; 