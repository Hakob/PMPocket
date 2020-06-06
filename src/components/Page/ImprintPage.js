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
          containerStyle={{flex: 0.32}}
          backgroundColor="#ed6b0bf0"
          rightContainerStyle={{right: 10}}
          leftComponent={
            <TouchableOpacity
              style={{left: 10, bottom: 50}}
              onPress={() => Linking.openURL('https://pm-pocket.de')}>
              <Image
                source={require('../../assets/logo-weiss-1.png')}
                style={{width: 100, height: 50}}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <Icon
              name="menu"
              type="SimpleLineIcons"
              style={{fontSize: hp('3%'), bottom: 60, color: 'white'}}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
        />
        <View style={{flex: 1, backgroundColor: '#eb6e0830'}}>
          <SafeAreaView
            style={{flex: 1, marginVertical: 20, flexDirection: 'column'}}>
            <Text
              style={{
                flex: 1,
                color: '#005e6f',
                fontFamily: 'Boton',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 25,
                left: 30,
                top: 30,
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
                fontSize: 20,
                left: 30,
              }}>
              Dr. Martina Albrecht{'\n'}Platzhalter{'\n'}Dae cus, occullibusa
              volesti nulparibus.{'\n'}
              {'\n'}Unt, simet fugit quatum et rem as ut{'\n'}assinctiaes
              preptius qui solumquia que consedita que con rem secti sam{'\n'}
              harcipist elia con pelit{'\n'}
              {'\n'}que vendam, eos doluptis aces{'\n'}alitemquam remolorem
              nimin cora{'\n'}aspicab or
            </Text>
          </SafeAreaView>
        </View>
      </Container>
    );
  }
}
