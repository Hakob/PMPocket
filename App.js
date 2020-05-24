/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import GermanPage from './src/components/Page/GermanPage';
import EnglishPage from './src/components/Page/EnglishPage';
import WelcomePage from './src/components/Page/WelcomePage';
import ImprintPage from './src/components/Page/ImprintPage';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 250, backgroundColor: '#d2d2d2', opacity: 0.9}}>
        <View
          style={{
            height: 200,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./src/assets/Fuchs_trans.png')}
            style={{height: 150, width: 150}}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'Boton-Bold'}}>PM POCKET</Text>
        </View>
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
        width: 240,
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
