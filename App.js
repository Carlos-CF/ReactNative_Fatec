import { Image, StyleSheet, View, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/LogoCarlos.png')}
      />

      <Text style={styles.titulo}>Bem-Vindo ao ReactNative
       
      </Text>

      <Button title="Iniciar"
      style={styles.botao}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    padding: 30,
  },
  logo: {
    width: 130,
    height: 100,
    paddingTop: 10
  },
  titulo:{
    color: '#ffffff',
    fontSize: 20
  }

});
