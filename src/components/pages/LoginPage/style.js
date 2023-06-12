import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F4E875'
    },
    inputEmail: {
        marginTop: 15,
        width:'70%',
        height: 40,
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'lightblue',
        border: '1px solid black'
    },
    inputSenha: {
        marginTop: 8,
        width:'70%',
        height: 40,
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'lightblue',
        border: '1px solid black'
    },
    BtnLogin: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginTop: 15
    },
    txtBtnLogin: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    viewLinks: {
        marginTop: 20,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 300,
        height: 200,
        marginBottom: 10
    }
})

export default styles;