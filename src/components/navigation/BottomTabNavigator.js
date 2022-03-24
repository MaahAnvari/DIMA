import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react';

import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { BottomTabParamList, HomeParamList, ProfileParamList } from './types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator(props) {
  return (
    <BottomTab.Navigator intitialRouteName="Home">
      <BottomTab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => <AntDesign name="home" size={24} />
      }}
      />
      <BottomTab.Screen
      name="Downloads"
      component={DownloadsNavigator}
      options={{
        tabBarIcon: () => <AntDesign name="download" size={24} />
      }}
      />
      <BottomTab.Screen
      name="Like"
      component={LikeNavigator}
      options={{
        tabBarIcon: () => <AntDesign name="hearto" size={24} />
      }}
      />
      <BottomTab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: () => <AntDesign name="profile" size={24} />
      }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default BottomTabNavigator;