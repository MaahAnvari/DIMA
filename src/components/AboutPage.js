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

import { Icon, Icons, COLORS, SIZES, FONTS } from '../../constants';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const AboutPage = () => {
  return (
    <View style={styles.root}>
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
            width: ITEM_SIZE,
            height: 'auto',
          }}
        />
      </View>

      <View style={{ flex: 1.8, alignItems: 'center' }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>Developed by:</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>
          - Farimah Anvari
        </Text>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>
          - Tommaso Pozzi
        </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={{ ...FONTS.body4, color: "#777777", paddingRight: 10 }}>v. 1.0.0</Text>
      </View>
    </View>
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
