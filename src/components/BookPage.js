import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';

import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONTS, COLORS, SIZES, images } from '../../constants';

const BookPage = props => {
  const { book, onAdd, onRemove } = props;

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  const [likeBook, setLikeBook] = React.useState(false);

  function renderBookInfoSection() {
    return (
      <View style={{ flex: 1 }}>
        {/* Navigation header */}
        {/* <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => console.log('Back')} //navigation.goBack()
          >
            <Icon
              type={Icons.MaterialIcons}
              name="arrow-back-ios"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>APP NAME</Text>
          </View>

          <TouchableOpacity
            style={{ marginRigth: SIZES.base }}
            onPress={() => console.log('Click More')}>
            <Icon
              type={Icons.Feather}
              name="more-horizontal"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View> */}

        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Book Cover */}
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
      <View style={{ flex: 1 }}>
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
              {props.item.description}
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
          onPress={() => {
            setLikeBook(!likeBook);
            {
              likeBook ? onRemove(book) : onAdd(book);
            }
            console.log('Bookmark');
          }}>
          <Icon
            type={Icons.AntDesign}
            name={likeBook ? 'heart' : 'hearto'}
            size={25}
            color="#FFFFFF"
          />
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
          onPress={() => console.log('Read Now')}>
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
    <View
      style={{ backgroundColor: '#001120', justifyContent: 'center', flex: 1 }}>
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
  {}
  )(BookPage);