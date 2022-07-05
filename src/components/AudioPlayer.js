import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
//import Slider from '@react-native-community/slider';

import { Icon, Icons, COLORS } from '../../constants';
import PlayButton from './PlayButton.js';

const trackPlayerInit = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      url: require('../../assets/music/music.mp3'),
      title: 'My Title',
      album: 'My Album',
      artist: 'Tommaso',
      id: 1,
    });
  } catch (e) {
    console.log(e);
  }

  return true;
};

const AudioPlayer = () => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  const playbackState = usePlaybackState();
  const progress = useProgress();

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  const onButtonPressed = async playbackState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack != null) {
      if (playbackState == State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <PlayButton
          function={() => {
            onButtonPressed(playbackState);
          }}
          state={playbackState == State.Playing ? 'pause' : 'play'}
          disabled={!isTrackPlayerInit}
        />
      </View>
      <View style={styles.seekBar}>
        <Slider
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#93A8B3"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.inprogress}>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {new Date(progress.position * 1000).toISOString().substring(14, 5)}
          </Text>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {new Date(progress.duration * 1000).toISOString().substring(14, 5)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
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
  seekBar: {
    flex: 1,
    marginLeft: 16,
    marginBottom: 42,
    marginTop: 22,
    marginRight: 32,
  },
  inprogress: {
    marginTop: -12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AudioPlayer;
