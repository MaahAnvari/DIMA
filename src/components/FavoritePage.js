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

import { Icon, Icons, FONTS, COLORS, SIZES, images } from '../../constants';
import firestore from '@react-native-firebase/firestore';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const Item = item => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.bookPage(item)}>
        <View>
          <Image
            style={{
              height: ITEM_SIZE * 1.2,
              width: ITEM_SIZE * 0.8,
              borderRadius: 20,
              margin: 10,
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

class FavoritePage extends Component {
  state = {
    Books: [],
  };

  showDetails = ({ item }) => {
    <BookPage item={item} />;
  };

  renderItem = ({ item }) => {
    console.log('TITLE', item.trackCensoredName);
    this.state.Books.forEach(data => {
      console.log('BOOK NAME', data._data.BookName);
      console.log(
        '---->',
        item.trackCensoredName.includes(data._data.BookName),
      );
      if (item.trackCensoredName.includes(data._data.BookName)) {
        return <Item item={item} />;
      }
    });
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
          data={this.props.top10} //mix
          //keyExtractor={item => item.key}
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

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  listEmpty: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    borderRadius: 12,
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  playButtonContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 5,
    width: 70,
    height: 70,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#5D3F6A',
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
});

const mapStateToProps = state => {
  console.log('state search', state.ebook.search);
  const { email, password, error } = state.auth;
  const { genre, top10, search, country, newB, searchKey } = state.ebook;

  return {
    email,
    password,
    error,
    top10,
    search,
    genre,
    country,
    newB,
    searchKey,
  };
};

export default connect(mapStateToProps, {})(FavoritePage);
