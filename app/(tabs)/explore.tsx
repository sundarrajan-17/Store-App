import { useRouter } from "expo-router";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

export default function TabTwoScreen() {
  const [mode, setMode] = useState("dark");
  const router = useRouter();

  const setDarkLightMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  const needToReturnStock = () => {
    console.log("Need to return stock button clicked");
  };

  const stockHistory = () => {
    console.log("Stock history button clicked");
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={
          mode === "dark" ? styles.darkScrollView : styles.lightScrollView
        }>
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
          <TouchableHighlight onPress={needToReturnStock}>
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
          <TouchableHighlight onPress={stockHistory}>
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
      </ScrollView>
    </SafeAreaView>
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
  buttoncontainer: {
    flex: 1,
    // flexDirection: "row",
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
