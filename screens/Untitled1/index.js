import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#E45700',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("manyRows", {});
      }}><ImageBackground style={styles.IJBzqiGP} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IJBzqiGP: {
    width: 359,
    height: 243,
    position: "absolute",
    left: -10,
    top: 97
  }
});
export default Untitled1;