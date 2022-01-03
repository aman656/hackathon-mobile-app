import { useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Location from "expo-location";

export default function MapScreen({ navigation }) {
  const [myLocation, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation);
  useEffect(() => {
    const LocationGetting = async () => {
      const loc = await Location.requestForegroundPermissionsAsync();
      if (!loc.granted) {
        return;
      } else {
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
        console.log(myLocation);
      }
    };
    LocationGetting();
  }, []);
  const SylaniPoint = [
    {
      id: "1",
      coordinate: {
        latitude: 24.9200172,
        longitude: 67.0612345,
      },
      title: "Aliabad",
      icon: require("../assets/marker.png"),
    },
    {
      id: "2",
      coordinate: {
        latitude: 24.8732834,
        longitude: 67.0337457,
      },
      title: "Numaish chowrangi",
      icon: require("../assets/marker.png"),
    },
    {
      id: "3",
      coordinate: {
        latitude: 24.8278999,
        longitude: 67.0688257,
      },
      title: "Saylani house phase 2",
      icon: require("../assets/marker.png"),
    },
    {
      id: "4",
      coordinate: {
        latitude: 24.8138924,
        longitude: 67.0677652,
      },
      title: "Touheed commercial",
      icon: require("../assets/marker.png"),
    },
    {
      id: "5",
      coordinate: {
        latitude: 24.8949528,
        longitude: 67.1767206,
      },
      title: "Jinnah avenue",
      icon: require("../assets/marker.png"),
    },
    {
      id: "6",
      coordinate: {
        latitude: 24.9132328,
        longitude: 67.1246195,
      },
      title: "Johar chowrangi",
      icon: require("../assets/marker.png"),
    },
    {
      id: "7",
      coordinate: {
        latitude: 24.9100704,
        longitude: 67.1208811,
      },
      title: "Johar chowrangi 2",
      icon: require("../assets/marker.png"),
    },
    {
      id: "8",
      coordinate: {
        latitude: 24.8673515,
        longitude: 67.0724497,
      },
      title: "Hill park",
      icon: require("../assets/marker.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        style={styles.map}
        initialRegion={{
          latitude: 24.959425,
          longitude: 66.9963733,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {SylaniPoint.map((mark) => (
          <Marker
            key={mark.id}
            coordinate={{
              latitude: mark.coordinate.latitude,
              longitude: mark.coordinate.longitude,
            }}
            onPress={() => setSelectedLocation(mark.title)}
          >
            <Callout>
              <Text>{mark.title}</Text>
            </Callout>
          </Marker>
        ))}
        {/* <Marker
          coordinate={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          }}

        /> */}
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!selectedLocation) {
            Alert.alert("Please select a branch!");
          } else {
            navigation.navigate("addition", {
              selectedBranch: selectedLocation,
            });
          }
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Click to Proceed next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  //   buttonView: {
  //     position: "absolute",
  //     bottom: 17,
  //     backgroundColor: "#1976D2",
  //     height: "8%",
  //     width: "65%",
  //     left: 35,
  //     borderRadius: 10,
  //     alignItems: "center",
  //   },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(60,168,50)",
    color: "white",
    width: "50%",
    padding: 10,
    bottom: 60,
    borderRadius: 10,

    // marginTop:5,
    // marginLeft:'50%'
  },
});
