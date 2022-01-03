import {
  TextInput,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
  Alert,
  Modal,
  FlatList,
  Button,
  LogBox,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Fixing from "../components/Fixing";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import FormButton from "../components/FormButton";
import Separator from "../components/Seperator";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const collectionRef = collection(db, "Pending");

const durationList = [
  {
    id: 1,
    time: "Monthly",
  },
  {
    id: 2,
    time: "Daily 1 Time",
  },
  {
    id: 3,
    time: "Daily 2 Times",
  },
  {
    id: 4,
    time: "Daily 3 Times",
  },
];

const UserForm = ({ route }) => {
  LogBox.ignoreAllLogs();
  const [frontimage, setFrontImage] = useState(null);
  const [backimage, setBackImage] = useState(null);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cnic, setCnic] = useState();
  const [monthlyincome, setMonthlyIncome] = useState();
  const [doh, setDoh] = useState();
  const [nofamilymembers, setFamilyMembers] = useState();

  const submitHandler = async () => {
    try {
      await setDoc(doc(db, "Pending", cnic), {
        name: name,
        age,
        cnic,
        monthlyincome,
        durationofhelp: doh,
        familymembers: nofamilymembers,
        branchSelected: route.params.selectedBranch,
      });
      Alert.alert("Form Submitted Successfully");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
    setFrontImage(null);
    setBackImage(null);
    setCnic();
    setName("");
    setAge();
    setDoh();
    setFamilyMembers();
    setMonthlyIncome();
  };

  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestCameraPermissionsAsync();
      if (!result.granted) {
        alert("You need to give permission in order to proceed");
      }
    };
    requestPermission();
  }, []);
  const handlefrontSelect = () => {
    if (!frontimage) {
      frontImageSubmit();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete?", [
        { text: "Yes", onPress: () => setFrontImage(null) },
        { text: "No" },
      ]);
    }
  };
  const handlebackSelect = () => {
    if (!backimage) {
      backImageSubmit();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete?", [
        { text: "Yes", onPress: () => setBackImage(null) },
        { text: "No" },
      ]);
    }
  };
  const frontImageSubmit = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!res.cancelled) {
        setFrontImage(res.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const backImageSubmit = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!res.cancelled) {
        setBackImage(res.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fixing>
      <View style={styles.top}>
        <TouchableWithoutFeedback onPress={handlefrontSelect}>
          <View style={styles.container}>
            {frontimage && (
              <Image source={{ uri: frontimage }} style={styles.img} />
            )}
            {!frontimage && (
              <MaterialCommunityIcons name="camera" color="#0c0c0c" size={30} />
            )}
            {!frontimage && <Text style={styles.txt}>Front Side</Text>}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handlebackSelect}>
          <View style={styles.container}>
            {backimage && (
              <Image source={{ uri: backimage }} style={styles.img} />
            )}
            {!backimage && (
              <MaterialCommunityIcons name="camera" color="#0c0c0c" size={30} />
            )}
            {!backimage && <Text style={styles.txt}>Back Side</Text>}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TextInput
        style={styles.inp}
        placeholder="Name"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.inp}
        placeholder="Age"
        onChangeText={(value) => setAge(value)}
      />
      <TextInput
        style={styles.inp}
        placeholder="CNIC"
        onChangeText={(value) => setCnic(value)}
      />
      <TextInput
        style={styles.inp}
        placeholder="Monthly Income"
        onChangeText={(value) => setMonthlyIncome(value)}
      />
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={styles.categ}>
          <Text style={{ padding: 5, fontSize: 18 }}>
            {doh ? doh : "Select Duration Of Help"}
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={show} animationType="slide">
        <Fixing>
          <Button title="Close" onPress={() => setShow(false)} />
          <FlatList
            data={durationList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Fixing>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setDoh(item.time);
                    setShow(false);
                  }}
                >
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
                    {item.time}
                  </Text>
                </TouchableWithoutFeedback>
              </Fixing>
            )}
          />
        </Fixing>
      </Modal>
      <TextInput
        style={styles.inp}
        placeholder="Family Members"
        onChangeText={(value) => {
          setFamilyMembers(value);
        }}
      />
      <FormButton
        title="Submit"
        given="rgb(60, 168, 50)"
        onpress={submitHandler}
      />
    </Fixing>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0eeeb",
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
    marginRight: 6,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  txt: {
    paddingTop: 10,
    textAlign: "center",
  },
  inp: {
    width: "100%",
    color: "#0c0c0c",
    backgroundColor: "#f0eeeb",
    borderRadius: 25,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
    paddingRight: 20,
  },
  categ: {
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

export default UserForm;
