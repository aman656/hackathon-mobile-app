import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { authentication, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Fixing from "../components/Fixing";
import { useState } from "react";

export default Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onCreating = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );
      // await addDoc(collectionRef, {
      //   id: user.user.uid,
      //   name: username,
      //   email: email,
      //   profilePic: await getRandomProfile(),
      // });
      navigation.navigate("userlogin");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
      setLoading(false);
    }
  };
  return (
    <Fixing>
      <View style={styles.container}>
        <Image
          source={require("../assets/piclogo.png")}
          style={{ width: 150, height: 200 }}
        />

        <TextInput
          style={styles.inp}
          placeholder="Username"
          onChangeText={(value) => setName(value)}
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

        <TouchableOpacity style={styles.main} onPress={onCreating}>
          <Text style={styles.button}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("userlogin")}>
          <Text style={styles.last}>Already a user? Login</Text>
        </TouchableOpacity>
      </View>
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
