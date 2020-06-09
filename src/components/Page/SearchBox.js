import React from 'react';
import {StyleSheet, Text, Keyboard} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'dict.db', createFromLocation: 1});

var searchRef = null;

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
        LIMIT 5`,
        [],
        (_, results) => {
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
    return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={styles.inputContainerStyle}
        data={this.state.DBItems}
        onChangeText={text => {
          this.updateDBItems(text);
        }}
        renderTextInput={props => {
          return (
            <SearchBar
              ref={c => {
                searchRef = c;
              }}
              placeholder="Type here"
              onPressToFocus={true}
              backgroundColor="#FFFFFF"
              fontFamily="Boton"
              fontSize={hp('2%')}
              iconSize={hp('3%')}
              cancelIconSize={hp('3%')}
              fontColor="#005e6f95"
              onPress={() => {
                this.updateDBItems(this.state.searchedText);
              }}
              onBlur={() => {
                this.setState({DBItems: []});
              }}
              onChangeText={text => {
                this.updateDBItems(text);
                searchRef.setState({value: text});
              }}
              underlineColorAndroid="transparent"
              onPressCancel={() => {
                this.setState({searchedText: ''});
                searchRef.setState({value: ''});
                this.props.parentCallback(0);
              }}
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
                searchRef.setState({value: item.name});
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
  inputContainerStyle: {
    borderWidth: 0,
  },
  itemText: {
    fontSize: hp('2%'),
    fontFamily: 'Boton',
    fontStyle: 'normal',
    fontWeight: '300',
    margin: 2,
    color: '#0099bd',
    textAlign: 'left',
    left: 20,
  },
});
