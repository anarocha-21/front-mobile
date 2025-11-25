import { Text, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";

import { global } from "../ui/styles";

const RenderReservations = () =>  {
    return (
        <AuthContainer>
            {/*children*/}
                <View>
                    <Text style={global.title}>reservas</Text>
                </View>
        </AuthContainer>
    );
}
export default RenderReservations;