import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Fixing from "../components/Fixing";

const ManagerSearchScree = ({ navigation, route }) => {
  return (
    <Fixing>
      <TextInput
        style={{
          width: "100%",
          borderWidth: 2,
          borderColor: "green",
          marginVertical: 30,
          padding: 10,
          fontSize: 18,
        }}
        placeholder="Enter serial number"
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "green",
          width: "100%",
          padding: 10,
        }}
      >
        <Text style={{ color: "white" }}>Search by Serial Number</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 20 }}>
        No request Yet.
      </Text>
    </Fixing>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default ManagerSearchScree;
