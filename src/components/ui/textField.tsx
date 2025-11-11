import { FontAwesome5 } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import {View, Text, TextInput} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof FontAwesome5.glyphMap;
}

export default function TextField( {label, errorText, icon} : Props) {
    return(
    <View>
        <Text> {label}</Text>
        <View>
            {!! icon  && (
                <View>
                <MaterialIcons name={icon} size={18} color="yellow"/>
                </View>
            )}
            <TextInput value="Isso é um teste"/>
        </View>
    </View>
    )
}