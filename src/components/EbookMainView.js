import React, { Component, useRef } from 'react';
import { View, Text, ImageBackground,Image, FlatList, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { searchBook, getFreeBooks, resetFree, selectBook } from '../actions';
import BookPage from './BookPage';
import BouncingList from './BouncingList';

  const Item = (item) => (
    <TouchableHighlight style={styles.item} onPress= {() => Actions.bookPage(item)}>
      <Image style={{height:ITEM_SIZE*0.6, width: ITEM_SIZE*0.4, borderRadius:20}}
          source={{
            uri: item.item.artworkUrl100,
          }}
        ></Image>
    </TouchableHighlight>
  );
  
    
class EbookMainView extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      open: 'eBook',
      search: false,
    };
  }

  componentWillUnmount(){ 
    // console.log('willllll');
    // this.props.resetFree();
    // this.props.getFreeBooks({media: 'ebook',term: 'heart of darkness'});
    // this.props.getFreeBooks({media: 'ebook',term: 'grimms-fairy-tales'});
    // this.props.getFreeBooks({media: 'ebook',term: 'robinson-crusoe'});
    // this.props.getFreeBooks({media: 'ebook',term: 'the-great-gatsby'});
    // this.props.getFreeBooks({media: 'ebook',term: 'great-expectations'});
    // this.props.getFreeBooks({media: 'ebook',term: 'a-christmas-carol'});
    // this.props.getFreeBooks({media: 'ebook',term: 'frankenstein'});
    // this.props.getFreeBooks({media: 'ebook',term: 'jane-eyre'});
    // this.props.getFreeBooks({media: 'ebook',term: 'anna-karenina'});
    // this.props.getFreeBooks({media: 'ebook',term: 'tender-is-the-night'});
    // this.props.getFreeBooks({media: 'ebook',term: 'pride-and-prejudice'});
    // this.props.getFreeBooks({media: 'ebook',term: 'Treasure-Island'});

    
    // this.props.searchBook({media: 'ebook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
    // this.props.searchBook({media: 'ebook', attribute:'', term:'top10', country:'', sort:''});
    // this.props.searchBook({media: 'ebook', attribute:'', term:'italy', country:'', sort:''});  
    // this.props.searchBook({media: 'ebook', attribute:'', term:'2022', country:'', sort:''});  

    // this.props.searchBook({media: 'audiobook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
    // this.props.searchBook({media: 'audiobook', attribute:'', term:'top10', country:'', sort:''});
    // this.props.searchBook({media: 'audiobook', attribute:'', term:'free', country:'', sort:'decending'});  
  
  }
      
  showDetails = ({item}) => {
    {this.props.selectBook(item.trackCensoredName)}
    Actions.bookPage({item})
    // <BookPage item={item} />
  }
  renderItem = ({ item }) => (
    <TouchableHighlight style={styles.item} onPress= {() => {
      this.props.selectBook(item.trackCensoredName)
      Actions.bookPage({item})
      }}>
      <Image style={{height:ITEM_SIZE*0.6, width: ITEM_SIZE*0.4, borderRadius:20}}
          source={{
            uri: item.artworkUrl100,
          }}
        ></Image>
    </TouchableHighlight>
  );
    
  renderError() {
        // if (this.props.error) {
        //     return (
        //         <View style={{ backgroundColor: 'white' }}>
        //             <Text style={styles.errorTextStyle} >
        //                 {this.props.error}
        //             </Text>
        //         </View>
        //     );
        // }
  }


    


    render = () => {
        return (
            <ScrollView style={{backgroundColor: '#001120', marginTop: 10}}>
            <View>
                <Text style={{ paddingBottom:10, color:'#fff', fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>Popular Now</Text>
                <BouncingList data={this.props.newB}/>
              </View>

              <View >
                <Text style={{color:'#fff', fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>New Books</Text>
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE*0.8, paddingTop: 20 }}>
                  <FlatList
                    data={this.props.top10}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>

              <View >
                <Text style={{color:'#fff', fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>Free Books</Text>
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE*0.8, paddingTop: 20 }}>
                  <FlatList
                    data={this.props.free}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>

              <View style={{ height:ITEM_SIZE, justifyContent:'center', alignItems:'center', paddingBottom:10}}>
              <Image style={{height:ITEM_SIZE, width:'110%',}}
                source={require('../../assets/images/logo.png')}
              ></Image>
              </View>

              <View>
                <Text style={{color:'#fff', fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>Trending Books</Text>
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE, paddingTop: 20}}>
                  <FlatList
                    data={this.props.genre}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>

              <View>
                <Text style={{color:'#fff',fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>Italian Books</Text>
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE, paddingTop: 20}}>
                  <FlatList
                    data={this.props.country}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>
            </ScrollView>
 
        );
    }
}
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = {
    item: {
        // fontFamily:'Roboto',
        height:ITEM_SIZE*0.6,
        backgroundColor: '#FFF',
        width: ITEM_SIZE*0.4,
        borderRadius:20,
        // padding: 20,
        // marginVertical: 8,
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
    const { email, password, error } = state.auth;
    const { genre, top10, search, country, newB, free } = state.ebook;

    return { email, password, error, top10, search, genre, country, newB, free };
};

export default connect(mapStateToProps, 
    {searchBook, getFreeBooks, resetFree, selectBook}
    )(EbookMainView);
