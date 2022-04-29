import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="root"
        navigationBarStyle={{
          backgroundColor: '#001120',
          fontFamily: 'Roboto',
        }}>
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login "
          titleStyle={{ paddingLeft: 110, color: '#fff' }}
          // initial
        />
        <Scene
          key="homePage"
          component={HomePage}
          title="App Name "
          titleStyle={{ paddingLeft: 120, color: '#fff' }}
          // key="deviceList"
          // component={DeviceList}
          // title="Active Device"
          // rightTitle="Add"
          // onRight={() => Actions.createDevice()}
          // titleStyle={{ paddingLeft: 75 }}

          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
