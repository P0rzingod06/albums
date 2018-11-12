import React from 'react'
import { View, Text } from 'react-native'

const Header = () => { 
  const { textStyle, viewStyle } = styles;

  console.log("header")

  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }> Albums DAwg </Text>
    </View>
  );
}

const styles = {
  textStyle : {
    fontSize: 20
  },
  viewStyle: {
    width: '100%',
    marginTop: 100,
    alignItems: `center`,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    shadowColor: `#000`,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
}

export default Header;
