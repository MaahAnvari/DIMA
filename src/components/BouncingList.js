import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  Animated, 
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
// const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
// const BACKDROP_HEIGHT = height * 0.65;
  

const BouncingList =(props) => {
    const scrollX = React.useRef( new Animated.Value(0)).current;

    renderItem = ({ item, index }) => 
  {
    // console.log('indeeex: ', index)
    const inputRange = [
      ( index - 1 ) * ITEM_SIZE,
      index * ITEM_SIZE,
      ( index + 1 ) * ITEM_SIZE,
        
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [ 0, -50, 0]
    })
    return(
      <View style ={{width: ITEM_SIZE, paddingTop:5, flexDirection:'row'}}>
      <Animated.View style ={{
          transform:[{translateY}],
          
          // fontFamily:'Roboto',
          height:ITEM_SIZE,
          // backgroundColor: '#fff',
          borderRadius:20,
          // marginVertical: 8,
          marginHorizontal: 10,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
          height: 1,
          width: 1
      }
      }}>
        {/* {console.log(item.artworkUrl100)} */}
        <Image style={{height:ITEM_SIZE, width: ITEM_SIZE*0.9, borderRadius:20}}
          source={{
            uri: item.artworkUrl100,
          }}
        ></Image>
        <Text style={{color:'#fff', fontSize: 15, alignSelf:'center'}}>{item.trackName}</Text>
      </Animated.View>
      </View>
    );
  };
    

    return (
        <View >
             <View style={{height:ITEM_SIZE*1.3}}>
             
             <Animated.FlatList
                 showsHorizontalScrollIndicator={false}
                 data={props.data}
                 renderItem={renderItem}
                 horizontal={true}
                 keyExtractor={item => item.trackId}
                 snapToInterval={ITEM_SIZE}
                 snapToAlignment='center'
                 decelerationRate={0}
                 bounces={false}
                 contentContainerStyle={{alignItems: 'center'}}
                 scrollEventThtottle={16}
                 onScroll={Animated.event(
                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                 { useNativeDriver: false }
                 )}
             />
     </View>
            
        </View>
     );
}


const mapStateToProps = ({ auth }) => {
    // console.log('state',auth)
    const { email, password, error } = auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {}
    )(BouncingList);
