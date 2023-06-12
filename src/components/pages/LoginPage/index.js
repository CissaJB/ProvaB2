import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import styles from "./style.js";
import { Link } from "@react-navigation/native";
import { Image } from "react-native";

export default function LoginPage(){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../components/assets/rpglogo2.gif')} />
            <TextInput style={styles.inputEmail} placeholder="Email" />
            <TextInput style={styles.inputSenha} placeholder="Senha" secureTextEntry/>
            <TouchableOpacity style={styles.BtnLogin}>
                <Link to={{screen: "Dashboard"}}>
                <Text style={styles.txtBtnLogin}>Login</Text>
                </Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
            <Link to={{screen: "Register"}}>Register</Link>
            <Link to={{screen: "ForgotPassword"}}>ForgotPassword</Link>
            </View>
        </View>
    )
}