import React from 'react';
import { View, Image, Text } from 'react-native';

const AboutPage = () => {
  const { width, height } = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          height: ITEM_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Image
          style={{ height: ITEM_SIZE, width: '110%' }}
          source={require('../../assets/images/logo.png')}
        />
      </View>

      <Text>About Screen</Text>
    </View>
  );
};

export default AboutPage;
