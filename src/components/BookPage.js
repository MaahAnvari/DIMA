import React, { useState, useEffect } from 'react';
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
import storage, { firebase, getStorage, ref } from '@react-native-firebase/storage';

import { Actions } from 'react-native-router-flux';
import {downloadBook, deleteFavoriteBook, updateFavoriteBooks} from '../actions'

import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import { Icon, Icons, FONTS, COLORS, SIZES, images } from '../../constants';
// import AudioPlayer from './AudioPlayer';



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

  var urll = null;
function downloadB() {
  const store= firebase.storage();
  // console.log(store)
  const gsReference = store.ref('Books/'+props.item.trackCensoredName+'.pdf').getDownloadURL().then(url => {
    // console.log('urlll', url)
  urll = url;   
  
  // console.log(urll)
  });
}

  const book = props.item;
  const [BId, setBId] = useState(null);
  const [FfavId, setFfav] = useState(true);
  const [likeBook, setLikeBook] = useState(false);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);

  function fetchLike() {

    const searchIndex = props.favorites.findIndex((b) => b.trackCensoredName == book.trackCensoredName);
    if (searchIndex != -1) {
      // setBId(doc.id);
      setLikeBook(true);
    }
    setFfav(false)

  };
// );

  //Add Books
  async function AddBooks() {
    var fav = props.favorites;
    fav.push(book)
    
    props.deleteFavoriteBook(fav)
    alert('Book Added !');
    setLikeBook(true);
    // console.log('adddddddddddddddddddd', fav)
    props.updateFavoriteBooks({id: props.id, favorites: fav})
  }

  //Delete Books
  async function DeleteBooks() {
    var fav = props.favorites;
    var myIndex = props.favorites.findIndex((b) => b.trackCensoredName == book.trackCensoredName)
    
    if (myIndex != -1) {
        fav.splice(myIndex, 1);
    }
    console.log('faaaaaaav',fav)
    props.deleteFavoriteBook(fav)
    alert('Book Deleted !');
    setLikeBook(false);
    props.updateFavoriteBooks({id: props.id, favorites: fav})
    
  }

 

  function renderBookInfoSection() {
    FfavId ?  fetchLike() : null;
    downloadB();
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
            {book.trackCensoredName.substr(0, 32)}
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
        {/* <AudioPlayer /> */}
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
              {book.description.replace(/[`~0-9!@#$%^&*_|+\-=?'"<>\{\}\[\]\\\/]/gi, '')}
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
        {props.free ? null : 
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
              {
                likeBook ? DeleteBooks() : AddBooks()
              }
            }}>

            
            <Icon
              type={Icons.AntDesign}
              name={likeBook ? 'heart' : 'hearto'}
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>             
        }
        

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
          onPress={() => 
            Actions.downloadPage({url: urll})}>
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
  const { email, password, error, id, favorites } = state.auth;
  // const { } = state.ebook;
  return {email, password, error, id, favorites};
};

export default connect(mapStateToProps, { downloadBook, deleteFavoriteBook, updateFavoriteBooks})(BookPage);