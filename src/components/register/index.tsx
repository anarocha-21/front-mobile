import AuthContainer from "@/components/ui/AuthContainer";
import PasswordField from "@/components/ui/PasswordField";
import TextField from "@/components/ui/TextField";
import { TouchableOpacity, Text, Dimensions, View} from "react-native";
import { global } from "../ui/styles";
import { useRouter } from "expo-router";

const RenderRegister = () => {

    const router = useRouter()
    const {height} = Dimensions.get("window");
    
    return (
        
        <AuthContainer
            title = "Cadastre-se agora">

            <TextField 
            label="Nome:"
            placeholder="Digite seu nome"
            ></TextField>

            <TextField
            label = "CPF:"
            placeholder="000.000.000-00"
            ></TextField>

            <TextField
            label = "E-mail:"
            placeholder="user@email.com"
            icon="email"
            ></TextField>

            <PasswordField
            label="Senha:"
            icon="lock"
            placeholder="••••••••••"
            ></PasswordField>

            <PasswordField
            label="Confirmar senha:"
            icon="lock"
            placeholder="••••••••••"
            ></PasswordField>

            <View style={{alignItems: "center"}}>
                <TouchableOpacity style={global.primaryButton}>
                <Text style={global.primaryButtonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.back()}>
                <Text style={{color: "#ffff", fontWeight: 600, fontSize: 14,  marginTop: height * 0.02}}>Já possui uma conta? Faça seu Login</Text>
                </TouchableOpacity>
                
            </View>
        
        </AuthContainer>
    );
}
export default RenderRegister;