import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Error({
  errorText1 = 'Oops! Something went wrong.',
  errorText2 = 'Make sure you are online and restart the App',
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorText1}</Text>
      <Text style={styles.text}>{errorText2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Error;
