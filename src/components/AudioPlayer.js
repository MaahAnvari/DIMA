import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import PlayButton from './PlayButton.js';

function AudioPlayer() {
  const [isAlreadyPlay, setIsAlreadyPlay] = useState(false);
  const [duration, setDuration] = useState('00:00:00');
  const [timeElapsed, setTimeElapsed] = useState('00:00:00');
  const [percent, setPercent] = useState(0);
  const [inprogress, setInprogress] = useState(false);
  const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

  const [path, setPath] = useState('');

  const changeTime = async seconds => {
    // 50 / duration
    let seekTime = (seconds / 100) * duration;
    setTimeElapsed(seekTime);
    audioRecorderPlayer.seekToPlayer(seekTime);
  };

  const onStartPress = async e => {
    setIsAlreadyPlay(true);
    setInprogress(true);
    setPath('./assets/music');
    audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);

    audioRecorderPlayer.addPlayBackListener(async e => {
      if (e.current_position === e.duration) {
        audioRecorderPlayer.stopPlayer();
      }
      let percent = Math.round(
        (Math.floor(e.current_position) / Math.floor(e.duration)) * 100,
      );
      setTimeElapsed(e.current_position);
      setPercent(percent);
      setDuration(e.duration);
    });
  };

  const onPausePress = async e => {
    setIsAlreadyPlay(false);
    audioRecorderPlayer.pausePlayer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.seekBar}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          value={percent}
          minimumTrackTintColor="#93A8B3"
          onValueChange={seconds => changeTime(seconds)}
        />
        <View style={styles.inprogress}>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {!inprogress
              ? timeElapsed
              : audioRecorderPlayer.mmssss(Math.floor(timeElapsed))}
          </Text>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {!inprogress
              ? duration
              : audioRecorderPlayer.mmssss(Math.floor(duration))}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {!isAlreadyPlay ? (
          <PlayButton function={() => onStartPress()} state="play" />
        ) : (
          <PlayButton function={() => onPausePress()} state="pause" />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EAEAEC',
  },
  textLight: {
    color: '#B6B7BF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFF',
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: '#3D425C',
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: '500',
  },
  seekBar: { margin: 32 },
  inprogress: {
    marginTop: -12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AudioPlayer;
