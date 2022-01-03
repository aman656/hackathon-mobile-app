import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  Button,
} from "react-native";
import Fixing from "./Fixing";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const branches = [
  {
    id: "1",

    title: "Aliabad",
  },
  {
    id: "2",

    title: "Numaish chowrangi",
  },
  {
    id: "3",

    title: "Saylani house phase 2",
  },
  {
    id: "4",

    title: "Touheed commercial",
  },
  {
    id: "5",

    title: "Jinnah avenue",
  },
  {
    id: "6",

    title: "Johar chowrangi",
  },
  {
    id: "7",

    title: "Johar chowrangi 2",
  },
  {
    id: "8",

    title: "Hill park",
  },
];

const BranchSelector = ({ show, onPress, branch, onclose, naming }) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.categ}>
          <Text style={{ padding: 5, fontSize: 18 }}>
            {naming ? naming : "Select Your Branch"}
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={show} animationType="slide">
        <Fixing>
          <Button title="Close" onPress={onclose} />
          <FlatList
            data={branches}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Fixing>
                <TouchableWithoutFeedback onPress={() => branch(item.title)}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      backgroundColor: "#f0eeeb",
                      padding: 10,
                      borderRadius: 15,
                      color: "#0c0c0c",
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableWithoutFeedback>
              </Fixing>
            )}
          />
        </Fixing>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  categ: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    color: "#0c0c0c",
    backgroundColor: "#f0eeeb",
    borderRadius: 25,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
    paddingRight: 20,
  },
});
export default BranchSelector;
