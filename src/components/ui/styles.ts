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
        color: "black",
        marginTop: height * 0.02,
        fontWeight: "bold"
    },
    content: {
        backgroundColor: "#d8d8d8ff",
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: "#000000ff",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },
    inputGroup: {
        marginBottom: height * 0.02,

    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#990000ff",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#f5f0f0ff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000000ff",
        borderRadius: 10
    },
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 42
    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "#ff0000ff"
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
        backgroundColor: "#640909ff",
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
        fontWeight: "bold"
    },

})