import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <View style={styles.circular}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    marginRight:10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default task;
