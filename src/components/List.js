import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {FONTS, COLORS} from '../../constants';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

// definition of the Item, which will be rendered in the FlatList
const Item = ({item}) => (
  <TouchableHighlight
    //style={styles.item}
    onPress={() => {
      // this.props.selectBook(item.trackCensoredName)
      Actions.bookPage({item, free: false, url: ''});
    }}>
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
          uri: item.artworkUrl100,
        }}
      />
      <View>
        <Text style={{...FONTS.h2, color: COLORS.white}}>
          {item.trackCensoredName.substr(0, 32)}
        </Text>
        <Text style={{...FONTS.h3, color: COLORS.white, opacity: 0.7}}>
          {item.artistName}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

// the filter
const List = props => {
  const {searchPhrase, data} = props;

  const renderItem = ({item}) => {
    // when no input, show all
    console.log('iteeeeem:', item);

    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text
        style={{
          borderRadius: ITEM_SIZE * 0.05,
          marginTop: ITEM_SIZE * 0.05,
          borderWidth: 1,
          borderColor: '#fff',
          padding: ITEM_SIZE * 0.1,
          alignSelf: 'center',
          color: 'red',
          fontFamily: 'Abduco',
          fontSize: ITEM_SIZE * 0.1,
        }}>
        Your Result for {props.searchPhrase}{' '}
      </Text>
      <FlatList
        //numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 10}} //paddingTop: StatusBar.currentHeight || 42
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: COLORS.orange,
    marginBottom: 5,
  },
  details: {
    fontSize: 15,
    color: COLORS.orange,
  },
});
