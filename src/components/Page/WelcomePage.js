/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon, Container} from 'native-base';

export default class WelcomePage extends Component {
  render() {
    return (
      <Container>
        <Header
          containerStyle={{flex: 0.8}}
          backgroundColor="#ed6b0bf0"
          rightContainerStyle={{right: 20, top: 22}}
          leftComponent={
            <TouchableOpacity
              style={{left: 20, bottom: 22}}
              onPress={() => Linking.openURL('https://pm-pocket.de')}>
              <Image
                source={require('../../assets/logo-weiss.png')}
                style={{width: 100, height: 50}}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <Icon
              name="menu"
              type="SimpleLineIcons"
              style={{bottom: 60, color: 'white'}}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
        />
        <View style={{flex: 1, backgroundColor: '#eb6e0830'}}>
          <SafeAreaView
            style={{flex: 1, marginVertical: 20, flexDirection: 'row'}}>
            <Text
              style={{
                flex: 2,
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 45,
                left: 40,
                top: 50,
                lineHeight: 63,
              }}>
              Your personal{'\n'}project management{'\n'}Dictionary!
            </Text>
            <Image
              source={require('../../assets/Fuchs_trans.png')}
              style={{flex: 1, width: 250, height: 250, top: 20}}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            flex: 1.5,
            backgroundColor: '#ed6b0bf0',
            flexDirection: 'column-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Boton',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: 20,
              color: '#FFEDDC',
              top: 60,
              left: 50,
            }}>
            Dr. Martina Albrecht{'\n'}a@m Advisory GmbH{'\n'}Friedrichstraße 95
            POB 63{'\n'}10117 Berlin{'\n'}www.pm-pocket.de
          </Text>
        </View>
      </Container>
    );
  }
}
