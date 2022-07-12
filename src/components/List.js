import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableHighlight, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

// definition of the Item, which will be rendered in the FlatList
const Item = ({item} ) => (
  <TouchableHighlight style={styles.item} onPress= {() => {
    
    // this.props.selectBook(item.trackCensoredName)
    Actions.bookPage({item, free: false, url:''})
    }}>
      <View style={{flexDirection:'row', alignItems:'center', paddingBottom:10}}>
    <Image style={{height:ITEM_SIZE*0.8, width: ITEM_SIZE*0.6, borderRadius:20, paddingBottom:10}}
        source={{
          uri: item.artworkUrl100,
        }}
      ></Image>
      <Text style={{color:'#fff', paddingHorizontal: 10, width:'60%'}}> {item.trackCensoredName}</Text>
      </View>
  </TouchableHighlight>
);

// the filter
const List = props => {
  const { searchPhrase, data } = props;

  const renderItem = ({ item }) => {
    // when no input, show all
    console.log('iteeeeem:',item )
    
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <Text style={{borderRadius:ITEM_SIZE*0.05, marginTop:ITEM_SIZE*0.05, borderWidth:1, borderColor:'#fff', padding:ITEM_SIZE*0.1,  alignSelf:'center', color:'red', fontFamily:'Abduco',fontSize: ITEM_SIZE*0.1}}>Your Result for {props.searchPhrase} </Text>
        <FlatList
          //numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '100%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
    color: COLORS.orange,
  },
  details: {
    fontSize: 15,
    color: COLORS.orange,
  },
});
