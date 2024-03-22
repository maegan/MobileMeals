import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    flex: 0.05,
    backgroundColor: "green",
    padding: 10,
    justifyContent: "center",
  },
  list: {
    flex: 0.95,
    backgroundColor: "blue",
    padding: 10,
    justifyContent: "center",
  },
});
