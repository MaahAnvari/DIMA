import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { saveChanges, nameChanged, usernameChanged, sexChanged, addGenre } from '../actions';

import Feather from 'react-native-vector-icons/Feather';
import ProfileButton from './ProfileButton';


import { WebView } from 'react-native-webview';
import storage, { firebase, getStorage, ref } from '@react-native-firebase/storage';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width : width * 0.9;




class DownloadPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          openG: false,
          openS: false,
          uri:''
        //   items: [{...}, ...]
        };
    
        // this.setValue = this.setValue.bind(this);
      }
      componentWillUnmount() {
        // console.log('downloaaaad:', this.props.selectedBook)
        // const store= firebase.storage();
        // const gsReference = store.ref('Books/'+this.props.selectedBook+'.pdf').getDownloadURL().then(url => {
        // console.log('urlllllll', url)  
        // this.setState({uri: url})
        
        // console.log(this.state)
        // // {<WebView
        // //     // bounces={false}
        // //     // scrollEnabled={false} 
        // //     source={{ uri: url }}
        // // />}
        // {<Text style={{ fontSize:30, color: 'red'}}>
        //     {url}
        // </Text>}
        
        // Actions.pop();
        // });
      }
      
      

      renderDownloadLink = () => {
        console.log('downloaaaad:', this.props.selectedBook)
        const store= firebase.storage();
        const gsReference = store.ref('Books/'+this.props.selectedBook+'.pdf').getDownloadURL().then(url => {
        console.log('urlllllll', url)  
        this.setState({uri: url})
        
        console.log(this.state.uri)
        // {<WebView
        //     // bounces={false}
        //     // scrollEnabled={false} 
        //     source={{ uri: url }}
        // />}
        return(<WebView
                // bounces={false}
                // scrollEnabled={false} 
                source={{ uri: url }}
            />)
        
        // Actions.pop();
        });
      }
  

    render() {
        // this.renderDownloadLink()
        return (
           <View style={{backgroundColor: '#001120', height:'100%', padding:20}}>
               <Text> DownloadPage </Text>
               {/* <WebView
                    bounces={false}
                    scrollEnabled={false} 
                    source={{ uri: this.state.url }}
                /> */}
                <TouchableOpacity onPress={item => {
                    console.log('weeeeb', this.state)
                    this.renderDownloadLink();

                }}>
                       <Text style={{ fontFamily:'Ornalia',fontSize:30,color: '#A0131A', borderBottomColor:'#A0131A', borderBottomWidth:1}}> Donload now</Text>
                </TouchableOpacity>
               
           </View>
        );
    }
}


const mapStateToProps = (state, props) => {
    console.log('stateeeee',props)
    const { email, password, error, name, sex, id, username } = state.auth;
    const { selectedBook } = state.ebook;

    return { email, password, error, selectedBook, name, sex, id, username };
};

export default connect(mapStateToProps, 
    {}
    )(DownloadPage);
