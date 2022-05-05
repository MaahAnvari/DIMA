import * as React from "react";
import { Text } from "react-native";

import { SafeAreaView } from "react-native";
import FiveStar from "../FiveStar";

function ProfileScreen({ route }) {
  return (
    <SafeAreaView>
      <Text>This is {route.params.name}'s profile</Text>
      <FiveStar />
    </SafeAreaView>
  );
}

export default ProfileScreen;
