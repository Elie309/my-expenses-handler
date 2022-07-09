import { StyleSheet } from "react-native"
import { backgroundColors, fontColors } from "../utils/Colors"
import { fontSize } from "../utils/Font"

const styles = StyleSheet.create({
    // Container
    containerCenter: {
        flex: 1,
        alignItems: "center"
    },

    // Text Input
    textInput: {
        width: '100%',
        marginHorizontal: '10%',
        marginVertical: '10%',
        backgroundColor: backgroundColors.lightGrey,
        borderRadius: 10,
        padding: 10,
        color: fontColors.dark,
        fontSize: fontSize.headerSubtitle,
        textAlign: 'center',

    },

    //For big text
    heading: {
        fontSize: 20,
        marginVertical: 2,
        color: fontColors.dark,
        padding: 10,
        borderRadius: 10,
    },

    // For Dropw down
    dropdownButton: {
        borderWidth: 1,
        borderColor: backgroundColors.lightGrey,
    },
    dropdownButtonText: {
        color: fontColors.lightGrey,
        fontSize: 20,
        textAlign: 'center',
    },
    dropdownStyle: {
        backgroundColor: backgroundColors.white,
        width: '100%', borderRadius: 10,

    },
    dropdownItemStyle: {},
    dropdownTextStyle: {
        color: fontColors.dark,
        fontSize: fontSize.headerSubtitle,
        textAlign: 'center',
    },


    // For button
    button: {
        width: '80%',
        backgroundColor: backgroundColors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: '10%',
        marginHorizontal: '10%',
    },
    buttonText: {
        color: fontColors.white,
        fontSize: fontSize.headerSubtitle,
        textAlign: 'center',
    }
});

export default styles;