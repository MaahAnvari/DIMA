import React from 'react';
import { Component, Text, View, StyleSheet } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';

import LoginForm from './components/LoginForm';
import CustomNavBar from './components/CustomNavBar';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import FavoritePage from './components/FavoritePage';
import ProfileForm from './components/ProfileForm';
import BookPage from './components/BookPage';

const RouterComponent = () => {
  function HomeTab(props) {
    let textColor = props.focused ? '#333333' : '#999999';
    let borderColor = 'red';
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopColor: borderColor,
          borderTopWidth: 4,
          padding: 5,
        }}>
        {props.focused ? (
          <Ionicons
            name="home-outline"
            size={25}
            style={{ color: borderColor }}
          />
        ) : (
          <Ionicons
            name="home-sharp"
            size={25}
            style={{ color: borderColor }}
          />
        )}
        <Text style={{ color: textColor }}>Home</Text>
      </View>
    );
  }

  //Create a dedicated class that will manage the tabBar icon
  class TabIcon extends React.Component {
    render() {
      var color = '#FFFFFF';
      var backgroundColor = this.props.selected ? '#B90020' : '#301c2a';

      return (
        <View
          style={{
            flex: 1,
            backgroundColor: backgroundColor,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            style={{ color: color }}
            name={this.props.iconName || 'circle'}
            size={25}
          />
          {this.props.selected ? (
            <Text style={{ color: color, fontSize: 14 }}>
              {this.props.title}
            </Text>
          ) : (
            <View />
          )}
        </View>
      );
    }
  }

  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" headerMode={'none'}>
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            titleStyle={{ paddingLeft: 110, color: '#fff' }}
            // hideNavBar
            navBar={CustomNavBar}
            //initial
          />
        </Scene>
        <Scene
          initial
          key="tabBar"
          tabs
          tabBarStyle={styles.tabBar}
          default="Main">
          <Scene
            key="home"
            title="Home"
            iconName="home"
            icon={TabIcon}
            hideNavBar={true}
            component={HomePage}

            // titleStyle={{ paddingLeft: 120, color: '#fff' }}
            // key="deviceList"
            // component={DeviceList}
            // title="Active Device"
            // rightTitle="Add"
            // onRight={() => Actions.createDevice()}
            // titleStyle={{ paddingLeft: 75 }}
            //initial
          />
          <Scene
            key="search"
            title="Search"
            iconName="search"
            icon={TabIcon}
            hideNavBar={true}
            component={SearchPage}

            //titleStyle={{ paddingLeft: 120, color: '#fff' }}
            // key="deviceList"
            // component={DeviceList}
            // title="Active Device"
            // rightTitle="Add"
            // onRight={() => Actions.createDevice()}
            // titleStyle={{ paddingLeft: 75 }}
            //initial
          />
          <Scene
            key="favorite"
            title="Favorite"
            iconName="heart"
            icon={TabIcon}
            hideNavBar={true}
            component={FavoritePage}

            // titleStyle={{ paddingLeft: 120, color: '#fff' }}
            // key="deviceList"
            // component={DeviceList}
            // title="Active Device"
            // rightTitle="Add"
            // onRight={() => Actions.createDevice()}
            // titleStyle={{ paddingLeft: 75 }}
            //initial
          />
          <Scene
            key="profile"
            title="Profile"
            iconName="user"
            icon={TabIcon}
            hideNavBar={true}
            component={ProfileForm}

            // titleStyle={{ paddingLeft: 120, color: '#fff' }}
            // key="deviceList"
            // component={DeviceList}
            // title="Active Device"
            // rightTitle="Add"
            // onRight={() => Actions.createDevice()}
            // titleStyle={{ paddingLeft: 75 }}
            //initial
          />
        </Scene>
        <Scene
          key="bookPage"
          component={BookPage}
          title="BOOK"
          titleStyle={{ paddingLeft: 120, color: '#fff' }}
          // key="deviceList"
          // component={DeviceList}
          // title="Active Device"
          // rightTitle="Add"
          // onRight={() => Actions.createDevice()}
          // titleStyle={{ paddingLeft: 75 }}

          //initial
        />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});

export default RouterComponent;
