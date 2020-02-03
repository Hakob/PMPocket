import {Dimensions, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

var Style = StyleSheet.create({
  tmpcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ca8afa',
  },
  bottomContainer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#96d0e3',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    zIndex: 1111,
    width: 200,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  parent: {
    padding: 30,
  },
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default Style;
