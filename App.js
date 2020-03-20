/**
 * Simple demo of https://www.npmjs.com/package/react-native-sound
 * The app plays an included mp3 file when the user clicks on 'Play' button.
 * It stops the playback when the user clicks on the 'Stop' button.
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
			<Text style={styles.sectionTitle}>Click button to Play</Text>
			<View style={styles.buttonStyle}>
				<Button style={styles.buttonStyle}
					onPress={this.onPlayPress.bind(this)}
					title="Play"
				/>
			</View>
			<Text style={styles.sectionTitle}>Click button to Stop</Text>
			<View style={styles.buttonStyle}>
				<Button buttonStyle={styles.buttonStyle}
					onPress={this.onStopPress.bind(this)}
					title="Stop"
				/>
			</View>
		</View>
    	);
	}
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.white,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'gainsboro'
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
		padding: 20,
		backgroundColor: 'gainsboro' /* See https://reactnative.dev/docs/colors */,
	},
	buttonStyle: {
		padding: 20,
		backgroundColor: 'gainsboro' /* See https://reactnative.dev/docs/colors */,
	}
});

export default App;