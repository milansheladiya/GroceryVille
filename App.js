import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from "./src/screens/SignupScreen";
import CartScreen from "./src/screens/CartScreen";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    SignupScreen:SignupScreen,
    CartScreen:CartScreen,
  },
  {
    initialRouteName: "CartScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);