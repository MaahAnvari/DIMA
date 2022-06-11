import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { COLORS } from '../../constants';
import firestore from '@react-native-firebase/firestore';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class FavoritePage extends Component {
  state = {
    Books: [],
  };

  async componentDidMount() {
    await firestore()
      .collection('LikeBooks')
      .onSnapshot(data => this.setState({ Books: data.docs }));
  }

  render() {
    return (
      <View style={styles.root}>
        {this.state.Books.map((item, key) => {
          return (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                alert(item._data.BookName);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: responsiveWidth(2),
                }}>
                <View style={{ marginLeft: responsiveWidth(2) }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#FFFF',
                      fontSize: responsiveFontSize(2.2),
                    }}>
                    {item._data.BookName}
                  </Text>
                  <Text
                    style={{
                      color: '#FFFF',
                      fontSize: responsiveFontSize(1.4),
                    }}>
                    # {item._data.BookAuthor}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
});
