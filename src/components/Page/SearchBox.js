/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, Keyboard, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'dict.db', createFromLocation: 1});

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
      DBItems: [],
    };
  }
  updateDBItems(text) {
    if (text === '') {
      this.setState({searchedText: text, DBItems: []});
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        `SELECT *
        FROM ${this.props.fromTo}
        WHERE \`name\` LIKE '%${text}%'
        ORDER BY
          CASE
            WHEN \`name\` LIKE '${text}%' THEN 1
            WHEN \`name\` LIKE '%${text}' THEN 3
            ELSE 2
          END
        LIMIT 10`,
        [],
        (tx, results) => {
          let temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          this.setState({
            searchedText: text,
            DBItems: temp,
          });
        },
      );
    });
  }
  render() {
    const {searchedText} = this.state;
    return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.TextInputStyleClass}
        containerStyle={styles.autocompleteContainer}
        data={this.state.DBItems}
        defaultValue={searchedText}
        onChangeText={text => {
          this.updateDBItems(text);
        }}
        placeholder="Enter your word here..."
        renderTextInput={props => {
          return (
            <TextInput
              blurOnSubmit={true}
              onFocus={() => {
                this.updateDBItems(this.state.searchedText);
              }}
              onBlur={() => {
                this.setState({DBItems: []});
              }}
              underlineColorAndroid="transparent"
              {...props}
            />
          );
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                this.props.parentCallback(item.id);
                this.setState({
                  searchedText: item.name,
                  DBItems: [],
                });
              }}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  TextInputStyleClass: {
    // Setting up Hint Align center.
    textAlign: 'center',

    // Setting up TextInput height as 50 pixel.
    height: 50,

    // Set border width.
    borderWidth: 2,

    // Set border Hex Color Code Here.
    borderColor: '#FF5722',

    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: '#FFFFFF',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    color: 'black',
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25,
  },
  infoText: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  openingText: {
    textAlign: 'center',
  },
});
