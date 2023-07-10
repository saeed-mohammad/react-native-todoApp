import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({setTodos}) => {
  const handleClean = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Todo List</Text>
      <TouchableOpacity onPress={() => handleClean()}>
        <Icon name="delete" color="red" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_text: {
    fontSize: 20,
    color: '#1f145c',
    fontWeight: 'bold',
  },
});
