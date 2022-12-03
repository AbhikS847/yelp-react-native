import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({title, results, navigation}) =>{

    if(!results.length){
        return null;
    }
    
    return(
        <View style={{padding:6, margin:2}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem = {({item})=>{
                return (<TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow', { id: item.id})}}><ResultsDetail result={item}/></TouchableOpacity>);
            }}
             />
            <Text>Results : {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'700'
    }
});

export default ResultsList;