import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";


const RenderLogin = () => {

    const router = useRouter()

    const {height} = Dimensions.get("window");

    return (
       
        <AuthContainer
            title="Olá, seja bem vindo!"
            subtitle="Login"
            icon="hotel">
            
            {/*children*/}
            <TextField
                label=""
                icon="email"
                placeholder="E-mail"
                keyboardType="email-address"
            ></TextField>

            <PasswordField
                label=""
                icon="lock"
                placeholder="••••••••••"
            ></PasswordField>

            <TouchableOpacity style={[global.primaryButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={{alignItems: "center"}}>

            <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                <Text style={{color: "#ffff", fontWeight: 600, fontSize: 14,  marginTop: height * 0.04 }}>Esqueceu sua senha? Clique aqui</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text style={{color: "#ffff", fontWeight: 600, fontSize: 14, marginTop: height * 0.02}}>Cadastre-se aqui</Text>
            </TouchableOpacity> 

            </View>
            
            
        </AuthContainer>

    );
}
export default RenderLogin;


