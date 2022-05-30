import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import firestore from '@react-native-firebase/firestore';

import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import { Icon, Icons, FONTS, COLORS, SIZES, images } from '../../constants';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 5 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const BookPage = props => {
  const book = props.item;
  const [BookId, setBookId] = React.useState(0);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  const [likeBook, setLikeBook] = React.useState(false);

  //Add Books
  async function addBooks() {
    const doc = await firestore().collection('LikeBooks').doc();

    setBookId(doc.id);
    doc.set({
      BookName: book.trackCensoredName,
      BookAuthor: book.artistName,
    });
    alert('Book Added !');
  }

  //Delete Books
  async function DeleteBooks(id) {
    await firestore()
      .collection('LikeBooks')
      .doc(id)
      .delete()
      .then(() => {
        alert('Book Deleted !');
      });
  }

  function renderBookInfoSection() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: book.artworkUrl100 }}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

        {/* Color Overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: COLORS.secondary,
          }}></View>

        {/* Navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => {
              //Actions.pop();
              console.log('Back');
            }}>
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
            style={{ marginRight: SIZES.base }}
            onPress={() => console.log('Click More')}>
            <Icon
              type={Icons.Feather}
              name="more-horizontal"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View
          style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}>
          <Image
            source={{ uri: book.artworkUrl100 }}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: 'auto',
            }}
          />
        </View>

        {/* Book Name and Author */}
        <View
          style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {book.trackCensoredName}
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>
            {book.artistName}
          </Text>
        </View>

        {/* Book Info */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/*Rating */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.averageUserRating}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
          </View>

          <LineDivider />

          {/* Price */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.radius,
              alignItems: 'center',
            }}>
            {book.price == 0 ? (
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>FREE</Text>
            ) : (
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                {book.price} $
              </Text>
            )}
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Price</Text>
          </View>

          <LineDivider />

          {/* Published */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.releaseDate.substr(0, 4)}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              Published
            </Text>
          </View>
        </View>

        {/* Genre */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}>
          {book.genres.includes('Mysteries & Thrillers') && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkGreen,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                Mysteries & Thrillers
              </Text>
            </View>
          )}
          {(book.genres.includes('Fiction') ||
            book.genres.includes('Fiction & Literature')) && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkGreen,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                Fiction
              </Text>
            </View>
          )}
          {(book.genres.includes('Kids') ||
            book.genres.includes('Young Adult')) && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkRed,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                Young
              </Text>
            </View>
          )}
          {book.genres.includes('Fantasy') && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkBlue,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                Fantasy
              </Text>
            </View>
          )}
          {book.genres.includes('Historical') && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkYellow,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightYellow }}>
                Historical
              </Text>
            </View>
          )}
          {book.genres.includes('Personal Finance') && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                marginRight: SIZES.base,
                backgroundColor: COLORS.darkYellow,
                height: 40,
                borderRadius: SIZES.radius,
              }}>
              <Text style={{ ...FONTS.body3, color: COLORS.lightYellow }}>
                Personal Finance
              </Text>
            </View>
          )}
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
            marginTop: SIZES.padding,
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
              {book.description}
            </Text>
            {/*<HTMLView
              value={book.description}
              stylesheet={{ color: COLORS.white }}
            />*/}
          </ScrollView>
        </View>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* Like */}
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
              likeBook ? DeleteBooks(BookId) : addBooks();
            }
            console.log('Like');
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
            backgroundColor: COLORS.button,
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
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
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

const mapStateToProps = state => {
  console.log('state', state);
  return {};
};

export default connect(mapStateToProps, {})(BookPage);
