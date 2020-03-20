/**
 * Start work on simple demo of https://www.npmjs.com/package/react-native-sound
 */

import React from 'react';
import {
  StyleSheet,
  View,
	Text,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

//import { SoundPlayer } from './utils/SoundPlayer';
//const Sound = require('react-native-sound');

class App extends React.Component {
  onPlayPress() {
    console.log('clicked');
	  console.log('HELLO!');
	  console.log(Sound);
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Click to Play1</Text>
        <Button onPress={this.onPlayPress.bind(this)} title="Play" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.white,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
});

export default App;
