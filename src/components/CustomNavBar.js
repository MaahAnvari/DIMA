import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {Actions} from 'react-native-router-flux';
  
  const styles = StyleSheet.create({
    container: {
      height: Platform.OS === 'ios' ? 64 : 54,
      flexDirection: 'row',
      paddingTop: 20,
    },
    navBarItem: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  
  export default class CustomNavBar extends React.Component {
    // constructor(props) {
    //   super(props)
    // }
  
    _renderLeft() {
    //   if (Actions.currentScene === 'customNavBar1') {
    //     return (
    //       <TouchableOpacity
    //         onPress={() => console.log('Hamburger button pressed')}
    //         style={[styles.navBarItem, {paddingLeft: 10}]}>
    //         <Image
    //           style={{width: 30, height: 50}}
    //           resizeMode="contain"
    //           source={{
    //             uri:
    //               'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png',
    //           }}
    //         />
    //       </TouchableOpacity>
    //     );
    //   }
      return (
        <TouchableOpacity
          onPress={Actions.pop}
          style={[styles.navBarItem, {paddingLeft: 10}]}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png'}}
          />
        </TouchableOpacity>
      );
    }
  
    _renderMiddle() {
      return (
        <View style={{color:'#000'}}>
          <Text style={{color:'#fff'}}>{this.props.title}</Text>
        </View>
      );
    }
  
    _renderRight() {
      return (
        <View
          style={[
            styles.navBarItem,
            {flexDirection: 'row-reverse', },
          ]}>
          <TouchableOpacity
            onPress={() => console.log('Share')}
            style={{paddingRight: 10}}>
            <Image
              style={{width: 30, height: 50}}
              resizeMode="contain"
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-512.png',
              }}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => console.log('Search')}
            style={{paddingRight: 10}}>
            <Image
              style={{width: 30, height: 50}}
              resizeMode="contain"
              source={{
                uri:
                  'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png',
              }}
            />
          </TouchableOpacity> */}
        </View>
      );
    }
  
    render() {
      let dynamicStyle = {};
      if (Actions.currentScene === 'customNavBar1') {
        dynamicStyle = {backgroundColor: 'red'};
      } else {
        dynamicStyle = {backgroundColor: '#001120'};
      }
  
      return (
        <View style={[styles.container, dynamicStyle]}>
          {this._renderLeft()}
          {this._renderMiddle()}
          {this._renderRight()}
        </View>
      );
    }
  }