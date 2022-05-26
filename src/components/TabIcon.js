import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Icon, Icons, COLORS } from '../../constants';

const TabIcon = props => {
  const item = props;
  const focused = props.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0.8 }, 1: { scale: 0.9 } });
      textViewRef.current.animate({ 0: { scale: 0.8 }, 1: { scale: 0.9 } });
    } else {
      viewRef.current.animate({ 0: { scale: 0.9 }, 1: { scale: 0.8 } });
      textViewRef.current.animate({ 0: { scale: 0.9 }, 1: { scale: 0.8 } });
    }
  }, [focused]);

  return (
    <View style={[styles.container, { flex: focused ? 0.9 : 0.8 }]}>
      <Animatable.View
        ref={viewRef}
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: COLORS.button, borderRadius: 15 },
        ]}
      />
      <View
        style={[
          styles.btn,
          { backgroundColor: focused ? null : COLORS.secondary },
        ]}>
        <Icon type={Icons.Feather} name={item.iconName} color={COLORS.white} />
        <Animatable.View ref={textViewRef}>
          {focused && (
            <Text
              style={{
                color: COLORS.white,
                paddingHorizontal: 8,
              }}>
              {item.title}
            </Text>
          )}
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 15,
  },
});

export default TabIcon;
