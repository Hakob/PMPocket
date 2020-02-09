/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';

class NotificationPage extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="notifications" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          rightComponent={
            <Icon
              name="menu"
              type="SimpleLineIcons"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Notification Page</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NotificationPage;
