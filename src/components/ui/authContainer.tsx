import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
   title?: string;
   subtitle?: string;
   icon?: keyof typeof FontAwesome5.glyphMap;
   children: React.ReactNode;
//    logo?: Image;
}

const AuthContainer = ({ title, subtitle, /*logo,*/ icon, children }: Props) => {
const [logo] = useState(new Animated.ValueXY({ x: 175, y: 120 }));     

  return (
    <SafeAreaView style={global.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={global.keyboardAvoiding}>
        
        <ScrollView contentContainerStyle={global.container}>
                  
          <View style={global.header}>
            <Animated.Image style={{width: logo.x, height: logo.y}}source={require('../image/hotel-logo.png')}/>
            {/*{!!icon && <FontAwesome5 name={icon} size={29} top={12} color="#b88425ff" />} */}
            {!!title && <Text style={global.title}>{title}</Text>}
            {!!subtitle && <Text style={global.subtitle}>{subtitle}</Text>}
          </View>
                    
          <View >{children}</View> { }

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default AuthContainer;