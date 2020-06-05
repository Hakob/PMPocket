/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GermanPage from './src/components/Page/GermanPage';
import EnglishPage from './src/components/Page/EnglishPage';
import WelcomePage from './src/components/Page/WelcomePage';
import ImprintPage from './src/components/Page/ImprintPage';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: hp('30%'), backgroundColor: '#d2d2d2', opacity: 0.9}}>
          <Image
            source={require('./src/assets/logo-weiss-2.png')}
            style={{top: hp('10%'), height: hp('10%'), width: wp('45%'), alignSelf: 'center'}}
          />
        </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Info"
      drawerPosition="left"
      drawerContent={props => CustomDrawerContent(props)}
      drawerStyle={{
        backgroundColor: '#ed6b0b',
        width: wp('70%'),
    }}>
      <Drawer.Screen name="Info" component={WelcomePage} />
      <Drawer.Screen name="German To English" component={GermanPage} />
      <Drawer.Screen name="English To German" component={EnglishPage} />
      <Drawer.Screen name="Imprint" component={ImprintPage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
