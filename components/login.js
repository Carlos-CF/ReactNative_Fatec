//declaração de componentes a serem utilizados
import {View, StyleSheet, Image} from 'react-native';
import { Card, Text, TextInput } from 'react-native-paper';


export default function Login() {
    //tipo recebe padrão logado
    
    return (
  <View style={styles.container}>
  <Image style={styles.logo} source={require('./../assets/LogoCarlos.png')} />
  <Card style={styles.containerCaixa}>
  <Card.Title title="" subtitle="" />
  <Card.Content >
  <Text variant="bodyMedium"></Text>
  <TextInput
              style={styles.label}
              mode="outlined"
              label="Email"
              outlineColor="#ff0000"
              activeOutlineColor="#ff0000"
            //  onChangeText={(text) => setEmail(text)}
            //  value={email}
            />
  <TextInput
              style={styles.label}
              mode="outlined"
              label="Senha"
              secureTextEntry
            //  onChangeText={(text) => setPassword(text)}
            //  value={password}
              outlineColor="#ff0000"
              activeOutlineColor="#ff0000"
            />
  </Card.Content>
  </Card>
  </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      textAlign: 'center',
    },
    logo: {
      width: 350,
      height: 300,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 50,
    },
    containerCaixa:{
      marginHorizontal:30
    },
    label: {
      marginBottom: 10,
      color: 'red',

    },
    loginText:{
      color: '#FFF',
      fontSize: 24,
    },
  });