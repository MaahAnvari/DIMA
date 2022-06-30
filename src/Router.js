import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import CustomNavBar from './components/CustomNavBar';
import SearchPage from './components/SearchPage';
import FavoritePage from './components/FavoritePage';
import AboutPage from './components/AboutPage';
import BookPage from './components/BookPage';
import SignUpForm from './components/SignUpForm';

import { COLORS } from '../constants';
import TabIcon from './components/TabIcon';
import DownloadPage from './components/DownloadPage';
import StartupPage from './components/StartupPage';

const RouterComponent = () => {
    return (
        <Router>
             <Scene key="root"  navigationBarStyle={{backgroundColor: '#001120'}}>
                <Scene
                    key="startup" 
                    component={StartupPage} 
                    title="PONDER " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
                    // hideNavBar
                    // navBar={CustomNavBar}
                    //  initial 
                />
                <Scene
                    key="login" 
                    component={LoginForm} 
                    title="Please Login " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
                    // hideNavBar
                    // navBar={CustomNavBar}
                     initial 
                />
                <Scene
                    key="aboutPage" 
                    component={AboutPage} 
                    title="About Us" 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
                    // hideNavBar
                    // navBar={CustomNavBar}
                    //  initial 
                />
                <Scene
                    key="downloadPage" 
                    component={DownloadPage} 
                    title="Start Downloading " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
                    // hideNavBar
                    // navBar={CustomNavBar}
                    //  initial 
                />
                <Scene
                    key="signup" 
                    component={SignUpForm} 
                    title="Please Register " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
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
                        fontSize: 30,
                        }}
                        iconName="home"
                        icon={TabIcon}
                        //hideNavBar={true}
                        component={HomePage}

                        // initial
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
                    <Scene
                        key="favoritePage"
                        title="Favorite"
                        iconName="heart"
                        icon={TabIcon}
                        hideNavBar={true}
                        component={FavoritePage}

                        //initial
                    />
                    <Scene
                        key="profilePage"
                        title="Profile"
                        titleStyle={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontFamily: 'Abduco',
                        }}
                        iconName="user"
                        icon={TabIcon}
                        hideNavBar={true}
                        component={ProfileForm}

                        //initial
                    />
                    </Scene>
                    {/* <Scene
                    key="aboutPage"
                    component={AboutPage}
                    title="ABOUT"
                    titleStyle={{ paddingLeft: 120, color: '#fff', fontFamily: 'Abduco' }}
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    // rightTitle="Add"
                    // onRight={() => Actions.createDevice()}
                    // titleStyle={{ paddingLeft: 75 }}

                    //initial
                    /> */}
                    <Scene
                    key="bookPage"
                    component={BookPage}
                    title="Book"
                    titleStyle={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontFamily: 'Abduco',
                    }}
                    renderBackButton={() => BackButton}
                    //hideNavBar={true}
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    // rightTitle="Add"
                    // leftTile='back'
                    // onRight={() => Actions.createDevice()}
                    onLeft={() => Actions.pop()}
                    // titleStyle={{ paddingLeft: 75 }}

                    // initial
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
