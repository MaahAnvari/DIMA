import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { saveChanges, nameChanged, usernameChanged, sexChanged, addGenre } from '../actions';

import Feather from 'react-native-vector-icons/Feather';
import ProfileButton from './ProfileButton';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
  

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width : width * 0.9;


const Item = (item) => (
  <TouchableHighlight onPress= {() => {
    this.setState({
      placeholderG: item.label
  })
  this.props.addGenre(item.value);
  }} >
    <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Text style={{color:'#fff', margin: 2, fontFamily:'Ornalia'}}>
         {item.item}
        </Text>
        {console.log(item.item)}
        <Feather name="delete"size={15} color="#FFFFFF" />
    </View>
  </TouchableHighlight>

);


class ProfileForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          openG: false,
          openS: false,
          value: null,
          placeholderS:'Sex',
          placeholderG:'Genre',
          visible: false,
        //   items: [{...}, ...]
        };
      }
    

    onUsernameChange(text) {
        this.props.usernameChanged(text); 
    }

    onNameChange(text) {
        this.props.nameChanged(text); 
    }

    onSexChange(item) {
        console.log(item)
        this.setState({
            placeholderS: item.label
        })
        this.props.sexChanged(item.value);
    }
    onGenreChange(item) {
        console.log(item)
        this.setState({
            placeholderG: item.label
        })
        this.props.addGenre(item.value);
        // this.props.sexChanged(text);
    }

    
    onSubButtonPress() {
        console.log('idddd', this.props.id)
        this.setState({visible: true})
      // this.props.saveChanges({name: this.props.name, sex:this.props.sex, id: this.props.id, genre: this.props.genre })
      // Actions.homePage();
    }

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

    setOpenSex() {
        this.setState({
          openS: !this.state.openS
        });
        console.log('opeeeen',this.state.openS)
      } 
    setOpenGenre() {
        this.setState({
          openG: !this.state.openG
        });
        console.log('opeeeen',this.state.openG)
      } 
    setOpen() {
        this.setState({
          open: !this.state.open
        });
        console.log('opeeeen',this.state.open)
      } 

      setValue(callback) {
          console.log('set valueeee',callback)
      }

      renderItem = ({ item }) => (
        // console.log(item)
        <TouchableHighlight onPress= {() => {
            this.setState({
              placeholderG: item.label
          })
          this.props.addGenre(item);
          }} >
            <View style={{flexDirection: 'row', alignItems:'center', alignItems:'center'}}>
                <Text style={{color:'#fff', margin: 10, }}>
                {item}
                </Text>
                {console.log(item)}
                <Feather name="arrow-left-circle"size={15} color="#FFFFFF" />
            </View>
        </TouchableHighlight>
      );

    render() {
        return (
           <ScrollView style={{backgroundColor: '#001120', height:'100%', paddingBottom:100}}>
            <Dialog
              visible={this.state.visible}
              // dialogStyle = {{height:200, width: 100, fontSize:20 }}
              footer={
                <DialogFooter>
                  <DialogButton
                      text="CANCEL"
                      textStyle = {{fontSize: 10}}
                      onPress={() => { this.setState({visible: false}) }}
                    />
                  
                  <DialogButton
                  textStyle = {{fontSize: 10}}
                    text="OK"
                    onPress={() => {
                       this.props.saveChanges({name: this.props.name, sex:this.props.sex, id: this.props.id, genre: this.props.genre })
                       Actions.homePage();
                       this.setState({visible: false})
                    }}
                  />
                </DialogFooter>
              }
            >
              <DialogContent style={{justifyContent: 'center', alignItems: 'center'}}>

                  <Text>Are you sure you want to save changes?</Text>
                
              </DialogContent>
            </Dialog>
             <View style={{backgroundColor: 'rgba(178,33,33,0.3)', borderBottomLeftRadius:20, borderBottomRightRadius:20, height:ITEM_SIZE*0.8, width: '100%', paddingVertical: -20}}></View>

             <View style={{
                 marginTop:ITEM_SIZE*-0.4, justifyContent:'center', borderColor:'rgba(0,17, 32, 0.4)',backgroundColor:'rgba(141,27,27,0.9)', borderWidth:5, borderRadius:ITEM_SIZE*0.5, height:ITEM_SIZE*0.5, width:ITEM_SIZE*0.5, alignSelf:'center'
                 
             }}>
               <Feather name="user" style={{ alignSelf:'center' }} size={ITEM_SIZE*0.3} color="#fff" />
               
            </View>
               
               <Text style={{color:'#fff',fontSize:30, alignSelf:'center', marginTop: 5, marginBottom:10}}>@{this.props.name}</Text>
               <Text style={{ alignSelf:'center', color:'#7C7F81', fontFamily:'Ornalia'}}> {this.props.username} </Text>
               <View style ={{ paddingHorizontal:10, paddingVertical:20, flexDirection:'row', justifyContent:'space-between'}}>

                    <DropDownPicker
                      style={{width:ITEM_SIZE*0.5}}
                      open={this.state.openS} 
                      labelStyle={{
                          fontWeight: "bold"
                        }}
                        theme="DARK"
                        dropDownContainerStyle={{
                          width:ITEM_SIZE
                        }}
                      value={this.state.value}
                      placeholder={this.props.sex}
                      loading={true}
                      listMode='SCROLLVIEW'
                      items={[
                          {label: '-', value: 'Nothing'},
                          {label: 'Female', value: 'Female'},
                          {label: 'Male', value: 'Male'},
                        ]}
                      setOpen={() => this.setOpenSex()}
                      onSelectItem={(item) => {
                          this.onSexChange(item)
                        }}
                      // setValue={this.setValue()}
                      // setItems={(value)=> console.log('iteeem',value)}
                      activityIndicatorColor="red"
                      activityIndicatorSize={30}
                />
                <TextInput
                    clear
                    value={this.props.name}
                    // placeholder="write your name ..."
                    placeholderTextColor={'#fff'}
                    style={{marginLeft:-ITEM_SIZE, paddingLeft:10, color:'#fff' , width: ITEM_SIZE*0.5, borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor: 'rgba(178,33,33,0.43)'}}
                        last= 'true'
                    //   type='text'
                    maxLength= {30}
                    onChangeText={this.onNameChange.bind(this)}
                    //   onFocus ={() => this.setState({value : 1 })}
                    />
               </View>
               <View style={{padding:10, }}>
                
               </View>
               <View style={{padding:10, flexDirection: 'row', justifyContent:'space-between' }}>
                 {/* <Text style={{ color:'#fff', marginBottom:10, fontFamily:'Ornalia'}}> I am Interested in : </Text> */}
                 <View 
                  style={{
                    width:ITEM_SIZE*0.5,
                    borderRadius:10,
                    backgroundColor: 'rgba(178,33,33,0.4)'
                  }}
                  >
                    {console.log('genreeeee', this.props.genre)}
                    <FlatList
                        data={this.props.genre}
                        renderItem={this.renderItem}
                        // horizontal={true}
                        keyExtractor={item => console.log()}
                        showsHorizontalScrollIndicator={true}
                    />
                  </View>
                  
                  
                <DropDownPicker
                style={{width:ITEM_SIZE*0.5}}
                    open={this.state.openG} 
                    labelStyle={{ fontWeight: "bold"}}
                    theme="DARK"
                    dropDownContainerStyle={{ width:ITEM_SIZE*0.5 }}
                    value={this.state.value}
                    // multiple={true}
                    // max={20}
                    // min={0}
                    placeholder={this.state.placeholderG}
                    loading={true}
                    listMode='SCROLLVIEW'
                    items={[
                        {label: 'Fiction', value: 'Fiction'},
                        {label: 'Action', value: 'Action'},
                        {label: 'Romance', value: 'Romance'},
                        {label: 'Science', value: 'Science'},
                        {label: 'Dystopian', value: 'Dystopian'},
                        {label: 'Adventure', value: 'Adventure'},
                        {label: 'Horror', value: 'Horror'},
                        {label: 'Mystery', value: 'Mystery'},
                        {label: 'Thriller', value: 'Thriller'},
                        {label: 'Suspense', value: 'Suspense'},
                        {label: 'Historical', value: 'Historical'},
                        {label: 'Women’s Fiction', value: 'Women’s Fiction'},
                        {label: 'LGBTQ+', value: 'LGBTQ+'},
                        {label: 'Contemporary Fiction', value: 'Contemporary Fiction'},
                        {label: 'Literary Fiction', value: 'Literary Fiction'},
                        {label: 'Magical Realism', value: 'Magical Realism'},
                        {label: 'Graphic Novel', value: 'Graphic Novel'},
                        {label: 'Short Story', value: 'Short Story'},
                        {label: 'Young Adult', value: 'Young Adult'},
                        {label: 'New Adult ', value: 'New Adult '},
                        {label: 'Children’s', value: 'Children’s'},
                        {label: 'Biography', value: 'Biography'},
                        {label: 'Art', value: 'Art'},
                        {label: 'Travel', value: 'Travel'},
                        {label: 'True Crime', value: 'True Crime'},
                      ]}
                    setOpen={() => this.setOpenGenre()}
                    onSelectItem={(item) => {this.onGenreChange(item) }}
                    activityIndicatorColor="red"
                    activityIndicatorSize={30}
                />
               </View>
                                
               <ProfileButton 
                            style={{justifyContent:'center', marginBottom:100, alignSelf:'flex-end', backgroundColor:'#EE1520', borderColor:'#000', borderRadius:15, shadowColor: '#3D1214', shadowOffset: { width: 10, height: 5},shadowRadius: 10,elevation: 20, }} 
                            Name='Save changes'
                            onPress={this.onSubButtonPress.bind(this)} />
               
           </ScrollView>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      margin: 10,
      marginTop: 30,
      alignItems: "center",
      padding: 30,
    },
  };


const mapStateToProps = (state) => {
    console.log('state',state)
    const { email, password, error, name, sex, id, username, genre } = state.auth;
    // const {  } = state.user;

    return { email, password, error, genre, name, sex, id, username };
};

export default connect(mapStateToProps, 
    {nameChanged, usernameChanged, sexChanged, addGenre, saveChanges}
    )(ProfileForm);
