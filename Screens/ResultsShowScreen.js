import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route, navigation}) =>{
    const [result, setResult] = useState(null);
    const {id} = route.params;

    const getResult = async(id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    
    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <>
            <Text style={{padding:8, fontWeight:'bold', fontSize:24}}>{result.name}</Text>
            <FlatList data={result.photos} keyExtracto={(photo)=> photo} 
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri: item}}/>
            }}>
            </FlatList>
        </>
    )
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        padding:4,
        margin:4,
        borderWidth:2,
        borderColor:'#00ef8e'
    }
});

export default ResultsShowScreen;