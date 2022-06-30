import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animatable,
} from 'react-native';

import { COLORS } from '../../constants';
import firestore from '@react-native-firebase/firestore';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Item = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.bookPage(item)}>
        <View style={styles.image}>
          <Image
            style={{
              height: ITEM_SIZE * 0.3,
              width: ITEM_SIZE * 0.2,
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{
              uri: item.item.artworkUrl100,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default class FavoritePage extends Component {
  state = {
    Books: [],
  };

  showDetails = ({ item }) => {
    <BookPage item={item} />;
  };

  renderItem = ({ item }) => {
    {
      /*this.state.Books.forEach(data => {
      for (var i = 0; i < item.item.trackCensoredName.length; i++) {
        if (item.item.trackCensoredName[i].match(data.BookName))
          return <Item item={item} />;
      }
    }); */
    }
    return <Item item={item} />;
  };

  /*
  ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    };
    return (
      <View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
          Empty List!
        </Animatable.Text>
      </View>
    );
  };
  */

  async componentDidMount() {
    await firestore()
      .collection('LikeBooks')
      .onSnapshot(data => this.setState({ Books: data.docs }));
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          data={this.props.top10}
          keyExtractor={item => item.key}
          numColumns={2}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          //ListEmptyComponent={this.ListEmptyComponent}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 16,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
});
