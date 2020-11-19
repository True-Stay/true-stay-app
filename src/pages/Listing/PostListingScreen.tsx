import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("screen").width;

export const PostListingScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.heading}>Post Listing</Text>
      </SafeAreaView>
      <View style={styles.body}>
        <View style={styles.main}>
          <TextInput style={styles.input} placeholder="Title" />
          <TextInput style={styles.input} placeholder="Description" />
          <TextInput style={styles.input} placeholder="Address" />
          <View style={styles.photoView}>
            <Text style={styles.texts}>Photos</Text>
            <TouchableOpacity
              style={styles.PhotoButton}
              onPress={() => console.log("upload")}
            >
              <Text style={styles.buttonText}>Choose</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => console.log("Signed Up")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgb(187, 122, 68)",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 20,
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
    borderRadius: 20,
    borderColor: "rgb(187, 122, 68)",
    borderWidth: 1.5,
    padding: 15,
    margin: 15,
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
  PhotoButton: {
    backgroundColor: "rgb(187, 122, 68)",
    width: 100,
    borderRadius: 30,
    alignItems: "center",
    //padding: 5,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photoView: {
    fontSize: 20,
    width: screenWidth - 30,
  },
});