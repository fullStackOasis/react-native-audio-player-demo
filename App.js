/**
 * Simple demo of https://www.npmjs.com/package/react-native-sound
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

/** Keep all sound functionality in separate utils area */
import SoundPlayer from './utils/SoundPlayer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.soundPlayer = new SoundPlayer();
	}

	onPlayPress() {
		console.log('onPlayPress method');
		this.soundPlayer.playSound();
	}

	onStopPress() {
		console.log('onPlayPress method');
		this.soundPlayer.stopSound();
	}

	render() {
		return (
		<View style={styles.body}>
			<Text style={styles.sectionTitle}>Click to Play</Text>
			<Button onPress={this.onPlayPress.bind(this)} title="Play" />
			<Text style={styles.sectionTitle}>Click to Stop</Text>
			<Button onPress={this.onStopPress.bind(this)} title="Stop" />
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