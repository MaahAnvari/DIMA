import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Book Screen</Text>
      <Button
        title="Go to Book screen...again"
        onPress={() => navigation.push('Book')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
