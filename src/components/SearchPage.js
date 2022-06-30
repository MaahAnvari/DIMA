import React, { useState, useEffect, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
  StatusBar,
} from 'react-native';
import { FONTS, COLORS } from '../../constants';

import List from './List';
import SearchBar from './SearchBar';
import BookPage from './BookPage';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

// definition of the Item, which will be rendered in the FlatList
const Item = item => (
  <TouchableHighlight onPress={() => Actions.bookPage(item)}>
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: COLORS.searchItems,
        opacity: 0.8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      }}>
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
      <View>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>
          {item.item.trackCensoredName.substr(0, 32)}
        </Text>
        <Text style={{ ...FONTS.h3, color: COLORS.white, opacity: 0.7 }}>
          {item.item.artistName}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

{
  /* const Item = item => (
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
); */
}

class SearchPage extends Component {
  showDetails = ({ item }) => {
    <BookPage item={item} />;
  };

  renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  render() {
    //const [searchPhrase, setSearchPhrase] = useState('');
    //const [clicked, setClicked] = useState(false);

    return (
      <SafeAreaView style={styles.root}>
        {/*
        {!clicked && <Text style={styles.title}>Programming Languages</Text>}
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
         <List
          searchPhrase={this.props.searchKey}
          data={this.props.search}
          //setClicked={setClicked}
        />
        */}

        {console.log('Searchhhhhh', this.props)}

        <FlatList
          data={this.props.top10} //TO DO change
          keyExtractor={item => item.key}
          contentContainerStyle={{ padding: 10 }} //paddingTop: StatusBar.currentHeight || 42
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: COLORS.orange,
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

export default connect(mapStateToProps, {})(SearchPage);
