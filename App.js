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
import HomePage from './src/components/Page/HomePage';
import SettingsPage from './src/components/Page/SettingsPage';
import NotificationPage from './src/components/Page/NotificationsPage';

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
            source={require('./src/assets/no-image.png')}
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
          <Text>John Doe</Text>
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
      initialRouteName="Home"
      drawerPosition="left"
      drawerContent={props => CustomDrawerContent(props)}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
    }}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
      <Drawer.Screen name="Notification" component={NotificationPage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
