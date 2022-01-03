import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/authNavigation";
import { useEffect, useState } from "react";
import MapScreen from "./app/screens/MapScreen";
import AppNavigation from "./app/navigation/appNavigation";
import React from "react";
import AuthContext from "./app/context/contextApi";
import ManagerNavigation from "./app/navigation/managerNavigation";

export default function App() {
  const [currrequster, setCurrrequester] = useState(null);
  const [currManager, setCurrManager] = useState(null);
  const [branchselecting, setBranchSelecting] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        currrequster,
        setCurrrequester,
        currManager,
        setCurrManager,
        branchselecting,
        setBranchSelecting,
      }}
    >
      <NavigationContainer>
        {currManager && <ManagerNavigation />}
        {currrequster && <AppNavigation />}
        {currrequster == null && currManager == null && <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
