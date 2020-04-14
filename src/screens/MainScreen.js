import React, {useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadFotos } from "../store/types";
import { FotosList } from "../components/FotosList";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFotos());
  }, [dispatch]);
  const allFotos = useSelector((state) => {
    return state.fotos.allFotos;
  });
  const loading = useSelector((state) => {
    return state.fotos.loadings;
  });
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const fotoHandler = (foto) => {
    return navigation.navigate("FotoScreen", {
      fotoId:foto.id,
      date:foto.created_at
    });
  };
  return <FotosList data={allFotos} onOpen={fotoHandler} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
