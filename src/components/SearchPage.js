import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { COLORS } from '../../constants';
import List from './List';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';


class SearchPage extends Component{
render() {
  // const [searchPhrase, setSearchPhrase] = useState('');
  // const [clicked, setClicked] = useState(false);
  // const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  // useEffect(() => {
  //   const getData = async () => {
  //     const apiResponse = await fetch(
  //       'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages',
  //     );
  //     const data = await apiResponse.json();
  //     setFakeData(data);
  //   };
  //   getData();
  // }, []);

  return (
    <SafeAreaView style={styles.root}>
      {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      /> */}
      {console.log('Searchhhhhh', this.props.searchKey)}
      <List
        searchPhrase={this.props.searchKey}
        data={this.props.search}
        // setClicked={setClicked}
      />
    </SafeAreaView>
  );
};
}


const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: COLORS.orange,
  },
});

const mapStateToProps = (state) => {
  console.log('state search',state.ebook.search)
    const { email, password, error } = state.auth;
    const { genre, top10, search, country, newB, searchKey } = state.ebook;

    return { email, password, error, top10, search, genre, country, newB, searchKey };

};

export default connect(mapStateToProps, 
  {}
  )(SearchPage);
