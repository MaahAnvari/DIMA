import React, { Component, useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { sexChanged, saveChanges, emailChanged, passwordChanged, createUser,signIn, confirmpasswordChanged, nameChanged, resetFree, getFreeBooks, searchBook } from '../actions';
import auth from '@react-native-firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';
import ProfileButton from "./ProfileButton";
import Feather from 'react-native-vector-icons/Feather';
  

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          openS: false,
          placeholderS:'Sex',
        };
    
        // this.setValue = this.setValue.bind(this);
      }

      renderError() {
          if (this.props.error) {
              return (
                  <View style={{ flexDirection:'row', justifyContent:'center', alignItems: 'center',padding: 20}}>
                       <Feather name="alert-triangle" style={{ alignSelf:'flex-end' }} size={25} color="yellow" />
                      <Text style={{color:'yellow', paddingLeft: 20}} >
                          {this.props.error} !!!
                      </Text>
                  </View>
              );
          }
      }
    onUsernameChange(text) {
        this.props.emailChanged(text); 
    }

    onNameChange(text) {
        this.props.nameChanged(text); 
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onConfirmPasswordChange(text) {
        this.props.confirmpasswordChanged(text);
    }
    onSexChange(item) {
        console.log(item)
        this.setState({
            placeholderS: item.label
        })
        this.props.sexChanged(item.value);
    }
    onSubButtonPress() {
        console.log('on submit preeeee:', this.props.error);
        this.props.createUser({name: this.props.name, email:this.props.email, sex: this.props.sex, password: this.props.password, cpassword: this.props.cpassword})
        if ( this.props.error == '' ){    

        this.props.resetFree();
        this.props.getFreeBooks({media: 'ebook',term: 'heart of darkness'});
        this.props.getFreeBooks({media: 'ebook',term: 'grimms-fairy-tales'});
        this.props.getFreeBooks({media: 'ebook',term: 'robinson-crusoe'});
        this.props.getFreeBooks({media: 'ebook',term: 'the-great-gatsby'});
        this.props.getFreeBooks({media: 'ebook',term: 'great-expectations'});
        this.props.getFreeBooks({media: 'ebook',term: 'a-christmas-carol'});
        this.props.getFreeBooks({media: 'ebook',term: 'frankenstein'});
        this.props.getFreeBooks({media: 'ebook',term: 'jane-eyre'});
        this.props.getFreeBooks({media: 'ebook',term: 'anna-karenina'});
        this.props.getFreeBooks({media: 'ebook',term: 'tender-is-the-night'});
        this.props.getFreeBooks({media: 'ebook',term: 'pride-and-prejudice'});
        this.props.getFreeBooks({media: 'ebook',term: 'Treasure-Island'});
    
        
        this.props.searchBook({media: 'ebook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
        this.props.searchBook({media: 'ebook', attribute:'', term:'top10', country:'', sort:''});
        this.props.searchBook({media: 'ebook', attribute:'', term:'italy', country:'', sort:''});  
        this.props.searchBook({media: 'ebook', attribute:'', term:'2022', country:'', sort:''});  

        this.props.searchBook({media: 'audiobook', entity:'', attribute:'genreIndex', country:'ca', term: 'action', sort:''});
        this.props.searchBook({media: 'audiobook', attribute:'', term:'top10', country:'', sort:''});
        this.props.searchBook({media: 'audiobook', attribute:'', term:'free', country:'', sort:'decending'});  

        // Actions.homePage();
        }
    }

    setOpenSex() {
        this.setState({
          openS: !this.state.openS
        });
        console.log('opeeeen',this.state.openS)
      } 

    render() {

        return (
           <View style={{backgroundColor: '#001120', height:'100%',  justifyContent:'space-around'}}>
               <View>
               <View style ={{ paddingHorizontal:50, paddingVertical:20, flexDirection:'row'}}>
                        <TextInput
                        clear
                        value={this.props.name}
                        placeholder="name ..."
                        placeholderTextColor={'#fff'}
                        style={{ padding:10,borderWidth:1, width: ITEM_SIZE*0.95,  fontSize:20, borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(178,33,33,0.5)',borderColor:'#000',  shadowColor: '#3D1214',shadowOpacity: 0.26,shadowOffset: { width: 10, height: 5},shadowRadius: 10,elevation: 20,}}
                        last= 'true'
                        type='text'
                        maxLength= {30}
                        onChangeText={this.onNameChange.bind(this)}
                        //   onFocus ={() => this.setState({value : 1 })}
                        />
                        <DropDownPicker
                            style={{width:ITEM_SIZE*0.5}}
                            open={this.state.openS} 
                            labelStyle={{fontWeight: "bold"}}
                            theme="DARK"
                            dropDownContainerStyle={{ width:ITEM_SIZE*0.5 }}
                            value={this.props.sex}
                            placeholder={this.props.sex}
                            loading={true}
                            listMode='SCROLLVIEW'
                            items={[
                                {label: '-', value: 'Nothing'},
                                {label: 'Female', value: 'Female'},
                                {label: 'Male', value: 'Male'},
                                ]}
                            setOpen={() => this.setOpenSex()}
                            onSelectItem={(item) => {this.onSexChange(item)  }}
                            // setValue={this.setValue()}
                            // setItems={(value)=> console.log('iteeem',value)}
                            activityIndicatorColor="red"
                            activityIndicatorSize={30}
                        />
                </View>
                <View style ={{ paddingHorizontal:50, paddingVertical:20}}>
                        <TextInput
                        clear
                        value={this.props.email}
                        placeholder="example@mail.com"
                        placeholderTextColor={'#fff'}
                        style={{
                            padding:10, 
                            borderWidth:1, 
                            width: ITEM_SIZE*1.45, 
                            fontSize:20,
                            borderRadius:12, 
                            justifyContent:'center', alignItems:'center',
                            backgroundColor:'rgba(178,33,33,0.5)',
                            borderColor:'#000', 
                            shadowColor: '#3D1214',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 10, height: 5},
                            shadowRadius: 10,
                            elevation: 20,}}
                        last= 'true'
                        //   type='text'
                        maxLength= {30}
                        onChangeText={this.onUsernameChange.bind(this)}
                        //   onFocus ={() => this.setState({value : 1 })}
                        />
                </View>
                
                <View style ={{ paddingHorizontal:50, paddingVertical:1}}>
                        <TextInput
                        clear
                        value={this.props.password}
                        placeholder="password ..."
                        
                        placeholderTextColor={'#fff'}
                        style=
                        {{
                            padding:10, 
                            borderWidth:1, 
                            width: ITEM_SIZE*1.45, 
                            borderRadius:12, 
                            fontSize:20,
                            justifyContent:'center', alignItems:'center',
                            backgroundColor:'rgba(178,33,33,0.5)',
                            borderColor:'#000', 
                            shadowColor: '#3D1214',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 10, height: 5},
                            shadowRadius: 10,
                            elevation: 20, }}
                        // {{}}
                        last= 'true'
                        //   type='text'
                        maxLength= {30}
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        //   onFocus ={() => this.setState({value : 1 })}
                        />
                </View>
                <View style ={{ paddingHorizontal:50, paddingVertical:1}}>
                        <TextInput
                        clear
                        value={this.props.cpassword}
                        placeholder="confirm password ...."
                        
                        placeholderTextColor={'#fff'}
                        style=
                        {{
                            padding:10, 
                            borderWidth:1, 
                            width: ITEM_SIZE*1.45, 
                            fontSize:20,
                            borderRadius:12, 
                            justifyContent:'center', alignItems:'center',
                            backgroundColor:'rgba(178,33,33,0.5)',
                            borderColor:'#000', 
                            shadowColor: '#3D1214',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 10, height: 5},
                            shadowRadius: 10,
                            elevation: 20, }}
                        // {{}}
                        last= 'true'
                        //   type='text'
                        maxLength= {30}
                        secureTextEntry={true}
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                        //   onFocus ={() => this.setState({value : 1 })}
                        />
                </View>
                
                <View>
                  {this.renderError()}
                </View>
                <View style={{ paddingTop:40, paddingRight:20, alignItems:'flex-end'}}>
                        <ProfileButton 
                            style={{backgroundColor:'rgba(178,33,33,0.9)',
                                borderColor:'#000', 
                                borderRadius:15, 
                                shadowColor: '#3D1214',
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 10, height: 5},
                                shadowRadius: 10,
                                elevation: 20, }} 
                            Name='Submite'
                            enable = {this.props.name && this.props.email && this.props.password && this.props.cpassword ? false : true}
                            onPress={this.onSubButtonPress.bind(this)} />
                        {/* Actions.homePage() */}
                </View>
            </View>
            <View style={{ alignItems:'flex-end', alignSelf:'center'}}>
                   <TouchableOpacity onPress={() => Actions.login()}>
                       <Text style={{ fontFamily:'Ornalia',fontSize:30,color: '#A0131A', borderBottomColor:'#A0131A', borderBottomWidth:1}}> Login</Text>
                   </TouchableOpacity>
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
    console.log('state',state.auth)
    const { email, password, error, cpassword, sex, name } = state.auth;


    return { email, password, error, cpassword, name, sex };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged, createUser,signIn, confirmpasswordChanged, nameChanged, saveChanges, sexChanged, resetFree, getFreeBooks, searchBook}
    )(SignUpForm);
