import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
