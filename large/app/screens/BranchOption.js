import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import BranchSelector from "../components/BranchSelector";
import Fixing from "../components/Fixing";
import AuthContext from "../context/contextApi";

const BranchOption = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [branchName, setBranchName] = useState(null);
  const onPress = () => {
    setShow(true);
  };
  const selection = (item) => {
    setBranchName(item);
    setShow(false);
  };
  const onclose = () => {
    setShow(false);
  };
  const submitHandler = () => {
    authContext.setBranchSelecting(branchName);
    navigation.navigate("branch");
  };
  return (
    <Fixing>
      <BranchSelector
        show={show}
        onPress={onPress}
        onclose={onclose}
        branch={selection}
        naming={branchName}
      />
      <TouchableOpacity style={styles.btn} onPress={submitHandler}>
        <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
      </TouchableOpacity>
    </Fixing>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: "100%",

    alignItems: "center",
    backgroundColor: "rgb(60, 168, 50)",
    borderRadius: 15,
    padding: 15,
  },
});
export default BranchOption;
