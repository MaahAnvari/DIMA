import React from 'react';
import { StyleSheet } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import CustomNavBar from './components/CustomNavBar';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import FavoritePage from './components/FavoritePage';
import ProfileForm from './components/ProfileForm';
import AboutPage from './components/AboutPage';
import BookPage from './components/BookPage';

import TabIcon from './components/TabIcon';
import { COLORS } from './constants';

const RouterComponent = () => {
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
          key="aboutPage"
          component={AboutPage}
          title="ABOUT"
          titleStyle={{ paddingLeft: 120, color: '#fff' }}
          // key="deviceList"
          // component={DeviceList}
          // title="Active Device"
          // rightTitle="Add"
          // onRight={() => Actions.createDevice()}
          // titleStyle={{ paddingLeft: 75 }}

          //initial
        />
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
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
  },
});

export default RouterComponent;
