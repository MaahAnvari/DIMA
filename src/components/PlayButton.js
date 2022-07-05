import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Icons, FONTS, COLORS, SIZES, images } from '../../constants';

export default function PlayButton(props) {
  return (
    <TouchableOpacity
      style={styles.playButtonContainer}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Icon
        type={Icons.FontAwesome}
        name={props.state}
        size={20}
        color="#3D425C"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playButtonContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 5,
    width: 70,
    height: 70,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#5D3F6A',
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
});
