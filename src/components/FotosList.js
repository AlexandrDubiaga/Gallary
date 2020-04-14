import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert,FlatList } from "react-native";
import { Foto } from "../components/Foto";

export const FotosList = ({data,onOpen}) => {
  if(!data.length){
    return <View style={styles.wrapper}>
      <Text style={styles.noItems}>Фотографий  пока нету!</Text>
    </View>
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(foto) => {
          return foto.id.toString();
        }}
        renderItem={({ item }) => (
          <Foto
            onPress={onOpen}
            foto={item}
          />
        )}
      />
     
    </View>
  );
};



const styles = StyleSheet.create({
    wrapper: {
      padding: 10,
    },
    noItems:{
      textAlign:'center',
      marginVertical:10,
      fontSize:18
    }
  });