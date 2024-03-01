import { Image, StyleSheet, View, Button, Text } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.container_filho}>

                <Image
                    style={styles.logo}
                    source={require('./../assets/LogoCarlos.png')}
                />

                <Text style={styles.titulo}>Bem-Vindo ao ReactNative

                </Text>

                <Button title="Iniciar"
                    style={styles.botao}
                />
                
            </View>

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
    container_filho:{

    },
    logo: {
        width: 130,
        height: 100,
        paddingTop: 10
    },
    titulo: {
        color: '#ffffff',
        fontSize: 20
    }

});
