import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavigationButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,

    alignItems: "center",
    backgroundColor: "rgb(45, 204, 48)",
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: "center",
    bottom: 20,
    borderColor: "white",
  },
});
export default NavigationButton;
