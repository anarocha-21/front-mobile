import { Dimensions, StyleSheet } from "react-native";
const { width, height} = Dimensions.get("window");

export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    keyboardAvoiding: {
        flex: 1
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07,
    },
    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },
    title: {
        fontSize: 25,
        fontWeight: "800"
    },
    subtitle: {
        fontSize: 17,
        color: "grey",
        marginTop: height * 0.02,
    },
    content: {
        backgroundColor: "#d6d6d6ff",
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },
    inputGroup: {
        marginBottom: height * 0.02,

    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#420350ff",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#6e6e6eff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#420350ff",
        borderRadius: 10
    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "#990000ff"
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
})