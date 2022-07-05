import React, { Component, useRef } from 'react';
import {View, Text, ImageBackground,Image, FlatList, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { searchChanged, searchBook } from '../actions';
import EbookMainView from './EbookMainView';
import AudioMainView from './AudioMainView';
import Feather from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import BouncingList from './BouncingList';
   
class FavoritePage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      update: true,
    };
  }
    
  componentDidUpdate(){
    console.log('diiiiid', this.props.favorites)
  }

  onSearchChange(text) {
      this.props.searchChanged(text); 
  }

  submitSearch() {
    this.props.searchBook({media: 'ebook', attribute:'', term:this.props.searchKey, country:'', sort:'', searchKey: '1'});
    // Actions.searchPage();
  }
    
  renderItem = ({ item }) => (
    <TouchableHighlight style={styles.item} onPress= {() => {
      this.props.selectBook(item.trackCensoredName)
      Actions.bookPage({item, free: false, url:''})
      }}>
        <View style={{flexDirection:'row', alignItems:'center', paddingBottom:10}}>
      <Image style={{height:ITEM_SIZE*0.8, width: ITEM_SIZE*0.6, borderRadius:20, paddingBottom:10}}
          source={{
            uri: item.artworkUrl100,
          }}
        ></Image>
        <Text style={{color:'#fff', paddingHorizontal: 10,}}> {item.trackCensoredName}</Text>
        </View>
    </TouchableHighlight>
  );
    render = () => {
        // const scrollX = useRef( new Animated.Value(0)).current;
        // callUpdate();
        return (
          <View style={{backgroundColor: '#001120', justifyContent:'flex-start', paddingBottom: ITEM_SIZE*0.4, alignItems:'flex-start'}}>
            
            <View>
                <ScrollView  style={{height:ITEM_SIZE*0.8, paddingTop: 20 }}>
                  <FlatList
                    data={this.props.favorites}
                    renderItem={this.renderItem}
                    // horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>
          </View>
        );
    }
}
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = {
    item: {
        // fontFamily:'Roboto',
        height:ITEM_SIZE*0.8,
        marginVertical:ITEM_SIZE*0.1,
        borderBottomWidth:1,
        borderColor:'gray',
        // backgroundColor: '#FFF',
        width: ITEM_SIZE*2,
        borderRadius:20,
        // flexDirection:'row',
        // padding: 20,
        marginHorizontal: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
    }
    },
    title: {
        fontSize: 20,
    },
  };



const mapStateToProps = (state) => {
    console.log('state',state)
    const { favorites } = state.auth;
    const { searchKey, genre, top10, search, country } = state.ebook;

    return { searchKey, top10, search, genre, country, favorites };
};

export default connect(mapStateToProps, 
    {searchChanged, searchBook}
    )(FavoritePage);
