import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Main from "../screens/Main";
import Signup from "../screens/Signup";
import BranchManagerLogin from "../screens/BranchManagerLogin";
import BranchOption from "../screens/BranchOption";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="welcome"
        component={Main}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="branchselect"
        component={BranchOption}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="branch"
        component={BranchManagerLogin}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="userlogin"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="usersignup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
