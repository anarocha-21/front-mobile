import { Text, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";

const RenderAccount = () =>  {
    return (
        <AuthContainer>
            {/*children*/}
                <View>
                    <Text style={global.title}>conta</Text>
                </View>
        </AuthContainer>
    );
}
export default RenderAccount;