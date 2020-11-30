import { StyleSheet, Dimensions } from 'react-native';
export const themeColorBase = "#BB7A44";
export const themeColorPeach = "#FEC89A";
export const themeColorPuff = "#F9DCC4";
export const themeColorIsabelline = "#F8EDEB";
export const themeColorPink = "#FCD5CE";
export const themeColorMelon = "#FFB5A7";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    header: {
      flex: 1,
      backgroundColor: "rgb(187, 122, 68)",
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
    heading: {
      fontWeight: "bold",
      fontSize: 30,
      padding: 20,
      color: "white",
    },
    body: {
      flex: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      width: screenWidth - 30,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
    },
    texts: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      width: screenWidth - 30,
      borderRadius: 15,
      borderColor: "rgb(187, 122, 68)",
      borderWidth: 1.5,
      padding: 12,
      margin: 20,
      fontSize: 15,
    },
    Button: {
      backgroundColor: "rgb(187, 122, 68)",
      width: screenWidth - 30,
      borderRadius: 30,
      alignItems: "center",
      margin: 10,
      padding: 12,
    },
   HorizontalButton: {
        backgroundColor: "rgb(187, 122, 68)",
        flexDirection:"column",
        flex:1,
        borderRadius: 30,
        alignItems: "center",
        margin: 10,
        padding: 12,
      },
    PhotoButton: {
      backgroundColor: "rgb(187, 122, 68)",
      width: 100,
      borderRadius: 30,
      alignItems: "center",
    },
    Vfooter: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    Hfooter: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    photoView: {
      fontSize: 20,
      width: screenWidth - 30,
    },
  });