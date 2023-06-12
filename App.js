import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardPage from "./src/components/pages/DashboardPage";
import ForgetPasswordPage from "./src/components/pages/ForgotPasswordPage";
import LoginPage from "./src/components/pages/LoginPage";
import RegisterPage from "./src/components/pages/RegisterPage";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
        <Stack.Screen name="ForgotPassword" component={ForgetPasswordPage}/>
        <Stack.Screen name="Dashboard" component={DashboardPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
