import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  AsyncStorage,
} from 'react-native';

const STORAGE_KEY = 'TODO_LIST';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    try {
      const storedList = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedList !== null) {
        setTodoList(JSON.parse(storedList));
      }
    } catch (e) {
      console.error('Failed to load todo list', e);
    }
  };

  const saveTodoList = async (list) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save todo list', e);
    }
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      const newTask = { id: Date.now().toString(), title: inputValue };
      setTodoList([...todoList, newTask]);
      setInputValue('');
      saveTodoList([...todoList, newTask]);
    }
  };

  const handleRemoveTask = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
    saveTodoList(updatedList);
  };

  const renderTask = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Button title="X" onPress={() => handleRemoveTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter a new task"
      />
      <Button title="Add" onPress={handleAddTask} />
      <FlatList
        style={styles.list}
        data={todoList}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
  },
});
