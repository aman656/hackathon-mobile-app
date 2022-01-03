import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManagerSearchScree from "../screens/ManagerSearchScree";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScanQr from "../screens/ScanQr";
import ManagerAccount from "../screens/ManagerAccount";

const Tabs = createBottomTabNavigator();

const ManagerNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgb(60, 168, 50)",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="search"
        component={ManagerSearchScree}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addition"
        component={ScanQr}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        component={ManagerAccount}
        options={
          ({ headerShown: false },
          {
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="lock" size={size} color={color} />
            ),
          })
        }
      />
    </Tabs.Navigator>
  );
};

export default ManagerNavigation;
