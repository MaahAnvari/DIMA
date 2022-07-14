import React, {Component, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged, searchBook} from '../actions';
import EbookMainView from './EbookMainView';
import AudioMainView from './AudioMainView';
import Feather from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import BouncingList from './BouncingList';

import {Icon, Icons, FONTS, COLORS, SIZES, images} from '../../constants';

class FavoritePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      update: true,
    };
  }

  componentDidUpdate() {
    console.log('diiiiid', this.props.favorites);
  }

  onSearchChange(text) {
    this.props.searchChanged(text);
  }

  submitSearch() {
    this.props.searchBook({
      media: 'ebook',
      attribute: '',
      term: this.props.searchKey,
      country: '',
      sort: '',
      searchKey: '1',
    });
    // Actions.searchPage();
  }

  renderItem = ({item}) => (
    <View style={styles.listItem}>
      <TouchableOpacity
        activeOpacity={0.7}
        //style={styles.item}
        onPress={() => {
          // this.props.selectBook(item.trackCensoredName)
      // Actions.bookPage({item, free: false, url:''})
      if(item.wrapperType){
        Actions.abookPage({item:{item}}) 
      } else if(item.kind){
        Actions.bookPage({item: item}) 
      }
        }}>
        <View>
          <Image
            style={{
              height: ITEM_SIZE * 1.2,
              width: ITEM_SIZE * 0.8,
              borderRadius: 20,
              margin: 10,
            }}
            source={{
              uri: item.artworkUrl100,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  render = () => {
    // const scrollX = useRef( new Animated.Value(0)).current;
    // callUpdate();
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          data={this.props.favorites}
          renderItem={this.renderItem}
          numColumns={2}
          // horizontal={true}
          keyExtractor={item => console.log()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          //ListEmptyComponent={this.ListEmptyComponent}
        />
      </SafeAreaView>
    );
  };
}
const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  item: {
    // fontFamily:'Roboto',
    height: ITEM_SIZE * 0.8,
    marginVertical: ITEM_SIZE * 0.1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    // backgroundColor: '#FFF',
    width: ITEM_SIZE * 2,
    borderRadius: 20,
    // flexDirection:'row',
    // padding: 20,
    marginHorizontal: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
  title: {
    fontSize: 20,
  },
};

const mapStateToProps = state => {
  console.log('state', state);
  const {favorites} = state.auth;
  const {searchKey, genre, top10, search, country} = state.ebook;

  return {searchKey, top10, search, genre, country, favorites};
};

export default connect(mapStateToProps, {searchChanged, searchBook})(
  FavoritePage,
);
