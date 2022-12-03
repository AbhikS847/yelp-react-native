import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBar = ({searchTerm, onSearchChange, onSearchSubmit}) =>{
    return(
        <View style={styles.main}>
        <AntDesign style={styles.iconStyle} name="search1" color="blue" />
            <TextInput 
            autoCapitalize='none'
            autoCorrect = {false}
            style={styles.searchBox} placeholder="Enter a restaurant name"
            value = {searchTerm}
            onChangeText={onSearchChange}
            onEndEditing={onSearchSubmit}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#fff',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        borderColor:'#0080ff',
        borderWidth:2,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    searchBox:{
        padding: 4,
        flex:1,
        height:50,
        fontSize:18
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center',

    }
});

export default SearchBar;