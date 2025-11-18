import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
   title: string;
   subtitle?: string;
   icon?: keyof typeof FontAwesome5.glyphMap;
   iconReturn?: keyof typeof FontAwesome5.glyphMap; //chevron-left
   children: React.ReactNode;
//    logo?: Image;
}


const AuthContainer = ({ title, subtitle, /*logo,*/ iconReturn, icon, children }: Props) => {
    const [logo] = useState(new Animated.ValueXY({ x: 175, y: 120 }));
                    

  return (
        <SafeAreaView style={global.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={global.keyboardAvoiding}>
                <ScrollView contentContainerStyle={global.container}>

                <View>
                {!!iconReturn && (
                <TouchableOpacity onPress={() => router.back()}>
                  <FontAwesome5
                    name={iconReturn}
                    size={23}
                    color="#4169E1"
                    style={{ marginLeft: width * 0.04, backgroundColor: "#000",borderRadius: 10,height: height * 0.04,width: width * 0.15
                    }}
                  />
                </TouchableOpacity>
              )}
              </View>


                    <View style={global.header}>
                    <Animated.Image style={{width: logo.x, height: logo.y}}source={require('../image/hotel-logo.png')}/>
                    {/* {!!icon && <FontAwesome5 name={icon} size={29} top={12} color="#b88425ff" />} */}
                    
                    <Text style={global.title}>{title}</Text>
                    {!!subtitle && <Text style={global.subtitle}>{subtitle}</Text>}
                    
                    </View>
                
                    <View style={global.content}>
                        {children}
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default AuthContainer;