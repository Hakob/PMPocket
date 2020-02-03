import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Style';

var english_german = require('./db/english_german.json');

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text>Type something in English:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this._onTextInputChangeText(text)}
            value={this.state.input}
            onSubmitEditing={this.showMeaning.bind(this)}
          />
          <Button style={styles.addButton} title="button" />
        </View>
        <View style={styles.bottomContainer} />
        <View style={styles.buttonContainer}>
          <Text style={styles.germanWord}>{this.state.input}</Text>
          <Text style={styles.germanLabel}>Its German equivalent is:</Text>

          <Text style={styles.germanWord}>{this.state.output}</Text>
        </View>
      </View>
    );
  }

  _onTextInputChangeText(text) {
    this.setState({
      input: text,
    });
  }

  showMeaning() {
    let toLower = this.state.input.toLowerCase();
    var meaning =
      toLower in english_german ? english_german[toLower] : 'Not Found';

    this.setState({
      output: meaning,
    });
  }
}
