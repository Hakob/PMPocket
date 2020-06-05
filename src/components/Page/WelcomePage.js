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
          containerStyle={{flex: 0.5}}
          leftComponentStyle={{
            height: hp('7%'),
            width: wp('40%'),
            resizeMode: 'contain',
          }}
          // containerStyle={{height: hp('20%')}}
          backgroundColor="#ed6b0bf0"
          leftComponent={
            <TouchableOpacity
              onPress={() => Linking.openURL('https://pm-pocket.de')}>
              <Image
                source={require('../../assets/logo-weiss-1.png')}
                style={{
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
              style={{color: 'white', width: wp('12%'), height: hp('7%')}}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
        />
        <View style={{flex: 1, backgroundColor: '#eb6e0830'}}>
          <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: hp('3%'),
                alignSelf: 'center',
                left: hp('2.2%'),
                lineHeight: hp('5%'),
              }}>
              Your personal{'\n'}project management{'\n'}Dictionary!
            </Text>
            <Image
              source={require('../../assets/Fuchs_trans.png')}
              style={{height: hp('16%'), width: wp('38%'), alignSelf: 'center'}}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ed6b0bf0',
            flexDirection: 'column-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Boton',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: hp('2%'),
              color: '#FFEDDC',
              height: hp('22%'),
              width: wp('50%'),
              left: hp('2.2%'),
            }}>
            Dr. Martina Albrecht{'\n'}a@m Advisory GmbH{'\n'}Friedrichstraße 95
            POB 63{'\n'}10117 Berlin{'\n'}www.pm-pocket.de
          </Text>
        </View>
      </Container>
    );
  }
}
