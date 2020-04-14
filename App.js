import React, { useState } from "react";
import { MainScreenNavigator } from "./src/navigation/Navigation";
import { StyleSheet} from "react-native";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { fonts } from "./src/fonts";
import { store } from "./src/store/index";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MainScreenNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
