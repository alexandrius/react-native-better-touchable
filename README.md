# `React Native Better Touchable`

Renders `TouchableNativeFeedback` and `TouchableOpacity` according to platform. `TouchableNativeFeedback` will be rendered on Android wrapped into container view which gives possibility to have style prop for it. Styles like which position the layout will be forwarded to container view while inner styles like `backgroundColor` or `padding` won't.
Another advantage of this wrapper is rounded corners on Android TouchableNativeFeedback

iOS will be defaulted to `TouchableOpacity`

## Install

```
npm i react-native-better-touchable --save

 # or

yarn add react-native-better-touchable
```

## Usage 
```javascript
import React from 'react';
import { Text, View } from 'react-native';
import { Touchable, CircularTouchable } from 'react-native-better-touchable';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Touchable
          onPress={() => alert('Better Touchable Pressed!')}
          style={{
            backgroundColor: '#eee',
            width: '100%',
            height: 50,
          }}
          rippleColor={'red'}>
          <Text>Press Touchable!</Text>
        </Touchable>
        
        
        <CircularTouchable
            rippleColor={'green'}
            size={80}
            onPress={() => alert('Circular Touchable Pressed!')}>
            <Text>Press Circular Touchable!</Text>
        </CircularTouchable>
        
      </View>
    );
  }
}
```

## props
### Touchable
- `style` - Container view style
- `onPress` - press event
- `rippleColor` - Color of the ripple (Android only)
- `enablePointerEvents` - Defaults to `false`. Enable if you need nested Touchables

### CircularTouchable
Same as above plus
- `size` - Size of the circle

Like my work? [You can buy me a coffee](https://www.buymeacoffee.com/alexandrius) ☕

[<img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg">](https://www.buymeacoffee.com/alexandrius)