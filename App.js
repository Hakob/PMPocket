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
            source={require('./src/assets/Fuchs.png')}
            style={{height: 150, width: 150, borderRadius: 60}}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>PM POCKET</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
      <View style={{alignItems: 'center', bottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', marginRight: 15}}>
            <Icon
              name="flask"
              style={{fontSize: 24}}
              onPress={() => console.log('Tıkladın')}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Icon
              name="call"
              style={{fontSize: 24}}
              onPress={() => console.log('Tıkladın')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      drawerPosition="left"
      drawerContent={props => CustomDrawerContent(props)}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
    }}>
      <Drawer.Screen name="Welcome" component={WelcomePage} />
      <Drawer.Screen name="German To English" component={GermanPage} />
      <Drawer.Screen name="English To German" component={EnglishPage} />
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
