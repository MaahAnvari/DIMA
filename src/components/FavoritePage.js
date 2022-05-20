import React from 'react';
import { SafeAreaView, Text } from 'react-native';

//TODO: MODIFY HOMEPAGE AND SEARCH PAGE LIKE MAIN
//TODO: MODIFY ROUTER LIKE APP
const FavoritePage = props => {
  const favoriteBooks = props;
  return (
    <SafeAreaView style={styles.root}>
      {favoriteBooks.length === 0 && <Text>Cart is empty</Text>}
      <List searchPhrase={''} data={favoriteBooks} setClicked={false} />
    </SafeAreaView>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
});
