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

export default class ImprintPage extends Component {
  render() {
    return (
      <Container>
        <Header
          containerStyle={{flex: 1}}
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
        <View style={{flex: 2.75}}>
          <SafeAreaView
            style={{
              flex: 1,
              marginVertical: hp('10%'),
              marginHorizontal: wp('10%'),
              flexDirection: 'column',
            }}>
            <Text
              style={{
                flex: 1,
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: hp('4%'),
              }}>
              Imprint
            </Text>
            <Text
              style={{
                flex: 3,
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: hp('2%'),
              }}>
              Dr. Martina Albrecht{'\n'}Platzhalter{'\n'}Dae cus, occullibusa
              volesti nulparibus.{'\n'}
              {'\n'}Unt, simet fugit quatum et rem as ut{'\n'}assinctiaes
              preptius qui solumquia que consedita que con rem secti sam
              harcipist elia con pelit{'\n'}
              {'\n'}que vendam, eos doluptis aces alitem-quam remolorem nimin
              cora aspicab or
            </Text>
          </SafeAreaView>
        </View>
      </Container>
    );
  }
}
