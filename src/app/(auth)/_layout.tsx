/* sua função é definir o fluxo de navegação entre as telas de autenticação: login, register, resetpassword

sobreposição de telas: stack navigator, 3 funções p manipular o empilhamento:
push(): sobrepoe a tela atual sobre a anterior,
back(): remove a tela atual e retorna à tela anterior,
replace(): substitui um tela atual pela proxima */

import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{ title: "Login"}} />
           <Stack.Screen name="register" options={{ title: "Cadastro"}} /> 
             <Stack.Screen name="resetPassword" options={{ title: "Esqueci minha senha"}} />
        </Stack>
    
    );
}
export default AuthLayout;