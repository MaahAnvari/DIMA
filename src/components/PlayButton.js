import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Icons, FONTS, COLORS, SIZES, images } from '../../constants';

export default function PlayButton(props) {
  return (
    <TouchableOpacity
      style={styles.playButtonContainer}
      onPress={props.onPress}>
      <Icon
        type={Icons.FontAwesome}
        name={props.state}
        size={25}
        color="#3D425C"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playButtonContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5D3F6A',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});
