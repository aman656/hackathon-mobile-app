import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Fixing = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.containe, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containe: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    padding: 10,
    // marginTop: 10,
    backgroundColor: "#f5f5f5",
  },
});

export default Fixing;
