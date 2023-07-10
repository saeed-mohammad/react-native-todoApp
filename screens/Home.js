import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListItem from '../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const saveTodos = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Header setTodos={setTodos} />

      <FlatList
        keyExtractor={key => key.id}
        data={todos}
        renderItem={({item}) => (
          <ListItem todo={item} todos={todos} setTodos={setTodos} />
        )}
      />

      <Footer todos={todos} setTodos={setTodos} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '100%',
    overflow: 'scroll',
  },
});
