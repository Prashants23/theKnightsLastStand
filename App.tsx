import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigator } from "./src/navigations/index";

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
