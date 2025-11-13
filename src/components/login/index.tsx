import { TouchableOpacity, Text } from "react-native";
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
                label="E-mail"
                icon="email"
            />

            <PasswordField
                label="Senha"
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