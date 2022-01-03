import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FormButton = ({ title, onpress, given }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: given }]}
      onPress={onpress}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  txt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default FormButton;
