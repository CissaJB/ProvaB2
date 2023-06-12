import { Image ,View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import styles from "./style.js";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../components/assets/rpglogo2.gif')} />
            <TextInput style={styles.inputEmail} placeholder="Nome" />
            <TextInput style={styles.inputEmail} placeholder="Nome de Usuário" />
            <TextInput style={styles.inputEmail} placeholder="Email" />
            <TextInput style={styles.inputSenha} placeholder="Senha" secureTextEntry />
            <TouchableOpacity style={styles.BtnLogin}>
                <Link to={{screen: "Dashboard"}}>
                    <Text style={styles.txtBtnLogin}>Registrar-se</Text>
                </Link>
            </TouchableOpacity>
        </View>
    )
}