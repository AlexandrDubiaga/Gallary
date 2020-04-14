import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export const Foto = ({ onPress, foto }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress(foto)}
    >
      <Text style={styles.title}>{foto.alt_description}</Text>
      <View style={styles.foto}>
        <ImageBackground style={styles.image} source={{ uri: foto.urls.small }}>
         
        </ImageBackground>
        <Text style={styles.author}>Author: {foto.user.first_name}</Text>
      </View>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  foto: {
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height:250,
  },
  title: {
    color: "black",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    fontSize:17,
    fontFamily:'sans-regular',
    paddingVertical:5
  },
  author:{
    color: "black",
    textAlign: "right",
    backgroundColor: "rgba(0,0,0,0.10)",
    paddingRight:5,
    color:'#1E90FF',
    fontSize:17,
  }
});
