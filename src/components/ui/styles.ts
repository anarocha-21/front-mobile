import { Dimensions, StyleSheet } from "react-native";
const { width, height} = Dimensions.get("window");

export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#500909ff",
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
        color: "#ffffffff",
        fontSize: 25,
        fontWeight: "500",
        top: 44
        
    },
    subtitle: {
        color: "#ffb731ff",
        fontSize: 20,
        marginTop: height * 0.02,
        top: 45,
        fontWeight: "500"
    },
    content: {
        borderRadius: 5,
        padding: width * 0.06,
        shadowColor: "#ffb731ff",
        shadowOpacity: 0.02,
        elevation: 5,
        top: 35
    },
    inputGroup: {
        marginBottom: height * 0.02,

    },
    placeholder: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#e6e3dfff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000000ff",
        borderRadius: 10
    },
    eyeIcon: {
        position: "absolute",
        right: 17,
        top: 34
    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "#ffffffff"
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: "#000000ff",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    errorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },
    primaryButton: {
        backgroundColor: "#b88425ff",
        borderRadius: 10,
        padding: width * 0.025,
        alignItems: "center"
    },
    primaryButtonDisabled: {
        backgroundColor: "#6e1515ff",
        borderRadius: 10,
    },
    primaryButtonText: {
        color: "#ffffffff",
        fontWeight: "bold",
        fontSize: 15
    },
    createButton: {
        backgroundColor: "#b88425ff",
        borderRadius: 10,
        alignItems: "center",
        

    },
    createAccount: {
        color: "#ffffffff",
        fontWeight: "bold",
        fontSize: 15,
        borderRadius: 10,
        padding: width * 0.025,
    },
    label: {
        fontSize: 12,
        color: "#ffff",
        fontWeight: "bold",
        marginBottom: height * 0.01
    },

})