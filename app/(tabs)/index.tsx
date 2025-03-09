import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [mode, setMode] = useState("dark");
  const router = useRouter();

  const setDarkLightMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  const handleBookStock = () => {
    console.log("Book stock button clicked");
  };

  const needToReturnStock = () => {
    console.log("Need to return stock button clicked");
  };

  const stockHistory = () => {
    console.log("Stock history button clicked");
  };

  return (
    <ScrollView
      style={mode === "dark" ? styles.darkScrollView : styles.lightScrollView}>
      <View style={styles.headercontainer}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons
            name='quadcopter'
            size={24}
            style={mode === "dark" ? styles.whiteText : styles.darkText}
          />
          <Text style={mode === "dark" ? styles.whiteText : styles.darkText}>
            CASR STORE
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Ionicons
            name='notifications'
            size={24}
            style={mode === "dark" ? styles.whiteText : styles.darkText}
          />
          <TouchableHighlight onPress={setDarkLightMode}>
            {mode === "dark" ? (
              <MaterialIcons
                name='dark-mode'
                size={24}
                style={mode === "dark" ? styles.whiteText : styles.darkText}
              />
            ) : (
              <MaterialIcons
                name='light-mode'
                size={24}
                style={mode === "dark" ? styles.whiteText : styles.darkText}
              />
            )}
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.contentcontainer}>
        <View style={styles.content}>
          <Text style={mode === "dark" ? styles.whiteText : styles.darkText}>
            Welcome To CASR Store!
            {"\n"}
            <Text
              style={
                mode === "dark"
                  ? styles.contentwhiteText
                  : styles.contentdarkText
              }>
              Here you can Easily buy and return store items whenever you needs.
              Keep track of store items with a simple and efficient interface.
            </Text>
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableHighlight onPress={() => router.push("/(tabs)/explore")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }>
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }>
                Book
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.push("/(tabs)/appearance")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }>
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }>
                Return
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.push("/(tabs)/appearance")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }>
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }>
                History
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lightScrollView: {
    paddingTop: 30,
    backgroundColor: "white",
  },
  darkScrollView: {
    paddingTop: 30,
    backgroundColor: "black",
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 25,
  },
  darkText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: 500,
    lineHeight: 25,
  },
  contentwhiteText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 25,
  },
  contentdarkText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 25,
  },
  headercontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  contentcontainer: {
    flex: 1,
    padding: 15,
  },
  content: {
    margin: 10,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "red",
    margin: 5,
  },
  darkButtonView: {
    backgroundColor: "#000000",
    margin: 5,
    padding: 20,
    borderRadius: 10,
  },
  lightButtonView: {
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 20,
    borderRadius: 10,
  },
});
