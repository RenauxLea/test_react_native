
 import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
 import {
     Image,
   StatusBar,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
import { Character } from './ListPage';
 

export const CharacterDetails = () => {
    const route : RouteProp<{ params: { character : Character } }, 'params'> = useRoute();
    const {character} = route.params;
   
   return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'light-content' }
            />
            <Image style={styles.image} source={{uri :`${character.image}`}}></Image>
            <View style={styles.information}>
                <Text style={styles.title}>{character.name}</Text>
                <Text style={styles.species}>{character.species}</Text>
            </View>
        </View>
    
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight || 0,
   },
   title: {
    fontSize: 30,
    color: '#000000'
  },
  information: {
    flex: 1,
    padding: 20,
   flexDirection: "column",
   alignContent: "center"
  },
  image: {
    flex: 1,
    margin: 10
  },
  species: {
      fontSize: 22,
      color: '#000000'
  }
 
 });
 
 