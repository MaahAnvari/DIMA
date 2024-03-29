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
    <SafeAreaView style={styles.list__container}>
      <View>
        <Text style={styles.title}>Result for: {props.searchPhrase} </Text>
        <FlatList
          //numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '100%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    borderRadius: ITEM_SIZE * 0.05,
    marginTop: ITEM_SIZE * 0.05,
    marginBottom: ITEM_SIZE * 0.1,
    borderWidth: 1,
    borderColor: '#fff',
    padding: ITEM_SIZE * 0.1,
    alignSelf: 'center',
    fontSize: ITEM_SIZE * 0.1,
    width: '100%',
    color: COLORS.orange,
  },
  details: {
    fontSize: 15,
    color: COLORS.orange,
  },
});
