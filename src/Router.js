import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import CustomNavBar from './components/CustomNavBar';
import SearchPage from './components/SearchPage';
import FavoritePage from './components/FavoritePage';
import AboutPage from './components/AboutPage';
import BookPage from './components/BookPage';
import SignUpForm from './components/SignUpForm';

import {COLORS} from '../constants';
import TabIcon from './components/TabIcon';
import DownloadPage from './components/DownloadPage';
import StartupPage from './components/StartupPage';
import ABookPage from './components/ABookPage';
import AudioPlayView from './components/AudioPlayView';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" navigationBarStyle={{backgroundColor: COLORS.primary}}>
        <Scene
          key="startup"
          component={StartupPage}
          title="PONDER "
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          hideNavBar
          // navBar={CustomNavBar}
          initial
        />
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login "
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          // hideNavBar
          // navBar={CustomNavBar}
          //  initial
        />
        <Scene
          key="aboutPage"
          component={AboutPage}
          title="About Us"
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          // hideNavBar
          // navBar={CustomNavBar}
          //  initial
        />
        <Scene
          key="downloadPage"
          component={DownloadPage}
          title="Start Downloading ..."
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          hideNavBar
          // navBar={CustomNavBar}
          //  initial
        />
        <Scene
          key="audioPage"
          component={AudioPlayView}
          // title="Start Downloading ..."
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          hideNavBar
          // navBar={CustomNavBar}
          //  initial
        />
        <Scene
          key="signup"
          component={SignUpForm}
          title="Please Register "
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          // hideNavBar
          // navBar={CustomNavBar}
          //  initial
        />
        <Scene
          key="searchPage"
          title="Search"
          iconName="search"
          icon={TabIcon}
          hideNavBar={true}
          component={SearchPage}
          //initial
        />
        <Scene
          // initial
          key="tabBar"
          tabs
          hideNavBar={true}
          tabBarStyle={styles.tabBar}
          default="Main">
          <Scene
            key="homePage"
            title="PONDER"
            titleStyle={{
              alignSelf: 'center',
              color: '#fff',
              fontFamily: 'Abduco',
              fontSize: ITEM_SIZE * 0.1,
            }}
            iconName="home"
            icon={TabIcon}
            // hideNavBar={true}
            component={HomePage}

            // initial
          />
          <Scene
            key="favoritePage"
            title="Favorite"
            titleStyle={{
              alignSelf: 'center',
              color: '#fff',
              fontFamily: 'Abduco',
              fontSize: ITEM_SIZE * 0.1,
            }}
            iconName="heart"
            icon={TabIcon}
            hideNavBar={true}
            component={FavoritePage}

            //initial
          />
          {/* <Scene
                        key="searchPage"
                        title="Search"
                        iconName="search"
                        icon={TabIcon}
                        hideNavBar={true}
                        component={SearchPage}

                        //initial
                    /> */}
          {/* <Scene
                        key="favoritePage"
                        title="Favorite"
                        iconName="heart"
                        icon={TabIcon}
                        hideNavBar={true}
                        component={SearchPage}

                        //initial
                    /> */}
          <Scene
            key="profilePage"
            title="Profile"
            titleStyle={{
              alignSelf: 'center',
              color: '#fff',
              fontFamily: 'Abduco',
              fontSize: ITEM_SIZE * 0.1,
            }}
            iconName="user"
            icon={TabIcon}
            // hideNavBar={true}
            component={ProfileForm}

            //initial
          />
          {/* <Scene
                        key="searchPage"
                        title="Profile"
                        titleStyle={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontFamily: 'Abduco',fontSize: ITEM_SIZE*0.1
                        }}
                        iconName="heart"
                        icon={TabIcon}
                        // hideNavBar={true}
                        component={ProfileForm}

                        //initial
                    /> */}
        </Scene>

        <Scene
          key="bookPage"
          component={BookPage}
          title="Book"
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          renderBackButton={() => BackButton}
          hideNavBar
          onLeft={() => Actions.pop()}
        />
        <Scene
          key="abookPage"
          component={ABookPage}
          title="ABook"
          titleStyle={{
            alignSelf: 'center',
            color: '#fff',
            fontFamily: 'Abduco',
            fontSize: ITEM_SIZE * 0.1,
          }}
          renderBackButton={() => BackButton}
          hideNavBar
          onLeft={() => Actions.pop()}
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
