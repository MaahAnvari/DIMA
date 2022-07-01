import React, { Component, useRef } from 'react';
import { View, Text, ImageBackground,Image, FlatList, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, searchBook } from '../actions';
import BouncingList from './BouncingList';
import { Actions } from 'react-native-router-flux';

  const Item = (item) => (
      <TouchableHighlight onPress= {() => Actions.bookPage(item)} >
        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Image style={{height:ITEM_SIZE*0.4, width: ITEM_SIZE*0.4, borderRadius:20, paddingLeft:10}}
                    source={{ uri: item.item.artworkUrl100 }}
                ></Image>
                <View >
                    <Text style={{fontWeight:'800', color:'#fff', paddingLeft:5, width:ITEM_SIZE}}>{item.item.artistName}</Text>
                    <Text style={{fontWeight:'200',color:'#fff', paddingLeft:5, width:ITEM_SIZE}}>{item.item.collectionName}</Text>
                </View>
            </View>
            <View style={{ borderRadius:20,backgroundColor:'#B90020', height:ITEM_SIZE*0.2, width:ITEM_SIZE*0.4, justifyContent:'center'}}>
                <Text style={{color:'#fff', alignSelf:'center'}}>{item.item.collectionPrice} $</Text>
            </View>
        </View>
      </TouchableHighlight>
    
  );
  const FreeItem = (item) => (
      <TouchableHighlight onPress= {() => Actions.bookPage(item)} >
        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Image style={{height:ITEM_SIZE*0.4, width: ITEM_SIZE*0.4, borderRadius:20, paddingLeft:10}}
                    source={{ uri: item.item.artworkUrl100 }}
                ></Image>
                <View >
                    <Text style={{fontWeight:'800', color:'#fff', paddingLeft:5, width:ITEM_SIZE}}>{item.item.artistName}</Text>
                    <Text style={{fontWeight:'200',color:'#fff', paddingLeft:5, width:ITEM_SIZE}}>{item.item.collectionName}</Text>
                </View>
            </View>
            <View style={{ borderRadius:20,backgroundColor:'#B90020', height:ITEM_SIZE*0.2, width:ITEM_SIZE*0.4, justifyContent:'center'}}>
                <Text style={{color:'#fff', alignSelf:'center'}}>Free</Text>
            </View>
        </View>
      </TouchableHighlight>
    
  );
  
    
class AudioMainView extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      tab: 'free',
    //   color: 'red',
    };
  }

  componentWillUnmount(){ 
    console.log('will Audioooo');
    // this.props.searchBook({media: 'audiobook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
    // this.props.searchBook({media: 'audiobook', attribute:'', term:'top10', country:'', sort:''});
    // this.props.searchBook({media: 'audiobook', attribute:'', term:'free', country:'', sort:'decending'});  
  }
      
    renderItem = ({ item }) => (
        // console.log('hellllo')
        <Item item={item} />
      );
    renderFreeItem = ({ item }) => (
        // console.log('hellllo')
        <FreeItem item={item} />
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
                <Text style={{paddingBottom:10, color:'#fff', fontSize:30, fontWeight:'300', fontFamily:'Abduco'}}>Popular Now</Text>
                <BouncingList data={this.props.top10}/>
            </View>

            <View style={{marginTop:-20, flexDirection:'row', alignSelf:'center', borderRadius:15, height:50, width:ITEM_SIZE*1.4, backgroundColor:'gray'}}>
                <TouchableOpacity 
                    onPress= {() => this.setState({ tab: 'free'})}
                    style={{justifyContent:'center', alignItems:'center', backgroundColor:(this.state.tab== 'free' ? '#B90020' : 'gray'), borderRadius: 15, height:50, width:ITEM_SIZE*0.7}}>
                    <Text style={{fontSize:20, fontWeight:'300', fontFamily:'Abduco',  color: (this.state.tab== 'free' ? '#fff': '#B90020')}}>Free</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {() => this.setState({ tab: 'purchase'})}
                    style={{justifyContent:'center', alignItems:'center', backgroundColor:(this.state.tab== 'purchase' ? '#B90020' : 'gray'), borderRadius: 15,height:50, width:ITEM_SIZE*0.7}}>
                  <Text style={{fontSize:20, fontWeight:'300', fontFamily:'Abduco', color: (this.state.tab== 'purchase' ? '#fff': '#B90020')}}>Purchase</Text>
                </TouchableOpacity>
            </View>

            {this.state.tab == 'free' ? 
            <View style={{paddingBottom:60 }}>
                {/* <Text style={{color:'#fff', fontSize:20}}></Text> */}
                <ScrollView style={{paddingTop: 20, marginBottom:10}}>
                    <FlatList
                        data={this.props.free}
                        renderItem={this.renderFreeItem}
                        // horizontal={true}
                        keyExtractor={item => console.log()}
                        showsHorizontalScrollIndicator={true}
                    />
                </ScrollView>
            </View>
            :
            <View style={{paddingBottom:60 }}>
                {/* <Text style={{color:'#fff', fontSize:20}}></Text> */}
                <ScrollView style={{paddingTop: 20, marginBottom:10}}>
                    <FlatList
                        data={this.props.genre}
                        renderItem={this.renderItem}
                        // horizontal={true}
                        keyExtractor={item => console.log()}
                        showsHorizontalScrollIndicator={true}
                    />
                </ScrollView>
            </View>
             }
            {/* <View style={{paddingBottom:60 }}>
                <ScrollView style={{paddingTop: 20, marginBottom:10}}>
                    <FlatList
                        data={this.props.genre}
                        renderItem={this.renderItem}
                        // horizontal={true}
                        keyExtractor={item => console.log()}
                        showsHorizontalScrollIndicator={true}
                    />
                </ScrollView>
            </View> */}

            {/* <View style={{paddingBottom:60, }}>
                <Text style={{color:'#fff', fontSize:20}}>Italian Books</Text>
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE*1.65, paddingTop: 20, marginBottom:10}}>
                  <FlatList
                    data={this.props.country}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View> */}
            </ScrollView>
 
        );
    }
}
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = {
    item: {
        // fontFamily:'Roboto',
        height:ITEM_SIZE*0.5,
        backgroundColor: '#FFF',
        width: ITEM_SIZE*0.5,
        borderRadius:20,
        //padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
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
    const { genre, top10, search, free, newA } = state.abook;

    return { email, password, error, top10, search, genre, free, newA };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged, searchBook}
    )(AudioMainView);
