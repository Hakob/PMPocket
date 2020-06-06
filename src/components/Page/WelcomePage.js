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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class WelcomePage extends Component {
  render() {
    return (
      <Container>
        <Header
          containerStyle={{flex: 1.46}}
          backgroundColor="#ed6b0bf0"
          rightContainerStyle={{flex: 0.5}}
          leftContainerStyle={{flex: 0.5}}
          leftComponent={
            <TouchableOpacity
              onPress={() => Linking.openURL('https://pm-pocket.de')}>
              <Image
                source={require('../../assets/logo-weiss-1.png')}
                style={{
                  right: wp('3%'),
                  bottom: hp('3.13%'),
                  height: hp('7%'),
                  width: wp('40%'),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <Icon
              name="menu"
              type="SimpleLineIcons"
              style={{
                fontSize: hp('3%'),
                left: wp('1%'),
                color: 'white',
                bottom: hp('3.13%'),
                width: wp('12%'),
                height: hp('8%'),
              }}
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
          }
        />
        <View style={{flex: 2, backgroundColor: '#eb6e0830'}}>
          <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                flex: 2,
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: hp('3%'),
                alignSelf: 'center',
                left: wp('6%'),
                lineHeight: hp('5%'),
              }}>
              Your personal{'\n'}project management{'\n'}Dictionary!
            </Text>
            <Image
              source={require('../../assets/Fuchs_trans.png')}
              style={{
                flex: 0.8,
                height: hp('19.8%'),
                width: wp('10%'),
                right: wp('3%'),
                alignSelf: 'center',
              }}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#ed6b0bf0',
            flexDirection: 'column-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Boton',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: hp('2%'),
              color: '#FFEDDC',
              height: hp('22%'),
              width: wp('52%'),
              left: wp('6%'),
            }}>
            Dr. Martina Albrecht{'\n'}a@m Advisory GmbH{'\n'}Friedrichstraße 95
            POB 63{'\n'}10117 Berlin{'\n'}www.pm-pocket.de
          </Text>
        </View>
      </Container>
    );
  }
}
