import  AuthContainer from "../ui/authContainer";
import  TextField  from "../ui/textField";
 

const RenderLogin = () => {
    return (
       
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu login!"
            icon="hotel">
            
            {/*children*/}
            <TextField
                label="E-mail"
                icon="email">
            </TextField>
        </AuthContainer>

    );
}
export default RenderLogin;