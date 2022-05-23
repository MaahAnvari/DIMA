import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { nameChanged, usernameChanged, sexChanged, addGenre } from '../actions';

import Feather from 'react-native-vector-icons/Feather';
  

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width : width * 0.9;

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          openG: false,
          openS: false,
          value: null,
          placeholderS:'Sex',
          placeholderG:'Genre'
        //   items: [{...}, ...]
        };
    
        // this.setValue = this.setValue.bind(this);
      }
    

    onUsernameChange(text) {
        this.props.useقnameChanged(text); 
    }

    onNameChange(text) {
        this.props.nameChanged(text); 
    }

    onSexChange(item) {
        console.log(item)
        this.setState({
            placeholderS: item.label
        })
        // this.props.sexChanged(text);
    }
    onGenreChange(item) {
        console.log(item)
        this.setState({
            placeholderG: item.label
        })
        this.props.addGenre(item.value);
        // this.props.sexChanged(text);
    }

    onSubButtonPress() {
        Actions.homePage();
    }

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

    setOpenSex() {
        this.setState({
          openS: !this.state.openS
        });
        console.log('opeeeen',this.state.openS)
      } 
    setOpenGenre() {
        this.setState({
          openG: !this.state.openG
        });
        console.log('opeeeen',this.state.openG)
      } 
    setOpen() {
        this.setState({
          open: !this.state.open
        });
        console.log('opeeeen',this.state.open)
      } 

      setValue(callback) {
          console.log('set valueeee',callback)
        // this.setState(state => ({
        //   value: callback(state.value)
        // }));
      }


    render() {
        return (
           <View style={{backgroundColor: '#001120', height:'100%', padding:20}}>

               <View style={{justifyContent:'center', borderColor:'#A0131A', borderWidth:5, borderRadius:ITEM_SIZE*0.5, height:ITEM_SIZE*0.5, width:ITEM_SIZE*0.5, alignSelf:'center'}}>
               <Feather name="user" style={{ alignSelf:'center' }} size={ITEM_SIZE*0.3} color="#fff" />
               
               </View>
               
               <Text style={{color:'#fff',fontSize:20, alignSelf:'center', marginTop: 5, marginBottom:20}}>{this.props.username}</Text>
               <View style ={{  paddingVertical:20, flexDirection:'row', justifyContent:'space-between'}}>
                   <Text style={{ alignSelf:'center', color:'#fff'}}> Name: </Text>
                    <TextInput
                    clear
                    value={this.props.name}
                    placeholder="write your name ..."
                    placeholderTextColor={'#fff'}
                    style={{ color:'#fff', padding:10 , width: 150, borderRadius:12, justifyContent:'center', alignItems:'center', borderColor:'red',borderBottomWidth:2}}
                        last= 'true'
                    //   type='text'
                    maxLength= {30}
                    onChangeText={this.onNameChange.bind(this)}
                    //   onFocus ={() => this.setState({value : 1 })}
                    />
                    <DropDownPicker
                      style={{width:100}}
                    open={this.state.openS} 
                    labelStyle={{
                        fontWeight: "bold"
                      }}
                      theme="DARK"
                      dropDownContainerStyle={{
                        width:150
                      }}
                    value={this.state.value}
                    placeholder={this.state.placeholderS}
                    loading={true}
                    listMode='SCROLLVIEW'
                    items={[
                        {label: '-', value: 'Nothing'},
                        {label: 'Female', value: 'Female'},
                        {label: 'Male', value: 'Male'},
                      ]}
                    setOpen={() => this.setOpenSex()}
                    onSelectItem={(item) => {
                        this.onSexChange(item)
                      }}
                    // setValue={this.setValue()}
                    // setItems={(value)=> console.log('iteeem',value)}
                    activityIndicatorColor="red"
                    activityIndicatorSize={30}
                />
               </View>
               <View style={{padding:10, }}>
                
               </View>
               <View style={{padding:10, }}>
                 <Text style={{ color:'#fff', marginBottom:10}}> I am Interested in : </Text>
                 <View 
                  style={{
                    height:ITEM_SIZE*0.2, 
                    width:ITEM_SIZE*0.9, 
                    borderColor:'red', 
                    borderWidth:1,
                    borderRadius:20,
                    marginBottom: 10
                  }}
                  >
                    <Text style={{color:'#fff', margin: 10,}}>
                      {this.props.genre}
                    </Text>
                  </View>
                  
                  
                <DropDownPicker
                style={{width:300,marginTop:10}}
                    open={this.state.openG} 
                    labelStyle={{
                        fontWeight: "bold"
                      }}
                      theme="DARK"
                      dropDownContainerStyle={{
                        width:300
                      }}
                    value={this.state.value}
                    // multiple={true}
                    // max={20}
                    // min={0}
                    placeholder={this.state.placeholderG}
                    loading={true}
                    listMode='SCROLLVIEW'
                    items={[
                        {label: 'Fiction', value: 'Fiction'},
                        {label: 'Action', value: 'Action'},
                        {label: 'Romance', value: 'Romance'},
                        {label: 'Science', value: 'Science'},
                        {label: 'Dystopian', value: 'Dystopian'},
                        {label: 'Adventure', value: 'Adventure'},
                        {label: 'Horror', value: 'Horror'},
                        {label: 'Mystery', value: 'Mystery'},
                        {label: 'Thriller', value: 'Thriller'},
                        {label: 'Suspense', value: 'Suspense'},
                        {label: 'Historical', value: 'Historical'},
                        {label: 'Women’s Fiction', value: 'Women’s Fiction'},
                        {label: 'LGBTQ+', value: 'LGBTQ+'},
                        {label: 'Contemporary Fiction', value: 'Contemporary Fiction'},
                        {label: 'Literary Fiction', value: 'Literary Fiction'},
                        {label: 'Magical Realism', value: 'Magical Realism'},
                        {label: 'Graphic Novel', value: 'Graphic Novel'},
                        {label: 'Short Story', value: 'Short Story'},
                        {label: 'Young Adult', value: 'Young Adult'},
                        {label: 'New Adult ', value: 'New Adult '},
                        {label: 'Children’s', value: 'Children’s'},
                        {label: 'Biography', value: 'Biography'},
                        {label: 'Art', value: 'Art'},
                        {label: 'Travel', value: 'Travel'},
                        {label: 'True Crime', value: 'True Crime'},
                      ]}
                    setOpen={() => this.setOpenGenre()}
                    onSelectItem={(item) => {
                        this.onGenreChange(item)
                        // console.log(item)
                      }}
                    // setValue={this.setValue()}
                    // setItems={(value)=> console.log('iteeem',value)}
                    activityIndicatorColor="red"
                    activityIndicatorSize={30}
                />
               </View>
                                                      
                    
               
               
           </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      margin: 10,
      marginTop: 30,
      alignItems: "center",
      padding: 30,
    },
  };


const mapStateToProps = (state) => {
    console.log('state',state)
    const { email, password, error } = state.auth;
    const { genre, name, username } = state.user;

    return { email, password, error, genre, name, username };
};

export default connect(mapStateToProps, 
    {nameChanged, usernameChanged, sexChanged, addGenre}
    )(ProfileForm);
