import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View, ViewPropTypes, StyleSheet, Platform } from 'react-native';

const OUTER_STYLES = [
  { key: 'margin', remove: true },
  { key: 'marginHorizontal', remove: true },
  { key: 'marginVertical', remove: true },
  { key: 'marginBottom', remove: true },
  { key: 'marginTop', remove: true },
  { key: 'marginLeft', remove: true },
  { key: 'marginRight', remove: true },
  { key: 'borderRadius', remove: false },
  { key: 'width', remove: false },
  { key: 'height', remove: false },
  { key: 'position', remove: true },
  { key: 'top', remove: true },
  { key: 'left', remove: true },
  { key: 'right', remove: true },
  { key: 'top', remove: true },
  { key: 'bottom', remove: true },
  { key: 'zIndex', remove: true },
  { key: 'flex', remove: true }
]

function Touchable({ style, children, onPress, rippleColor, enablePointerEvents = false }) {
  if (Platform.OS === 'android') {
    const flattenedStyle = StyleSheet.flatten(style);

    const outerStyle = {
      overflow: 'hidden'
    };

    if (style) {
      OUTER_STYLES.forEach(({ key, remove }) => {
        if (flattenedStyle[key] !== undefined) {
          outerStyle[key] = flattenedStyle[key];
          if (remove)
            delete flattenedStyle[key];
        }
      })
    }

    return (
      <View style={outerStyle}>
        <TouchableNativeFeedback
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          background={TouchableNativeFeedback.Ripple(rippleColor)}
          onPress={onPress}>
          <View style={flattenedStyle}
            pointerEvents={enablePointerEvents ? 'auto' : 'box-only'}>
            {children}
          </View>
        </TouchableNativeFeedback>
      </View>)
  }

  return (
    <TouchableOpacity {...{ onPress, style }}>
      {children}
    </TouchableOpacity>)
}


function CircularTouchable({ size, children, style, onPress, rippleColor }) {

  return (
    <Touchable
      rippleColor={rippleColor}
      onPress={onPress}
      style={[{
        height: size,
        width: size,
        borderRadius: size / 2
      }, style]}>
      {children}
    </Touchable>
  )
}

Touchable.propTypes = {
  style: ViewPropTypes.style
}

CircularTouchable.propTypes = {
  style: ViewPropTypes.style
}

export {
  Touchable,
  CircularTouchable
}