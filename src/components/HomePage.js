import React, { Component, useRef } from 'react';
import { View, Text, ImageBackground, FlatList, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
// import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import BouncingList from './BouncingList';

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

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
    
class HomePage extends Component {
    
    renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
    renderError() {
        // if (this.props.error) {
        //     return (
        //         <View style={{ backgroundColor: 'white' }}>
        //             <Text style={styles.errorTextStyle} >
        //                 {this.props.error}
        //             </Text>
        //         </View>
        //     );
        // }
    }


    


    render = () => {
        // const scrollX = useRef( new Animated.Value(0)).current;
        return (
           <View style={{backgroundColor: '#001120'}}>
             <ScrollView style={{backgroundColor: '#001120'}}>
              <View>
                <Text style={{color:'#fff'}}>Trending</Text>
                <BouncingList />
              </View>

              <View>
                <Text style={{color:'#fff'}}>Popular</Text>
                <ScrollView horizontal={true}    style={{height:330}}>
                  <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={true}
                  />
                </ScrollView>
              </View>
             </ScrollView>
               
           </View>
        );
    }
}

const styles = {
    item: {
        fontFamily:'Roboto',
        height:290,
        backgroundColor: '#FFF',
        borderRadius:10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
    }
    },
    title: {
        fontSize: 20,
    },
  };


const mapStateToProps = ({ auth }) => {
    console.log('state',auth)
    const { email, password, error } = auth;

    return { email, password, error };
};

export default connect(mapStateToProps, 
    {emailChanged, passwordChanged}
    )(HomePage);
