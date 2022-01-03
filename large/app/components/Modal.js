import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

const ModalItem = ({ data, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <Text style={styles.txt}>{data.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  txt: {
    padding: 10,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default ModalItem;
