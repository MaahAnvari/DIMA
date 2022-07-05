import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Icon, Icons, COLORS, SIZES, FONTS } from '../../constants';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const AboutPage = () => {
  return (
    <ScrollView style={{backgroundColor: '#001120', marginTop: 10, paddingHorizontal:20}}>
      <View
        style={{
          height: ITEM_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{
            flex: 1,
            width: ITEM_SIZE*2, 
            height: ITEM_SIZE*2,
            borderRadius:ITEM_SIZE*2,
            paddingHorizontal:10,
          }}
        />
      </View>

      <View style={{ flex: 1.8, alignItems: 'center' }}>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>
        We are students of Politecnico di Milano in computer science and this application is developed for the Design and Implementation of Mobile Application course. The purpose of this application is to display a list of books and information about them based on several categories. There are two main categories for audiobooks and electronic books. Additionally, you may use this application to find and save the books you want to read. Additionally, we have some free books available for you to download and read.
        </Text>
        
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>Developed by:</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{justifyContent:'center', alignItems:'center'}} >

            <Image
            source={require('../../assets/images/Farimah.png')}
            resizeMode="contain"
            style={{
              flex: 1,
              width: ITEM_SIZE*0.5,
              height: ITEM_SIZE*0.5,
            }}
          />
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>
            - Farimah Anvari
          </Text>
            </View>
          <View style={{justifyContent:'center', alignItems:'center'}} >

            <Image
            source={require('../../assets/images/boy.png')}
            resizeMode="contain"
            style={{
              flex: 1,
              width: ITEM_SIZE,
              height: 'auto',
            }}
          />
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>
            - Tommaso Pozzi
          </Text>
            </View>
          </View>
        
        
      </View>

      <View style={styles.bottom}>
        <Text style={{ ...FONTS.body4, color: "#777777", paddingRight: 10 }}>v. 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  bottom: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
});

export default AboutPage;
