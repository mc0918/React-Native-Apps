import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder={'Text Here'} style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}/>
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
};
