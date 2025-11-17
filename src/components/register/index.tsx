import AuthContainer from "@/components/ui/AuthContainer";
import PasswordField from "@/components/ui/PasswordField";
import TextField from "@/components/ui/TextField";
import { TouchableOpacity, Text, Dimensions} from "react-native";
import { global } from "../ui/styles";
import { useRouter } from "expo-router";




const RenderRegister = () => {

    
    const router = useRouter()
        const {height} = Dimensions.get("window");
    return (
        
        <AuthContainer
            title = "Cadastre-se agora">

            <TextField 
            label="Nome"
            placeholder="Digite seu nome"
            ></TextField>

            <TextField
            label = "CPF"
            placeholder="000.000.000-00"
            ></TextField>

            <TextField
            label = "E-mail"
            placeholder="user@email.com"
            icon="email"
            ></TextField>

            <PasswordField
            label="Senha"
            icon="lock"
            placeholder="••••••••••"
            ></PasswordField>

            <PasswordField
            label="Confirmar senha"
            icon="lock"
            placeholder="••••••••••"
            ></PasswordField>
            
            <TouchableOpacity style={global.createButton}>
            <Text style={global.createAccount}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)")}>
            <Text style={{color: "#ffff", fontWeight: 600, fontSize: 14,  marginTop: height * 0.04, alignItems: "center"}}>Já possui uma conta? Faça seu Login</Text>
            </TouchableOpacity>

        
        </AuthContainer>


    );
}

export default RenderRegister;