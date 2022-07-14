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




class BookReadView extends Component {

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

      }
      
      

    //   renderDownloadLink = () => {
    //     console.log('downloaaaad:', this.props.selectedBook)
    //     const store= firebase.storage();
    //     const gsReference = store.ref('Books/'+this.props.selectedBook+'.pdf').getDownloadURL().then(url => {
    //     console.log('urlllllll', url)  
    //     this.setState({uri: url})
        
    //     console.log(this.state.uri)
    //     // {<WebView
    //     //     // bounces={false}
    //     //     // scrollEnabled={false} 
    //     //     source={{ uri: url }}
    //     // />}
    //     return(<WebView
    //             // bounces={false}
    //             // scrollEnabled={false} 
    //             source={{ uri: url }}
    //         />)
        
    //     // Actions.pop();
    //     });
    //   }
  

    render() {
        console.log('audio viewww', this.props)
        // this.renderDownloadLink()
        return (
        //    <View style={{backgroundColor: '#FFF', height:'100%', paddingVertical:ITEM_SIZE*0.1, paddingHorizontal: ITEM_SIZE*0.1}}>
        //     <View style={{justifyContent:'center', alignItems:'center'}}>
        //       <Text style={{color:'#001120', fontFamily:'Abduco',fontSize: ITEM_SIZE*0.09}}> Your download will be started authomaticaly</Text>
        //     </View>
               <WebView
                    bounces={false}
                    scrollEnabled={false} 
                    // style={{height:10, width:9}}
                    source={{ uri: this.props.url }}
                />
             
            //  <View style={{justifyContent:'center', alignItems:'center'}}>
            // <TouchableOpacity
            //   style={{
            //     width: ITEM_SIZE*0.4,
            //     height:ITEM_SIZE*0.2,
            //     backgroundColor: '#A0131A',
            //     // marginLeft: ITEM_SIZE*0.1,
            //     marginVertical: ITEM_SIZE*0.55,
            //     borderRadius: 20,
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //   }}
            //   onPress={() => Actions.pop()}>
            //   <Text style={{ color: '#FFF', fontSize: ITEM_SIZE*0.04}}>Back</Text>
            // </TouchableOpacity>
            //   </View>
            // </View> 
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
    )(BookReadView);
