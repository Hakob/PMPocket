/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon, Container} from 'native-base';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWordId: '',
      translated: [],
    };
  }
  render() {
    return (
      <Container>
        <Header
          containerStyle={{flex: 0.8}}
          backgroundColor="#ed6b0bf0"
          rightContainerStyle={{right: 10}}
          leftComponent={
            <Image
              source={require('../../assets/logo-weiss.png')}
              style={{width: 100, height: 50, left: 10, bottom: 50}}
            />
          }
          rightComponent={
            <Icon
              name="menu"
              type="SimpleLineIcons"
              style={{bottom: 60}}
              iconStyle={styles.iconStyle}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
        />
        <View style={{flex: 1, backgroundColor: 'purple'}}>
          <SafeAreaView style={{marginVertical: 20}}>
            <Text
              style={{
                fontFamily: 'Boton-Medium',
                fontSize: 25,
                left: 30,
                top: 30,
                lineHeight: 40,
              }}>
              Your personal{'\n'}project management{'\n'}Dictionary!
            </Text>
          </SafeAreaView>
        </View>
        <View style={{flex: 1.5, backgroundColor: 'yellow'}}>
          <Text
            style={{
              fontFamily: 'Boton-Medium',
              fontSize: 40,
              lineHeight: 30,
            }}>
            Your personal project management Dictionary!
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  iconStyle: {
    color: 'white',
  },
});
