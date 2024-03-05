import 'react-native-gesture-handler';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../DrawerNavigation/CustomDrawer'
import { Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fontSize } from '../../Constant';
import AllPlayers from '../../Screens/UserFlow/AllPlayers';
import { useDispatch } from 'react-redux';
import { setCounter, setToken } from '../../Redux/reducer';
import AddOpponent from '../../Screens/UserFlow/AddOpponent';
import GameType from '../../Screens/UserFlow/GameType';
import PerformCalculations from '../../Screens/UserFlow/PerformCalculations';
import SignOutComponent from '../../Screens/UserFlow/SignOut';
import CurrentExpectedRating from '../../Screens/UserFlow/CurrentExpectedRating';

// const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {
  const Drawer = createDrawerNavigator();


  // const dispatch = useDispatch()
  // const handleSignOut = () => {
  //   console.log("Handle Sign Out Called");

  //   dispatch(setCounter(0), setToken(null))
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'OnBoarding' }]
  //   });
  //   // navigation.navigate('SignIn')
  // }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}

      // icon in each drawer item
      screenOptions={{
        // drawerActiveBackgroundColor: colors.primaryColor,
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: colors.black,

        drawerLabelStyle: {
          marginLeft: wp(-5),
          fontSize: fontSize.four,
          fontWeight: '400'
          // color: colors.black,
        },
        drawerIcon: {
          height: hp(4),
          width: wp(10),

        },

      }}
    >
      {/* <Drawer.Screen name="Home" component={StackNavigation} /> */}

      <Drawer.Screen name="Home" component={AllPlayers} options={{
        drawerIcon: () => (
          <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_home_icon.png')}></Image>
        ),

        headerShown: false
      }} />
      <Drawer.Screen name="Current Players" component={CurrentExpectedRating} options={{
        drawerIcon: () => (
          <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_settings_icon.png')}></Image>
        ),

        headerShown: false
      }} />


      <Drawer.Screen name="Perform Calculations" component={PerformCalculations} options={{
        drawerIcon: () => (
          <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_calculator_icon.png')}></Image>
        ),
        headerShown: false

      }} />

      <Drawer.Screen name="Add Opponent" component={AddOpponent} options={{
        drawerIcon: () => (
          <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_settings_icon.png')} ></Image>
        ),
        headerShown: false,
      }} />

      <Drawer.Screen name='Game Type' component={GameType} options={{
        drawerIcon: () => (
          <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_support_icon.png')}></Image>
        ),
        headerShown: false

      }} />

      <Drawer.Screen


        name='Sign Out' component={SignOutComponent}
        options={{
          headerShown: false,

          drawerIcon: () => (
            <Image style={styles.iconStyle} resizeMode='center' source={require('../../../assets/images/drawer_website_icon.png')}></Image>
          ),
          headerShown: false,

        }}


      />


      {/* <Drawer.Screen name="Logout" component={Logout} /> */}

    </Drawer.Navigator>
  );
}


// USE FOR ICONS STYLE  

const styles = StyleSheet.create({


  iconStyle: {
    // backgroundColor:'green',
    height: hp(4),
    width: wp(10),
  },

})


export default DrawerNavigation