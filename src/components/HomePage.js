import React, { Component, useRef } from 'react';
import { View, Text, ImageBackground,Image, FlatList, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, searchEbook } from '../actions';
import BouncingList from './BouncingList';
import ProfileButton from './ProfileButton';


  const Item = (item) => (
    <TouchableHighlight style={styles.item} onPress= {() => console.log('on press item', item.item)}>
      <Image style={{height:ITEM_SIZE*1.5, width: ITEM_SIZE, borderRadius:20}}
          source={{
            uri: item.item.artworkUrl100,
          }}
        ></Image>
    </TouchableHighlight>
  );
  
    
class HomePage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      open: 'eBook',
      search: false,
    //   items: [{...}, ...]
    };

    // this.setValue = this.setValue.bind(this);
  }

  componentWillUnmount(){ 
    console.log('willlllll');
    this.props.searchEbook({media: 'ebook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
    this.props.searchEbook({media: 'ebook', attribute:'', term:'top10', country:'', sort:''});
    this.props.searchEbook({media: 'ebook', attribute:'', term:'italy', country:'', sort:''});  
  }
      
    renderItem = ({ item }) => (
        <Item item={item} />
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
        // const scrollX = useRef( new Animated.Value(0)).current;
        return (
           <View style={{backgroundColor: '#001120', justifyContent:'center'}}>
             <View style={{backgroundColor:'#0C1E2F',borderWidth:1, height:ITEM_SIZE*0.25, flexDirection:'row'}}>
               <TouchableOpacity 
                onPress={()=> this.setState({ search: ! this.state.search})}
                style={{ marginLeft:20, marginTop:2, height:ITEM_SIZE*0.2, width:ITEM_SIZE*0.5}}
               >
               <Image
                  style={{width: ITEM_SIZE*0.2, height: ITEM_SIZE*0.2}}
                  resizeMode="contain"
                  source={require('../../assets/images/search.png')}
                />
                 {/* <Text style={{color:'#fff', padding: 10, alignSelf:'center'}}>Search</Text> */}
               </TouchableOpacity>
               
               {this.state.search ?  
                <View style={{ backgroundColor:'#ADADAD', marginLeft:-ITEM_SIZE*0.2, width: ITEM_SIZE*1.3, borderColor:'#B90020', borderWidth:1, borderRadius:252}}>

                </View>: 
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{marginTop:2, justifyContent:'center', borderRadius:20, borderWidth:(this.state.open== 'eBook' ? 1 : 0), borderColor:'red' ,height:ITEM_SIZE*0.2, width:ITEM_SIZE*0.5, color:'#000'}}>
                    <Text style={{color:'#fff',  alignSelf:'center'}}>Ebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderRadius:5, borderWidth:(this.state.open== 'audioBook' ? 1 : 0), borderColor:'red', height:ITEM_SIZE*0.25, width:ITEM_SIZE*0.5, color:'#000'}}>
                    <Text style={{color:'#fff', padding: 10, alignSelf:'center'}}>audio</Text>
                  </TouchableOpacity>
                </View>}
               
               {/* <TouchableOpacity style={{marginTop:2, justifyContent:'center', borderRadius:20, borderWidth:(this.state.open== 'eBook' ? 4 : 0), borderColor:'red' ,height:ITEM_SIZE*0.2, width:ITEM_SIZE*0.5, color:'#000'}}>
                 <Text style={{color:'#fff',  alignSelf:'center'}}>Ebook</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ borderRadius:5, borderWidth:(this.state.open== 'audioBook' ? 4 : 0), borderColor:'red', height:ITEM_SIZE*0.25, width:ITEM_SIZE*0.5, color:'#000'}}>
                 <Text style={{color:'#fff', padding: 10, alignSelf:'center'}}>audio</Text>
               </TouchableOpacity> */}
               
             </View>
             <ScrollView style={{backgroundColor: '#001120', marginTop: 10}}>
             {/* <ProfileButton 
                        style={{backgroundColor:'#EE1520',
                            borderColor:'#000', 
                            borderRadius:15, 
                            shadowColor: '#3D1214',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 10, height: 5},
                            shadowRadius: 10,
                            elevation: 20, }} 
                        Name='Submite'
                        onPress={ () => this.props.searchEbook({attribute:'genreIndex', term: 'action'})} /> */}
              <View>
                <Text style={{color:'#fff', fontSize:20}}>Popular Now</Text>
                <BouncingList data={this.props.top10}/>
              </View>

              <View style={{paddingBottom:60 }}>
                <Text style={{color:'#fff', fontSize:20}}>Trending Books</Text>
                {/* {console.log('genreeee', this.props.genre)} */}
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE*1.65, paddingTop: 20, marginBottom:10}}>
                  <FlatList
                    data={this.props.genre}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => console.log()}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>

              <View style={{paddingBottom:60, }}>
                <Text style={{color:'#fff', fontSize:20}}>Italian Books</Text>
                {/* {console.log('genreeee', this.props.genre)} */}
                <ScrollView horizontal={true}    style={{height:ITEM_SIZE*1.65, paddingTop: 20, marginBottom:10}}>
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
               
           </View>
        );
    }
}
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const styles = {
    item: {
        // fontFamily:'Roboto',
        height:ITEM_SIZE,
        backgroundColor: '#FFF',
        width: ITEM_SIZE,
        borderRadius:20,
        // padding: 20,
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
    const { genre, top10, search, country } = state.ebook;

    return { email, password, error, top10, search, genre, country };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged, searchEbook}
    )(HomePage);
