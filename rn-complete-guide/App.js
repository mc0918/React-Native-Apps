import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles}>
      <View>
        <TextInput placeholder={'Text Here'} style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: 50
});
