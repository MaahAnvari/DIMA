import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONTS, COLORS, SIZES, images } from '../../constants';
import {downloadBook} from '../actions'

import { WebView } from 'react-native-webview';
import storage, { firebase, getStorage, ref } from '@react-native-firebase/storage';
import { Actions } from 'react-native-router-flux';

const BookPage = (props) => {


  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);
  var urll = null;
  function downloadB() {
    const store= firebase.storage();
    // console.log(store)
    const gsReference = store.ref('Books/'+props.item.trackCensoredName+'.pdf').getDownloadURL().then(url => {
      // console.log('urlll', url)
    urll = url;   
    
    console.log(urll)
    // Actions.downloadPage({name: props.item.trackCensoredName});
    // return(
    // {<WebView
    //   bounces={false}
    //   scrollEnabled={false} 
    //   source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bookstore-24caa.appspot.com/o/Books%2FHeart%20of%20Darkness.pdf?alt=media&token=3e7ab2ce-9065-4883-a7c2-7205ef69b2e7' }}
    // />}
    //   )
    });
    // console.log(urll)
    // Actions.aboutPage();
  }

  function renderBookInfoSection() {
    downloadB();
    return (
      <View style={{ flex: 1 }}>
        {/* {props.free ? 
          <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: urll }}
        />
         : console.log('didnot download')} */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Book Cover */}

          {console.log('uuuuuuuuu', props.item)}
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.padding,
              marginRight: SIZES.padding,
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              alignItems: 'center',
            }}>
            <Image
              source={{uri: props.item.artworkUrl100}}
              resizeMode="contain"
              style={{
                flex: 1,
                height:250, width:150
              }}
            />
          </View>

          {/* Book Info */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 2,
              }}></View>
            {/* Book Name */}
            <View
              style={{
                flex: 1,
                marginBottom: SIZES.padding2,
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.white,
                }}>
                {props.item.trackCensoredName}
              </Text>
            </View>

            {/* Author */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>AUTHOR</Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.body3, color: COLORS.orange }}>
                {props.item.artistName}
                </Text>
              </View>
            </View>

            {/* Language */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                  Avg. Rating
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.body3, color: COLORS.orange }}>
                {props.item.averageUserRating}
                </Text>
              </View>
            </View>

            {/* Published */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                  PUBLISHED
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.body3, color: COLORS.orange }}>
                {props.item.releaseDate}
                </Text>
              </View>
            </View>

            {/* Type */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>TYPE</Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.body3, color: COLORS.orange }}>
                {props.item.genres}
                </Text>
              </View>
            </View>

            {/* Price */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.h3, color: COLORS.white }}>PRICE</Text>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={{ ...FONTS.body3, color: COLORS.orange }}>
                {props.item.price} $
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 4,
              }}></View>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={{ flex: 1, backgroundColor: COLORS.gray1 }}>
        {}
        {urll!=''?<Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}>
            {urll}
          </Text>:null}
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            marginLeft: SIZES.padding,
            marginBottom: SIZES.padding,
          }}>
          Description
        </Text>

        <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
          {/* Custom Scrollbar */}
          <View
            style={{ width: 4, height: '100%', backgroundColor: COLORS.gray1 }}>
            <Animated.View
              style={{
                width: 4,
                height: indicatorSize,
                backgroundColor: COLORS.lightGray4,
                transform: [
                  {
                    translateY: Animated.multiply(
                      indicator,
                      scrollViewVisibleHeight / scrollViewWholeHeight,
                    ).interpolate({
                      inputRange: [0, difference],
                      outputRange: [0, difference],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            />
          </View>

          {/* Description */}
          <ScrollView
            contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onContentSizeChange={(width, height) => {
              setScrollViewWholeHeight(height);
            }}
            onLayout={({
              nativeEvent: {
                layout: { x, y, width, height },
              },
            }) => {
              setScrollViewVisibleHeight(height);
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: indicator } } }],
              { useNativeDriver: false },
            )}>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.lightGray,
              }}>
              {props.item.description.replace(/[`~0-9!@#$%^&*_|+\-=?'"<>\{\}\[\]\\\/]/gi, '')}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* Bookmark */}
        {/* {this.props.free ? 
          <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bookstore-24caa.appspot.com/o/Books%2FHeart%20of%20Darkness.pdf?alt=media&token=3e7ab2ce-9065-4883-a7c2-7205ef69b2e7' }}
        />
         : null} */}
        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Bookmark')}>
          <Feather name="bookmark" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        {/* Read Now */}
        <TouchableOpacity
          style={{ 
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => 
            Actions.downloadPage({url: urll})
          }>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}>
            Read Now
          </Text>
          
        </TouchableOpacity>
          
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray1 }}>
      {/* Book Cover Section */}
      <View style={{ flex: 4 }}>{renderBookInfoSection()}</View>

      {/* Description */}
      <View style={{ flex: 2 }}>{renderBookDescription()}</View>

      {/* Buttons */}
      <View style={{ height: 70, marginBottom: 30 }}>
        {renderBottomButton()}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log('state',state)
  return {};
};

export default connect(mapStateToProps, 
  {downloadBook}
  )(BookPage);