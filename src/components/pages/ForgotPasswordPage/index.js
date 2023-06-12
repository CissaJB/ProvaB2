import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import styles from "./style.js";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputEmail} placeholder="Email" />
            <TextInput style={styles.inputSenha} placeholder="NovaSenha" secureTextEntry/>
            <TextInput style={styles.inputSenha} placeholder="ConfirmeSenha" secureTextEntry/>
            <TouchableOpacity style={styles.BtnLogin}>
                <Link to={{screen: "Dashboard"}}>
                    <Text style={styles.txtBtnLogin}>Login</Text>
                </Link>
            </TouchableOpacity>
        </View>
    )
}