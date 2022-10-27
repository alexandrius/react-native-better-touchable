import React from "react";
import { TouchableOpacity, View, Platform, Pressable } from "react-native";

function Touchable({
  style,
  children,
  onPress,
  rippleColor,
  enablePointerEvents = false,
}) {
  if (Platform.OS === "android") {
    const { innerStyle, outerStyle } = splitContainerChildStyle(style);

    outerStyle.overflow = "hidden";

    return (
      <View style={outerStyle}>
        <Pressable
          android_ripple={{ color: rippleColor, foreground: true }}
          onPress={onPress}
        >
          <View
            style={innerStyle}
            pointerEvents={enablePointerEvents ? "auto" : "box-only"}
          >
            {children}
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <TouchableOpacity {...{ onPress, style }}>{children}</TouchableOpacity>
  );
}

function CircularTouchable({ size, children, style, onPress, rippleColor }) {
  return (
    <Touchable
      rippleColor={rippleColor}
      onPress={onPress}
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      {children}
    </Touchable>
  );
}

export { Touchable, CircularTouchable };
