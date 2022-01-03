import { View, StyleSheet } from "react-native";

const Separator = () => {
  return <View style={styles.seperate} />;
};

const styles = StyleSheet.create({
  seperate: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default Separator;
