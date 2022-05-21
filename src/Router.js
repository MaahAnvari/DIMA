import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import CustomNavBar from './components/CustomNavBar'
import BookPage from './components/BookPage';
import SignUpForm from './components/SignUpForm';

const RouterComponent = () => {
    return (
        <Router>
             <Scene key="root"  navigationBarStyle={{backgroundColor: '#001120'}}>
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
                    key="signup" 
                    component={SignUpForm} 
                    title="Please Register " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco'}}
                    // hideNavBar
                    // navBar={CustomNavBar}
                    //  initial 
                />
                <Scene
                    key="homePage" 
                    component={HomePage} 
                    title="PONDER" 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily: 'Abduco', fontSize: 30}}

                />
                <Scene
                    key="profile" 
                    component={ProfileForm} 
                    title="Profile " 
                    titleStyle={{ alignSelf:'center', color:'#fff', fontFamily:'Abduco' }}
                />
                <Scene
                    key="bookPage" 
                    component={BookPage} 
                    title="Book " 
                    titleStyle={{ alignSelf:'center',color:'#fff',fontFamily:'Abduco' }}
                    hideNavBar={true}
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    // rightTitle="Add"
                    // leftTile='back'
                    // onRight={() => Actions.createDevice()}
                    // onLeft={() => Actions.pop()}
                    // titleStyle={{ paddingLeft: 75 }}
                    
                    // initial
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
