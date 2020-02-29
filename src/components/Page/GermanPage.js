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
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon, Container} from 'native-base';
import SearchBox from './SearchBox';

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
            containerStyle={{flex: 0.6}}
            backgroundColor="#ed6b0bf0"
            rightContainerStyle={{flex: 1, right: 10, bottom: 10}}
            centerContainerStyle={{bottom: 150}}
            centerComponent={
              <SearchBox
                fromTo={this.tableName}
                parentCallback={this.callbackFunction}
              />
            }
            leftComponent={
              <TouchableOpacity
                style={{left: 10, bottom: 100}}
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
                style={{bottom: 100, color: 'white'}}
                onPress={() => {
                  Keyboard.dismiss();
                  this.props.navigation.openDrawer();
                }}
              />
            }
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  top: 20,
                  left: 25,
                  color: '#005e6f',
                  fontFamily: 'Boton-Light-Italic',
                  fontSize: 24,
                }}>
                English Translation:
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
            <View style={{height: 1, backgroundColor: '#ed6b0bf0'}} />
            <View style={{flex: 1}}>
              <Text
                style={{
                  top: 20,
                  left: 25,
                  color: '#005e6f',
                  fontFamily: 'Boton-Light-Italic',
                  fontSize: 24,
                }}>
                Related Words:
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
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    left: 10,
    color: '#005e6f',
    fontFamily: 'Boton-Medium',
    fontSize: 20,
  },
});
