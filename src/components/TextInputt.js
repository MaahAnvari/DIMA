import * as React from "react";

import { StyleSheet, View, Text, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";

onSearchTextChange = input => {
    console.log(input);
    // do something awesome
  };

function TextInputt(props) {
  return (
    <TextInput
        placeholder='Email Address'
         testID='#email'
         accessibilityLabel='#email'
         blurOnSubmit={ false }
        onChangeText={debounce(onSearchTextChange, 800)}
    >

    </TextInput>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    // backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
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
    resizeMode: "stretch",
  },
  text: {
    color: "#fff",
    marginBottom: 4,
    fontFamily:'Ornalia',
    fontSize:20,
    // marginLeft: 10,
  },
  iconSeparator: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});

export default TextInputt;
