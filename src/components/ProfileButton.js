import * as React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

function ProfileButton(props) {
  console.log('buttttt', props)
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
      activeOpacity={0.5}
      disabled = {props.enable}
      // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    >
      {/* <Image
        source={require("../assets/profile.png")}
        style={styles.imageIcon}
      /> */}
      {/* <View style={styles.separatorLine} /> */}
      <Text style={styles.text}> {props.Name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 120,
    borderRadius: 5,
    margin: 5,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
  },
  imageIcon: {
    padding: 10,
    marginLeft: 20,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  text: {
    color: '#fff',
    marginBottom: 4,
    fontFamily:'Ornalia',
    fontSize:20,
    // marginLeft: 10,
  },
  iconSeparator: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default ProfileButton;
