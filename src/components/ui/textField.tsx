import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";
 
type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({label, errorText, icon, ...props} : Props) => {
    return(
        <View style = {global.inputGroup}>
            <Text style = {global.label}>{label}</Text>
            <View style = {[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon  && (
                    <View>
                        <MaterialIcons name={icon} size={18} color="black"/>
                    </View>
                )}
                <TextInput 
                    keyboardAppearance= "dark"
                    placeholderTextColor= "#8b8a8aff"
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