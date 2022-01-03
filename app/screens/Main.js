import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import Fixing from "../components/Fixing";

export default Main = ({ navigation }) => {
  return (
    <Fixing>
      <View style={styles.container}>
        <Image
          source={require("../assets/piclogo.png")}
          style={{ width: 250, height: 220 }}
        />
        <View style={styles.mid}>
          <TouchableOpacity style={styles.main}>
            <Text
              style={styles.btn}
              onPress={() => navigation.navigate("branchselect")}
            >
              Login as Branch Manager
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.main}>
            <Text
              style={styles.btn}
              onPress={() => navigation.navigate("userlogin")}
            >
              Login as Requester
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fixing>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 100,

    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    marginTop: 40,
  },
  main: {
    // backgroundColor: "rgb(20, 227, 24)",
    backgroundColor: "rgb(45, 204, 48)",
    borderRadius: 25,
    marginVertical: 10,
    textAlign: "center",
    width: 250,
    padding: 10,
  },
  btn: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  },
});
