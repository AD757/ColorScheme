import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const Touchable = ({ navigation, name, palette }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('ColorPalette', {
          paletteName: name,
          colors: palette,
        })
      }
    >
      <Text style={styles.heading}>{name}</Text>
      <FlatList
        style={[styles.list]}
        horizontal={true}
        data={palette.slice(0, 5)}
        keyExtractor={(item, index) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 5,
  },
  box: {
    height: 50,
    width: 50,
    marginRight: 9,
  },
  list: {
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default Touchable;
