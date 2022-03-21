import * as React from "react";

import { StyleSheet, SafeAreaView } from "react-native";

import ProfileButton from "./ProfileButton";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    alignItems: "center",
    padding: 30,
  },
});

export default HomeScreen;
