The solution is to use the `useEffect` hook to access the dimensions after the component has mounted.  This ensures that the `Dimensions` API returns a valid value.

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const { height } = Dimensions.get('window');
    setScreenHeight(height);
  }, []);

  return (
    <View>
      <Text>Screen Height: {screenHeight}</Text>
    </View>
  );
};

export default MyComponent;
```

By using the `useEffect` hook, we ensure that the code within the `useEffect` function runs after the component has mounted and the `Dimensions` API has valid data.