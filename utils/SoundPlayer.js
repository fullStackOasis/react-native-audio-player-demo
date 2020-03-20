/**
 * Really simple demo of https://www.npmjs.com/package/react-native-sound
 */
const Sound = require('react-native-sound');
/**
 * Audio credit:
 * https://freemusicarchive.org/music/John_Bartmann/Public_Domain_Soundtrack_Music_Album_One/earning-happiness
 * "Earning Happiness" by John Bartmann licensed under a CC0 1.0 Universal License
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
const FILENAME = 'john_bartmann_04_earning_happiness.mp3';

class SoundPlayer {
	constructor(props) {
		console.log("SoundPlayer constructor");
	};
	stopSound() {
		console.log('SoundPlayer.stopSound');
		this.whoosh.stop();
		this.whoosh.release();
	}
	playSound() {
		console.log('SoundPlayer.playSound');
		let me = this;
		console.log(me);
		me.whoosh = new Sound(FILENAME, Sound.MAIN_BUNDLE, error => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			// loaded successfully
			console.log(
				'duration in seconds: ' +
				me.whoosh.getDuration() +
				'number of channels: ' +
				me.whoosh.getNumberOfChannels()
			);
			me.whoosh.play(success => {
				if (success) {
				console.log('successfully finished playing');
				} else {
				console.log('playback failed due to audio decoding errors');
				}
			});
	    });
		// Play the sound with an onEnd callback
		return 0;
		// All other stuff is not needed right now. Leaving in the code in case we want to use it later!
		// Reduce the volume by half
		whoosh.setVolume(0.5);

		// Position the sound to the full right in a stereo field
		whoosh.setPan(1);

		// Loop indefinitely until stop() is called
		whoosh.setNumberOfLoops(-1);

		// Get properties of the player instance
		console.log('volume: ' + whoosh.getVolume());
		console.log('pan: ' + whoosh.getPan());
		console.log('loops: ' + whoosh.getNumberOfLoops());

		// Seek to a specific point in seconds
		whoosh.setCurrentTime(2.5);

		// Get the current playback point in seconds
		whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

		// Pause the sound
		whoosh.pause();

		// Stop the sound and rewind to the beginning
		whoosh.stop(() => {
			// Note: If you want to play a sound after stopping and rewinding it,
			// it is important to call play() in a callback.
			whoosh.play();
		});

		// Release the audio player resource
		whoosh.release();

	}
}

export default SoundPlayer;
