/* sua função é definir fluxo de navegação entre as telas disponiveis em tab navigator
explorar, reservas, perfil*/

import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";


const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#bb8218ff",
            tabBarInactiveTintColor: "#af4949ff",
            headerShown: false,
            tabBarStyle: {backgroundColor: "#ffffffff",}
        }}>
        <Tabs.Screen
        name="explorer"
        options={{
            title: "Explorar",
            tabBarIcon: ({color}) => (<FontAwesome5 size={25} name="search" color={color} />)     
        }}
        />
        <Tabs.Screen
        name="reservations"
        options={{
            title: "Reservas",
            tabBarIcon: ({color}) => (<FontAwesome5 size={25} name="calendar" color={color} />)     
        }}
        />
        <Tabs.Screen
        name="account"
        options={{
            title: "Conta", tabBarIcon: ({color}) =>
            (<FontAwesome5 size={25} name="user" color={color} />)     
        }}
        />
        </Tabs>
        
    );
}
export default TabLayout;