import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({todo, todos, setTodos}) => {
  const handleCompleted = todoId => {
    console.log(todoId);
    let completeTodos = todos.map(val => {
      if (val.id === todoId) {
        if (val.isCompleted === false) {
          return {...val, isCompleted: true};
        } else {
          return {...val, isCompleted: false};
        }
      }
      return val;
    });
    setTodos(completeTodos);
  };
  const handleDelete = todoId => {
    let deleteTodos = todos.filter(val => val.id !== todoId);
    setTodos(deleteTodos);
  };
  return (
    <View style={styles.listItem}>
      <View style={styles.list_container}>
        <Text
          style={[
            styles.list_task,
            // eslint-disable-next-line react-native/no-inline-styles
            {textDecorationLine: todo.isCompleted ? 'line-through' : 'none'},
          ]}>
          {todo?.task}
        </Text>

        <View style={styles.list_icons}>
          <TouchableOpacity onPress={() => handleCompleted(todo.id)}>
            <View>
              <Icon name="done" style={styles.icon_done} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(todo.id)}>
            <Icon name="delete" style={styles.icon_delete} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
  },
  list_container: {
    backgroundColor: '#fff',
    elevation: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 10,
  },
  list_task: {
    fontSize: 20,
    color: 'black',
  },
  list_icons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  icon_done: {
    fontSize: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    color: '#fff',
    padding: 5,
  },
  icon_delete: {
    fontSize: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    color: '#fff',
    padding: 5,
  },
});
