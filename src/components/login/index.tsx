import { Text, TouchableOpacity } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";



const RenderLogin = () => {
    return (
       
        <AuthContainer
            title="Olá, seja bem vindo!"
            subtitle="Login"
            icon="hotel">
            
            {/*children*/}
            <TextField
                placeholder="E-mail"
                icon="email"
            />

            <PasswordField
                icon="lock"
                placeholder="••••••••••"
            />

            <TouchableOpacity style={[global.primaryButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>
            
        </AuthContainer>

    );
}
export default RenderLogin;


