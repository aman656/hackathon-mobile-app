import {
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { authentication } from "../firebase";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../context/contextApi";

export default Login = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogging = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );
      authContext.setCurrrequester(user);
      console.log(user);
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/piclogo.png")}
        style={{ width: 150, height: 200 }}
      />
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
      <TouchableOpacity onPress={() => navigation.navigate("usersignup")}>
        <Text style={styles.last}>Don't have an account yet? Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
