import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { COLORS } from '../../constants';

import BookPage from './BookPage';

// definition of the Item, which will be rendered in the FlatList
const Item = item => (
  <TouchableHighlight
    style={styles.item}
    onPress={() => Actions.bookPage(item)}>
    <Image
      style={{
        height: ITEM_SIZE * 0.6,
        width: ITEM_SIZE * 0.4,
        borderRadius: 20,
      }}
      source={{
        uri: item.item.artworkUrl100,
      }}
    />
  </TouchableHighlight>
);

// the filter
class List extends Component {
  showDetails = ({ item }) => {
    <BookPage item={item} />;
  };

  renderItem = ({ item }) => {
    // when no input, show all
    if (this.props.serachKey === '') {
      return <Item item={item} />;
    }
    // filter of the name
    if (
      item.item.trackCensoredName
        .toUpperCase()
        .includes(this.props.serachKey.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item item={item} />;
    }
    // filter of the artist name
    if (
      item.item.artistName
        .toUpperCase()
        .includes(this.props.serachKey.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item item={item} />;
    }
  };

  render = () => {
    return (
      <SafeAreaView style={styles.list__container}>
        <View>
          <FlatList
            data={this.props.top10} //TO DO change
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={item => console.log()}
          />
        </View>
      </SafeAreaView>
    );
  };
}

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '85%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
    color: COLORS.orange,
  },
  details: {
    fontSize: 15,
    color: COLORS.orange,
  },
});

const mapStateToProps = state => {
  console.log('state search', state.ebook.search);
  const { email, password, error } = state.auth;
  const { genre, top10, search, country, newB, serachKey } = state.ebook;

  return {
    email,
    password,
    error,
    top10,
    search,
    genre,
    country,
    newB,
    serachKey,
  };
};

export default connect(mapStateToProps, {})(List);
