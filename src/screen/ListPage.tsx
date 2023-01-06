
 import React, { SetStateAction, useEffect, useState } from 'react';
 import {
   FlatList,
   Image,
   ListRenderItem,
   Pressable,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
 } from 'react-native';
import { Card } from '../components/Card';

import { withNavigation } from 'react-navigation';
import { launchCamera } from 'react-native-image-picker';

 export type Character = {
   id: string,
   name: string,
   species: string,
   image: string,
   status: string,
 }
 
 const ListPage = () => {
    const [searchName, setSearchName] = useState("");
    const [characters, setCharacters] = useState<Character[]>();
    const [photo, setPhoto] = useState("toto")
   
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
          .then((res) => res.json())
          .then(
            (apiResults) => {
              setCharacters(apiResults.results);
            },
            (error) => { }
          );
      }, []);
   
   const renderItem : ListRenderItem<Character> = ( {item} ) => {
        if (searchName === "") {
            return <Card name={item.name} id={item.id} species={item.species} image={item.image} status={item.status} />
        }
        
        if (item.name.toUpperCase().includes(searchName.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Card name={item.name} id={item.id} species={item.species} image={item.image} status={item.status} />;
        }
        return <></>
       
     };

     
 
   return (
       <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'light-content' }
            />
            
            <FlatList
            ListHeaderComponent={
                <TextInput 
                    style={styles.input}  
                    editable
                    placeholder='Rechercher un personnage'
                    maxLength={40}
                    placeholderTextColor="black"
                    value={searchName}
                    onChangeText={setSearchName}
                >
                </TextInput>
            }
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id}
           />
           <Pressable onPress={async () => {
               const result : any = await launchCamera({mediaType: 'photo'});
               setPhoto(result.assets[0].uri)
            }}
            >
             <Text style= {styles.text}>Prendre une photo</Text>
            <Image source={photo !== undefined ? {uri: photo} : undefined} style= {styles.photo}></Image>
           </Pressable>
       </SafeAreaView>
    
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight || 0,
   },
   input: {
    backgroundColor: 'white',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 10,
    fontColor: "black",
    color: "black",
    borderWidth: 0.2,
    borderRadius: 5
   },
   photo: {
    width: 100,
    height: 100,
   },
   text: {
    fontSize: 22,
    color: '#000000',
    marginBottom: 30
   }
  
 });
 
 export default withNavigation(ListPage);
 