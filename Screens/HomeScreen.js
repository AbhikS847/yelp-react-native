import React,{useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const HomeScreen = ({navigation}) =>{
    
    const [search,setSearch] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        });
    };
    
    return(<>
        <SearchBar searchTerm={search} onSearchChange={newSearch => setSearch(newSearch)} onSearchSubmit={()=>{searchApi(search)}} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit pricier" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </>)
};

const styles = StyleSheet.create({
    main:{
        flex:1
    }
});

export default HomeScreen;