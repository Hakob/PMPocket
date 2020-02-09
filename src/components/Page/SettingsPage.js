/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import {Left, Right, Icon, Container} from 'native-base';
import SearchBox from './SearchBox';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'dict.db', createFromLocation: 1});

class SettingsPage extends Component {
  tableName = 'englishwords';
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="settings" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  state = {
    chosenWord: '',
  };
  callbackFunction = childData => {
    this.setState({chosenWord: childData});
  };

  render() {
    // const {search} = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container style={styles.container}>
          <Header
            containerStyle={{flex: 0.4}}
            backgroundColor="#ed6b0bf0"
            rightContainerStyle={{flex: 1, right: 10, bottom: 10}}
            // placement="right"
            centerContainerStyle={{flex: 2}}
            centerComponent={
              <SearchBox
                style={{
                  flex: 1,
                  bottom: 20,
                }}
                fromTo={this.tableName}
                parentCallback={this.callbackFunction}
              />
            }
            leftComponent={
              <Image
                source={require('../../assets/logo-weiss.png')}
                style={{width: 100, height: 50, left: 10, bottom: 70}}
              />
            }
            rightComponent={
              <Icon
                name="menu"
                type="SimpleLineIcons"
                style={{bottom: 70}}
                iconStyle={styles.iconStyle}
                onPress={() => this.props.navigation.openDrawer()}
              />
            }
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
            }}>
            <Text>Settings Page</Text>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: 'white',
  },
});

export default SettingsPage;
