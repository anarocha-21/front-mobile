import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Image, Dimensions, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
| {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
| {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap }
| {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap };

type Infos = {title?: string; text?: string; price: number};

type Props = {
    image?: ImageSourcePropType ;
    label: string;
    description?: Infos;
    icon?: NameIcon;
};

const { width, height } = Dimensions.get("window");
const RoomCard = ({ image, label, description, icon }: Props) => {
    return(
        <View style={global.content}>
            {!!image &&
            <View><Image style={styles.image} source={image} resizeMode="cover"/></View>}
            <View>
                {!!label &&<Text style={{fontSize: 23, fontWeight: 600, marginTop: height * 0.02}}>{label}</Text>}
                <View style={styles.container}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
                        {!!icon && (
                        <View>
                            {icon.lib === "MaterialIcons" && (
                                <MaterialIcons name={icon.name} size={18} color="black"/>
                            )};
                            {icon.lib === "FontAwesome5" && (
                                <FontAwesome5 name={icon.name} size={18} color="black"/>
                            )};
                            {icon.lib === "FontAwesome6" && (
                                <FontAwesome6 name={icon.name} size={18} color="black"/>
                            )};
                        </View> 
                        )}
                        {!!description && (
                            <View style={styles.description}>
                                <View>
                                    <Text style={styles.text}>{description.text}</Text>
                                </View>
                                <View>
                                    <Text style={styles.price}>{description.price}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: height * 0.03,
        width: "auto",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    container: {
        marginTop: height * 0.03,
        backgroundColor: "#cfcfcfff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    description: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 15
    },
    price: {
        fontSize: 17,
        fontWeight: 600,
        color: "rgba(109, 4, 4, 1)"
    }

});
export default RoomCard;