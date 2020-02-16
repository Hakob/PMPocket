import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class SafeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <Text style={styles.container} onPress={this.onPressTitle}>
        {this.state.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
