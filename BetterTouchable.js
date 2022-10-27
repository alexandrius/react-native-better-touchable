import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import splitContainerChildStyle from "./splitContainerChildStyle";

const OUTER_STYLES = [
  { key: "margin", remove: true },
  { key: "marginHorizontal", remove: true },
  { key: "marginVertical", remove: true },
  { key: "marginBottom", remove: true },
  { key: "marginTop", remove: true },
  { key: "marginLeft", remove: true },
  { key: "marginRight", remove: true },
  { key: "borderRadius", remove: false },
  { key: "width", remove: false },
  { key: "height", remove: false },
  { key: "position", remove: true },
  { key: "top", remove: true },
  { key: "left", remove: true },
  { key: "right", remove: true },
  { key: "top", remove: true },
  { key: "bottom", remove: true },
  { key: "zIndex", remove: true },
  { key: "flex", remove: true },
];

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
        <TouchableNativeFeedback
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          background={TouchableNativeFeedback.Ripple(rippleColor)}
          onPress={onPress}
        >
          <View
            style={innerStyle}
            pointerEvents={enablePointerEvents ? "auto" : "box-only"}
          >
            {children}
          </View>
        </TouchableNativeFeedback>
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
