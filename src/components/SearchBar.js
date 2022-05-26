import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants';

import Icon, { Icons } from '../../constants/Icons';

const SearchBar = props => {
  const { clicked, searchPhrase, setSearchPhrase, setClicked } = props;

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* search Icon */}
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked ? (
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setSearchPhrase('');
              setClicked(false);
            }}>
            <Icon
              type={Icons.Ionicons}
              name="arrow-back"
              size={20}
              color={COLORS.searchBarItems}
            />
          </TouchableOpacity>
        ) : (
          <Icon
            type={Icons.Feather}
            name="search"
            size={20}
            color={COLORS.searchBarItems}
            style={{ marginLeft: 1 }}
          />
        )}

        {/* Input field */}
        <TextInput
          style={styles.input}
          color={COLORS.searchBarItems}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <TouchableOpacity
            onPress={() => {
              setSearchPhrase('');
            }}>
            <Icon
              type={Icons.Entypo}
              name="cross"
              size={20}
              color={COLORS.searchBarItems}
              style={{ padding: 1 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    paddingTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  backBtn: {
    paddingRight: 10,
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.searchBar,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
