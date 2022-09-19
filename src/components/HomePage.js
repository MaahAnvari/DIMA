import React, {Component, useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged, searchBook} from '../actions';
import EbookMainView from './EbookMainView';
import AudioMainView from './AudioMainView';
import Feather from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: 'eBook',
      search: false,
    };
  }

  onSearchChange(text) {
    this.props.searchChanged(text);
  }

  submitSearch() {
    this.props.searchBook({
      media: 'ebook',
      attribute: '',
      term: this.props.searchKey,
      country: '',
      sort: '',
      searchKey: '1',
    });
    // Actions.searchPage();
  }

  render = () => {
    // const scrollX = useRef( new Animated.Value(0)).current;
    return (
      <View
        style={{
          backgroundColor: '#001120',
          justifyContent: 'flex-start',
          paddingBottom: 100,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#0C1E2F',
            borderWidth: 1,
            height: ITEM_SIZE * 0.25,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({search: !this.state.search})}
            style={{
              paddingRight: ITEM_SIZE * 0.25,
              marginTop: ITEM_SIZE * 0.05,
              height: ITEM_SIZE * 0.2,
              width: ITEM_SIZE * 0.45,
              justifyContent: 'center',
            }}>
            <Feather
              name="search"
              style={{transform: [{scaleX: -1}, {scaleY: 1}]}}
              size={ITEM_SIZE * 0.1}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          {this.state.search ? (
            <TextInput
              clear
              value={this.props.email}
              placeholder="write here ..."
              placeholderTextColor={'regrayd'}
              style={{
                paddingLeft: 20,
                borderWidth: 1,
                width: ITEM_SIZE,
                fontFamily: 'Ornalia',
                fontSize: 20,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#C3B0B0',
                borderColor: '#3D1214',
                shadowColor: '#3D1214',
                shadowOpacity: 0.26,
                shadowOffset: {width: 10, height: 5},
                shadowRadius: 10,
                elevation: 20,
              }}
              last="true"
              //   type='text'
              maxLength={30}
              onChangeText={this.onSearchChange.bind(this)}
              onSubmitEditing={() => this.submitSearch()}

              //   onFocus ={() => this.setState({value : 1 })}
            />
          ) : (
            // <View style={{ backgroundColor:'#ADADAD', marginLeft:-ITEM_SIZE*0.2, width: ITEM_SIZE*1.3, borderColor:'#B90020', borderWidth:1, borderRadius:252}}></View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  marginTop: 2,
                  justifyContent: 'center',
                  borderRadius: 20,
                  borderWidth: this.state.open == 'eBook' ? 1 : 0,
                  borderColor: 'red',
                  height: ITEM_SIZE * 0.2,
                  width: ITEM_SIZE * 0.5,
                  color: '#000',
                }}
                onPress={() => this.setState({open: 'eBook'})}>
                <Text
                  style={{
                    color: '#fff',
                    alignSelf: 'center',
                    fontWeight: '300',
                    fontFamily: 'AntDesign',
                    fontSize: ITEM_SIZE * 0.07,
                  }}>
                  Ebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 2,
                  justifyContent: 'center',
                  borderRadius: 20,
                  borderWidth: this.state.open == 'audioBook' ? 1 : 0,
                  borderColor: 'red',
                  height: ITEM_SIZE * 0.2,
                  width: ITEM_SIZE * 0.5,
                  color: '#000',
                }}
                onPress={() => this.setState({open: 'audioBook'})}>
                <Text
                  style={{
                    color: '#fff',
                    padding: 10,
                    alignSelf: 'center',
                    fontWeight: '300',
                    fontSize: ITEM_SIZE * 0.07,
                  }}>
                  audio
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            testID="aboutButton"
            onPress={() => Actions.aboutPage()}
            style={{
              paddingRight: ITEM_SIZE * 0.25,
              marginTop: ITEM_SIZE * 0.05,
              height: ITEM_SIZE * 0.2,
              width: ITEM_SIZE * 0.45,
              justifyContent: 'center',
            }}>
            <Feather
              name="info"
              style={{alignSelf: 'flex-end'}}
              size={ITEM_SIZE * 0.1}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
        {this.state.open == 'audioBook' ? <AudioMainView /> : <EbookMainView />}
      </View>
    );
  };
}
const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.5 : width * 0.52;

const mapStateToProps = state => {
  console.log('state', state);
  const {searchKey, genre, top10, search, country} = state.ebook;

  return {searchKey, top10, search, genre, country};
};

export default connect(mapStateToProps, {searchChanged, searchBook})(HomePage);
