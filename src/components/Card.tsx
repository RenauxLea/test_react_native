import { useNavigation } from "@react-navigation/native";
import React, { isValidElement } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Character } from "../screen/ListPage";

export type PropsCard = {
    character: Character,
    onPress : any
}
export const Card = (  character: Character )  => {
    const navigation = useNavigation();

    const isAlive = (status: string) => {
       return status == "Alive" ? true : false
    }

    return (
        <Pressable style={[styles.item,  isAlive(character.status) ? styles.isAlive : styles.isDead ]}
            onPress={() => navigation.navigate('Details' as never , {character: character} as never )}
        >
                <Image style={[styles.image,  isAlive(character.status) ? styles.isAlive : styles.isDeadImg ]} source={{uri :`${character.image}`}}></Image>
                <View style={styles.information}>
                    <Text style={styles.title}>{character.name}</Text>
                    <Text style={styles.species}>{character.species}</Text>
                </View>
        </Pressable>
    )
};

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      borderRadius: 5
      
    },
    title: {
      fontSize: 22,
      color: '#000000'
    },
    information: {
     flexDirection: "column",
     alignContent: "center"
    },
    image: {
      width: 100,
      height: 100,
      marginRight:10,
      borderRadius: 50
    },
    species: {
        fontSize: 16,
        color: '#000000'
    },
    isAlive: {
      
    },
    isDead: {
        backgroundColor: "#DCDCDC"
    },
    isDeadImg: {
        opacity: 0.3
    }
  });
  