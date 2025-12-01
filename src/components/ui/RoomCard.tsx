import { MaterialIcons, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

type Infos = {title?: string; text?: string; price: number};

type NameIcon = 
| {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
| {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap }
| {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap };

type Props = {
    image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    label: string;
    description?: Infos;
    icon?: NameIcon;
};

const RoomCard = ({label, description, icon} : Props ) => {
    return(
        <View>
            <View></View>
            <View>
                {!!label &&<Text>{label}</Text>}
                <View>
                    <View>
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
                            <View>
                                <View>
                                    {!!description.title && <Text>{description.title}</Text>}
                                    <Text>{description.title}</Text>  
                                    <Text>{description.text}</Text>
                                    <Text>{description.price}</Text>
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

});
export default RoomCard;