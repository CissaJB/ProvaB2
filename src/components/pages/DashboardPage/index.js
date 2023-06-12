import {StyleSheet,View, Text } from "react-native";

export default function DashboardPage(){
    return(
        <View style={styles.page}>
            <View style={styles.container}>
            <Text style={styles.texto}>Bem-Vindo!</Text>
            </View>
        </View>
    )
            
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4E875'
    },
    texto: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
    },
    page: {
        flex: 1,
        backgroundColor: '#F4E875'
    }
})