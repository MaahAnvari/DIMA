import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import CustomNavBar from './components/CustomNavBar'
import BookPage from './components/BookPage';

const RouterComponent = () => {
    return (
        <Router>
             <Scene key="root"  navigationBarStyle={{backgroundColor: '#001120'}}>
                <Scene
                    key="login" 
                    component={LoginForm} 
                    title="Please Login " 
                    titleStyle={{ paddingLeft: 110, color:'#fff', fontFamily:'Ornalia'}}
                    // hideNavBar
                    navBar={CustomNavBar}
                     initial 
                />
                <Scene
                key="homePage" 
                component={HomePage} 
                title="PONDER" 
                titleStyle={{ alignSelf:'center', color:'#fff', fontFamily: 'Abduco', fontSize: 30}}
                
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    // rightTitle="Add"
                    // onRight={() => Actions.createDevice()}
                    // titleStyle={{ paddingLeft: 75 }}
                    
                    // initial
                />
                <Scene
                key="profile" 
                component={ProfileForm} 
                title="Profile " 
                titleStyle={{ paddingLeft: 120, color:'#fff' }}
                
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    // rightTitle="Add"
                    // onRight={() => Actions.createDevice()}
                    // titleStyle={{ paddingLeft: 75 }}
                    
                    // initial
                />
                <Scene
                key="bookPage" 
                component={BookPage} 
                title="Book " 
                titleStyle={{ color:'#fff' }}
                
                    // key="deviceList"
                    // component={DeviceList}
                    // title="Active Device"
                    rightTitle="Add"
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

export default RouterComponent;
