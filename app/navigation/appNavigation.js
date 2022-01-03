import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import React from "react";
import MapScreen from "../screens/MapScreen";
import UserForm from "../screens/UserForm";
import LogoutScreen from "../screens/LogoutScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavigationButton from "./NavigationButton";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgb(60, 168, 50)",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="maps"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="addition"
        component={UserForm}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NavigationButton onPress={() => navigation.navigate("addition")} />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="account"
        component={LogoutScreen}
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

export default AppNavigation;
