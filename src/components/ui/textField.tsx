import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";
 
type Props = TextInputProps & {
    placeholder: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({ errorText, icon, ...props} : Props) => {
    return(
        <View style = {global.inputGroup}>
            <Text style = {global.placeholder}>{}</Text>
            <View style = {[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon  && (
                    <View>
                        <MaterialIcons name={icon} size={18} color="black"/>
                    </View>
                )}
                <TextInput 
                    keyboardAppearance= "dark"
                    placeholderTextColor= "#807e7eff"
                    style = {[global.input]}
                    /* const TextInputProps :
                    { 
                        style
                        value
                        placeholder
                        autoComplete
                        autoCapitalize
                        keyboardtype
                    } 
                    */
                    {...props}
                />
            </View>
 
        </View>
    );
}

export default TextField;