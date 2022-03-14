import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
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




const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d98',
      title: 'Forth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29g76',
      title: 'Fifth Item',
    },
  ];
  

const BouncingList =({}) => {
    const scrollX = React.useRef( new Animated.Value(0)).current;

    renderItem = ({ item, index }) => 
  {
    console.log('indeeex: ', index)
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
      <View style ={{width: ITEM_SIZE}}>
      <Animated.View style ={{
          transform:[{translateY}],
          fontFamily:'Roboto',
          height:ITEM_SIZE*1.2,
          backgroundColor: '#fff',
          borderRadius:20,
          marginVertical: 8,
          marginHorizontal: 10,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
          height: 1,
          width: 1
      }
      }}>
        <Text style={{color:'#000', fontSize: 20,}}>{item.title}</Text>
      </Animated.View>
      </View>
    );
  };
    

    return (
        <View >
            <Text style={{color:'#000'}}>Trending</Text>
             <View style={{height:ITEM_SIZE*1.2 +100}}>
             
             <Animated.FlatList
                 showsHorizontalScrollIndicator={false}
                 data={DATA}
                 renderItem={renderItem}
                 horizontal={true}
                 keyExtractor={item => item.id}
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
    console.log('state',auth)
    const { email, password, error } = auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {}
    )(BouncingList);
