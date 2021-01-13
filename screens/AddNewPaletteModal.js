import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ALL_COLORS } from '../components/colors';

const AddNewPaletteModal = ({ navigation }) => {
  const [schemeName, setSchemeName] = useState('');
  const [selected, setSelected] = useState([]);

  const handleSelected = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelected((current) => [...current, color]);
      } else {
        setSelected((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selected, setSelected],
  );

  const handleAdd = useCallback(() => {
    if (!schemeName) {
      Alert.alert('Please add a name to your color palette');
    } else if (selected.length < 2) {
      Alert.alert('Please choose at least 2 colors');
    } else {
      navigation.navigate('Home', {
        newPalette: { paletteName: schemeName, colors: selected },
      });
    }
  }, [schemeName, selected]);

  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Name of your color scheme</Text>
      <TextInput
        style={styles.input}
        value={schemeName}
        onChangeText={setSchemeName}
      />
      <FlatList
        style={styles.list}
        data={ALL_COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Text style={styles.colours}>{item.colorName}</Text>
            <Switch
              value={
                !!selected.find((color) => color.colorName === item.colorName)
              }
              onValueChange={(newValue) => handleSelected(item, newValue)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.add} onPress={handleAdd}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 17,
  },
  container: {
     backgroundColor: '#fff',
    flex: 1,
    padding: 5,
  },
  textInput: {
    marginVertical: 8,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  add: {
    backgroundColor: '#007AFF',
    alignItems: 'center',
    marginVertical: 13,
    padding: 12,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddNewPaletteModal;
