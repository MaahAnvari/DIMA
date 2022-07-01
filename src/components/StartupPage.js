import React, { Component } from 'react';
import { View, Text,StyleSheet, colors, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class StartupPage extends Component {

    constructor() {
        super()
        this.state = {
          page: "HomeScreen",
          visible : false,
          is_device: false,
        }
      }



    
    render() {

        return (
          // <View style={{alignContent:'center',}}>
          <ImageBackground
            style ={{width: "100%", height:"100%", justifyContent:'flex-end', alignItems:'center'}}
            source={require('../../assets/Video/StartupVideo.gif')}
          >
            <TouchableOpacity
          style={{height:'25%', width: '100%', backgroundColor:'#A0131A', borderRadius:20, alignItems:'center', justifyContent:'center',}}
            onPress={() => {
              Actions.login();
            }}>
              <Text style={{ color:'white',justifyContent:'center', alignSelf:'center', fontFamily:'Ornalia', fontSize:20, marginHorizontal:20}}> Welcome To Ponder </Text>
          </TouchableOpacity>
          </ImageBackground>
          
        // </View>
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
