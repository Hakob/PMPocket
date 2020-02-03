import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'powderblue'}}>
        <Text>Type something in English:</Text>
        <TextInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1,}} />
        <Button title="button" />
        </View>
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
