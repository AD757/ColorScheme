import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.colours, boxColor]}>
      <Text style={[styles.text, textStyle]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colours: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

export default ColorBox;
