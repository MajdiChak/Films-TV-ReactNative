import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Card from './Card';

function List({title, content}) {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          horizontal={true}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default List;
