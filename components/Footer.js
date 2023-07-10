import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = ({todos, setTodos}) => {
  const [textInp, setTextInp] = useState('');

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = () => {
    if (textInp === '') {
      Alert.alert('Please enter a valid todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInp,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTextInp('');
    }
  };

  const getData = async () => {
    try {
      // eslint-disable-next-line no-shadow
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footer_inpContainer}>
        <TextInput
          value={textInp}
          onChangeText={val => setTextInp(val)}
          placeholder="Add Todo"
          style={styles.footer_inp}
        />
      </View>
      <TouchableOpacity onPress={() => addTodo()}>
        <View style={styles.footer_icon}>
          <Icon name="add" color="#fff" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    zIndex: 99,
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 20,
    gap: 10,
  },
  footer_inpContainer: {
    flex: 1,
  },
  footer_inp: {
    borderRadius: 25,
    elevation: 10,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  footer_icon: {
    width: 50,
    height: 50,
    backgroundColor: '#1f145c',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});
