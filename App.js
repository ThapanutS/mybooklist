import React, { useState } from 'react'
import Header from './components/Header'
import { View, Text, FlatList ,Alert , StyleSheet} from 'react-native'
import ListItem from './components/ListItem'
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'HTML' },
    { id: uuidv4(), text: 'CSS' },
    { id: uuidv4(), text: 'JS' },
    { id: uuidv4(), text: 'PHP' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'กรุณาใส่ข้อมูล');
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text }, ...prevItems];
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => (<ListItem item={item} deleteItem={deleteItem} />)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
