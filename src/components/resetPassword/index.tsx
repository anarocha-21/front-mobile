import AuthContainer from "../ui/AuthContainer";
import TextField from "@/components/ui/TextField";
import { TouchableOpacity, Text, Dimensions, View} from "react-native";
import { useRouter } from "expo-router";
import { global } from "../ui/styles";


const RenderPassword = () => {

    const router = useRouter();
    const {height} = Dimensions.get("window");

    return (
        <AuthContainer
        title = "Redefinição de senha"
        subtitle="Preencha com seu e-mail para criar nova senha."
        icon= "chevron-back">
        
        <TextField
        label= "E-mail"
        placeholder="user@email.com"
        icon="email"
        ></TextField>
        
        <View style={{alignItems: "center"}}>
            <TouchableOpacity style={global.primaryButton}>
            <Text style={global.primaryButtonText}>Enviar E-mail</Text>
            </TouchableOpacity>
            
        </View>

       </AuthContainer>

    )
}
export default RenderPassword;