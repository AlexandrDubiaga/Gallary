import React from "react";
import { StyleSheet, View, Image,ActivityIndicator} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const FotoScreen = ({ route, navigation }) => {
  const { fotoId,date } = route.params;
  const dispatch = useDispatch();
  const foto = useSelector((state) =>
    state.fotos.allFotos.find((f) => f.id === fotoId)
  );
  if (!foto) {
    return null;
  }
  navigation.setOptions({
    title: "Photo created: " + new Date(date).toLocaleDateString(),
  });
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image resizeMode="stretch" source={{ uri: foto.urls.full }}  style={styles.image} />
      </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});