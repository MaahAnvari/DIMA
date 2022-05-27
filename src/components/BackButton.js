import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Icons, COLORS } from '../../constants';

const BackButton = () => {
  return(
  <TouchableOpacity onPress={() => Actions.pop()}>
    <Icon
      type={Icons.MaterialIcons}
      name={'arrow-back-ios'}
      color={COLORS.white}
    />
  </TouchableOpacity>
  );
};

export default BackButton;
