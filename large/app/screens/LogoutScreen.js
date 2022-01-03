import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Fixing from "../components/Fixing";
import { useContext } from "react";
import AuthContext from "../context/contextApi";
const LogoutScreen = (props) => {
  const authContext = useContext(AuthContext);
  const loggingOut = () => {
    authContext.setCurrrequester(null);
  };

  return (
    <Fixing>
      <TouchableOpacity onPress={loggingOut}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="logout" size={30} color="green" />
          <Text style={{ color: "green", fontSize: 20 }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </Fixing>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 50,
    justifyContent: "center",
    backgroundColor: "#f0eeeb",
    padding: 20,
    color: "green",
  },
});
export default LogoutScreen;
