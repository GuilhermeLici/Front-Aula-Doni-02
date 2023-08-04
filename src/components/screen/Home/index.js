import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, FlatList } from "react-native/types";

import bannerMovies from '../../components/bannerMovies';

import Header from "../../components/header";

import SearchBar from './src/components/searchbar';

import cardFilmes from "./src/components/cardMovies";

import App from "../../../../App";

import styles from "../../bannerMovies/style";


 

export default funcition App() {

    return (

        <View style={styles.container}>

        <Header></Header>

        <SearchBar></SearchBar>

        <bannerMovies></bannerMovies>

        </View>

    )

}