import {
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
} from "react-native";
import { useState } from "react";
import Fixing from "../components/Fixing";
import { authentication } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import AuthContext from "../context/contextApi";

export default BranchManagerLogin = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const onLogging = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );
      authContext.setCurrManager(user);
      // navigation.navigate("", { branch: route.params.branch });
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  return (
    <Fixing>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/piclogo.png")}
          style={{ width: 150, height: 200 }}
        />
        <View style={styles.inp}>
          <Text style={{ padding: 5 }}>{authContext.branchselecting}</Text>
        </View>
        <TextInput
          style={styles.inp}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.inp}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.main} onPress={onLogging}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fixing>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 40,
  },

  inp: {
    width: 300,
    borderWidth: 1,
    borderColor: "green",

    borderRadius: 15,

    fontSize: 15,
    color: "black",

    padding: 10,
    marginVertical: 10,
  },
  main: {
    // backgroundColor: "rgb(20, 227, 24)",
    backgroundColor: "rgb(60, 168, 50)",
    borderRadius: 25,
    marginVertical: 10,
    width: 150,
    padding: 10,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#fff",
  },
  last: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 17,
    color: "rgb(50, 116, 230)",
  },
});
