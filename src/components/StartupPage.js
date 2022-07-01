import React, { Component, useState, useEffect } from 'react';
import { View, Text, Modal, Alert, StyleSheet, colors } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser,signIn, saveChanges, resetFree, getFreeBooks, searchBook } from '../actions';
import ProfileButton from "./ProfileButton";
import Feather from 'react-native-vector-icons/Feather';
// import Video from 'react-native-video';
import video from '../../assets/Video/Startupvideo.mp4';
class StartupPage extends Component {

    constructor() {
        super()
        this.state = {
          page: "HomeScreen",
          visible : false,
          is_device: false,
        }
      }

      videoBuffer = isBuffer => {
        console.log(isBuffer);
        //here you could set the isBuffer value to the state and then do something with it
        //such as show a loading icon
      };
    onSubButtonPress() {
    
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

        return (
            <View>
                {/* <Video  
                    source={video}                  // the video file
                    paused={false}                  // make it start    
                    style={{ width: "100%", height: "50%" }}  // any style you want
                    repeat={true}                   // make it a loop
                /> */}
            </View>
        //     <Video
        //     //for playing local videos
        //     //    source={
        //     //     this.state.showLocal ?
        //     //     require('../basic/broadchurch.mp4') :
        //     //     {
        //     //       uri:  "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
        //     //     }
        //     // }
        //     source={  require('../../assets/Video/Startupvideo.mp4')} // Can be a URL or a local file.
        //     // ref={ref => {
        //     //   this.player = ref;
        //     // }} 
        //     // Store reference
        //     //for showing a static image
        //     //poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
        //     // audioOnly={true} //for only audio playing
        //     controls={true}
        //     onBuffer={this.onBuffer} // Callback when remote video is buffering
        //     resizeMode={'stretch'}
        //     // onError={this.videoError} // Callback when video cannot be loaded
        //     // onEnd={() => {
        //     //   this.player.seek(0);
        //     // }}
        //     // onError={err => {
        //     //   Alert.alert(JSON.stringify(err));
        //     // }}
        //     style={styles.backgroundVideo}
        //   />

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: 'black',
      // alignContent: 'center',
      // justifyContent: 'center',
    },
    mainView: {
      flex: 1,
      // height: moderateScale(300),
      width: '100%',
    },
  });

const mapStateToProps = (state) => {
    console.log('state auth: ',state.auth)
    const { email, password, error } = state.auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {}
    )(StartupPage);
