import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../Screens/AuthFlow/OnBoarding';
import SignIn from '../../Screens/AuthFlow/SignIn';
import ForgorPassword from '../../Screens/AuthFlow/ForgotPassword';
import OtpScreen from '../../Screens/AuthFlow/OtpScreen';
import ResetPassword from '../../Screens/AuthFlow/ResetPassword';
import SignUp from '../../Screens/AuthFlow/SignUp';
import { useSelector } from 'react-redux';
import DrawerNavigation from '../DrawerNavigation';


 const StackNavigation = () => {

  const token = useSelector((state) => state.reducer.token);
  console.log('STACK Token', token)
  return token ? <MainStack/> : <AuthStack/>
}
export default StackNavigation;


const AuthStack = () => {
  const Stack = createStackNavigator();
  const counter = useSelector((state) => state.reducer.counter);
  console.log('STACK COUNTER', counter)
 
  return (
    // <Stack.Navigator initialRouteName={counter >= 1 ? "SignIn" : "OnBoarding"}>
    <Stack.Navigator  initialRouteName={counter >= 1 ? "SignIn" : "OnBoarding"}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgorPassword}
        options={{
          headerShown: false,
        }} />

      <Stack.Screen
        name='OtpScreen'
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ResetPassword'
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>

  )
}

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    // <Stack.Navigator initialRouteName={counter >= 1 ? "SignIn" : "OnBoarding"}>
    <Stack.Navigator  initialRouteName="drawernavigation">
      <Stack.Screen
        name="drawernavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
    
    </Stack.Navigator>

  )
}

