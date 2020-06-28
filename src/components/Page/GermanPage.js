/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon, Container} from 'native-base';
import SearchBox from './SearchBox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'dict.db', createFromLocation: 1});

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class GermanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWordId: '',
      translated: [],
    };
  }
  tableName = 'germanwords';
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="settings" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  callbackFunction = childData => {
    this.setState({chosenWordId: childData});
    db.transaction(tx => {
      tx.executeSql(
        `SELECT english_id AS id, name AS title
          FROM ManyToMany AS mtm
          INNER JOIN englishwords AS ew
          ON mtm.english_id = ew.id
        WHERE german_id == ${this.state.chosenWordId}`,
        [],
        (_, results) => {
          let temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.setState({translated: temp});
        },
      );
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Header
            containerStyle={{flex: 1.11}}
            backgroundColor="#ed6b0bf0"
            rightContainerStyle={{
              flex: 0.5,
              ...Platform.select({
                ios: {},
                android: {
                  bottom: hp('3%'),
                },
              }),
            }}
            leftContainerStyle={{
              flex: 0.5,
              ...Platform.select({
                ios: {},
                android: {
                  bottom: hp('3%'),
                },
              }),
            }}
            centerContainerStyle={{
              flex: -0.5,
              ...Platform.select({
                ios: {
                  bottom: hp('1.1%'),
                },
                android: {
                  top: hp('11.6%'),
                },
              }),
            }}
            centerComponent={
              <SearchBox
                fromTo={this.tableName}
                parentCallback={this.callbackFunction}
              />
            }
            leftComponent={
              <TouchableOpacity
                style={{
                  // TODO Test in iOS
                  right: wp('3%'),
                  bottom: hp('8%'),
                }}
                onPress={() => Linking.openURL('https://pm-pocket.de')}>
                <Image
                  source={require('../../assets/logo-weiss-1.png')}
                  style={{
                    // See todo above
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
                  bottom: hp('8%'),
                  width: wp('12%'),
                  height: hp('7%'),
                }}
                onPress={() => {
                  Keyboard.dismiss();
                  this.props.navigation.openDrawer();
                }}
              />
            }
          />
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  left: wp('6%'),
                  color: '#005e6f',
                  ...Platform.select({
                    ios: {
                      fontFamily: 'Boton',
                      fontStyle: 'italic',
                      fontWeight: '400',
                    },
                    android: {
                      fontFamily: 'Boton-LightItalic',
                    },
                  }),
                  top: hp('1.5%'),
                  fontSize: wp('5%'),
                  paddingBottom: 20,
                }}>
                English translation:
              </Text>
              <Item
                title={
                  this.state.translated.length &&
                  'title' in this.state.translated[0]
                    ? this.state.translated[0].title
                    : ''
                }
              />
            </View>
            <View
              style={{
                top: hp('-1.5%'),
                height: 1,
                backgroundColor: '#ed6b0bf0',
              }}
            />
            <View style={{flex: 3}}>
              <Text
                style={{
                  left: wp('6%'),
                  color: '#005e6f',
                  ...Platform.select({
                    ios: {
                      fontFamily: 'Boton',
                      fontStyle: 'italic',
                      fontWeight: '400',
                    },
                    android: {
                      fontFamily: 'Boton-LightItalic',
                    },
                  }),
                  fontSize: wp('5%'),
                  paddingBottom: 20,
                }}>
                Related words:
              </Text>
              <SafeAreaView>
                <FlatList
                  data={this.state.translated.slice(1)}
                  renderItem={({item}) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>
            </View>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: hp('6%'),
    left: wp('8%'),
  },
  title: {
    left: wp('4%'),
    color: '#005e6f',
    ...Platform.select({
      ios: {
        fontFamily: 'Boton',
        fontStyle: 'normal',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Boton-Medium',
      },
    }),
    fontSize: wp('5%'),
  },
});
