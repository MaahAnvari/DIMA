import React, { Component, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser,signIn, saveChanges, resetFree, getFreeBooks, searchBook } from '../actions';
import ProfileButton from "./ProfileButton";

class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
          page: "HomeScreen",
        }
      }


      componentWillUnmount(){ 
        console.log('willllll');
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
    
      }
    onUsernameChange(text) {
        this.props.emailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onSubButtonPress() {
        // this.props.saveChanges({id:'', name:'', sex:''})
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
        this.props.signIn({email:this.props.email, password: this.props.password})
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


    renderRegisterButton() {
        // if (this.props.loading) {
        //     return <Spinner size="large" />;
        // }
        // return (
        //     <Button onPress={this.onRegisterButtonPress.bind(this)} >
        //         Register
        //     </Button>
        // );
    }

    render() {
        // const [initializing, setInitializing] = useState(true);
        // const [user, setUser] = useState();
        // function onAuthStateChanged(user) {
        //     setUser(user);
        //     if (initializing) setInitializing(false);
        // }
        
        // useEffect(() => {
        //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        //     return subscriber; // unsubscribe on unmount
        // }, []);

        return (
           <View style={{backgroundColor: '#001120', height:'100%', justifyContent:'space-around'}}>
              {/* <CustomDrawer></CustomDrawer> */}


              <View>
                <View style ={{ paddingHorizontal:50, paddingVertical:20}}>
                        <TextInput
                        clear
                        value={this.props.email}
                        placeholder="example@mail.com"
                        placeholderTextColor={'#fff'}
                        style={{
                            padding:10, 
                            borderWidth:1, 
                            width: 300, 
                            fontFamily:'Ornalia',
                            fontSize:20,
                            borderRadius:12, 
                            justifyContent:'center', alignItems:'center',
                            backgroundColor:'#A0131A',
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
                        placeholder="*********"
                        
                        placeholderTextColor={'#fff'}
                        style=
                        {{
                            padding:10, 
                            borderWidth:1, 
                            width: 300, 
                            fontFamily:'Ornalia',
                            fontSize:20,
                            borderRadius:12, 
                            justifyContent:'center', alignItems:'center',
                            backgroundColor:'#A0131A',
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
                <View style={{ paddingTop:40, paddingRight:20, alignItems:'flex-end'}}>
                        <ProfileButton 
                            style={{backgroundColor:'#EE1520',
                                borderColor:'#000', 
                                borderRadius:15, 
                                shadowColor: '#3D1214',
                                shadowOpacity: 0.26,
                                shadowOffset: { width: 10, height: 5},
                                shadowRadius: 10,
                                elevation: 20, }} 
                            enable = {this.props.email && this.props.password ? false : true}
                            
                            Name='Submite'
                            onPress={this.onSubButtonPress.bind(this)} />
                </View>
            
               </View>
               <View style={{ alignItems:'flex-end', alignSelf:'center'}}>
                   <TouchableOpacity onPress={() => Actions.signup()}>
                       <Text style={{ fontFamily:'Ornalia', fontSize:30, color: '#A0131A', borderBottomColor:'#A0131A', borderBottomWidth:1}}> Register</Text>
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
    const { email, password, error } = state.auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged, createUser,signIn, saveChanges, resetFree, getFreeBooks, searchBook}
    )(LoginForm);
