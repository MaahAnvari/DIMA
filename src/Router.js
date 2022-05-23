import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import CustomNavBar from './components/CustomNavBar';
import BookPage from './components/BookPage';
import SignUpForm from './components/SignUpForm';

const RouterComponent = () => {
<<<<<<< HEAD
  return (
    <Router>
      <Scene key="root" navigationBarStyle={{ backgroundColor: '#001120' }}>
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login "
          titleStyle={{ paddingLeft: 110, color: '#fff' }}
          // hideNavBar
          navBar={CustomNavBar}
          //initial
        />
        <Scene
          key="homePage"
          component={HomePage}
          title="Ponder"
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

          initial
        />

        <Scene
          key="profile"
          component={ProfileForm}
          title="Profile "
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
=======
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
>>>>>>> b4f36e2f084692d4fe5e9c03a8cbfa8161e93285
};

export default RouterComponent;
