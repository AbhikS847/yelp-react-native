import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) =>{
    return(
        <View style={styles.box}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}></Image>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        padding:4,
        margin:4
    },
    imageStyle:{
        width:250,
        height:150,
        borderRadius:4
    },
    name:{
        fontWeight:'bold',
        fontSize:14
    }
});

export default ResultsDetail;