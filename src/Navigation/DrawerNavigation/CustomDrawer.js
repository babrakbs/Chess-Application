// CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { colors, fontSize } from '../../Constant';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawer = (props) => {

  const closeDrawer = () => {
    props.navigation.closeDrawer(); // Close the drawer when the image is pressed
  };


  return (
    <View style={styles.mainContainer}>

      <View style={styles.userView}>
        <View style={styles.header}>
          <Image resizeMode='center' style={styles.logo} source={require('../../../assets/images/chess_logo.png')}></Image>
          <TouchableOpacity onPress={()=> {closeDrawer()}} style={styles.btnCancelImage}>
            <Image resizeMode='center' style={styles.cancelImage} source={require('../../../assets/images/drawer_cancel_btn.png')}></Image>
          </TouchableOpacity>
        </View >

        <View style={styles.userProfileView}>
          <Image resizeMode='center' style={styles.userImage} source={require('../../../assets/images/profile_image.png')} ></Image>

          <View style={styles.userDetailView}>
            <Text style={styles.userName}>Orel</Text>
            <Text style={styles.userEmail}>Orel@gmail.com</Text>
          </View>

        </View>
      </View>


      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.contentContainer}>
        

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

    <View style={styles.footer}>
      <Text style={styles.versionText}>V1.1</Text>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white, // Apply your background color here
  },

  userView: {
    borderBottomColor: colors.gray,
    borderBottomWidth: wp(0.2),
    // backgroundColor: 'pink',
    height: hp(25),

  },
  header: {
    // borderBottomColor:colors.gray,
    // borderBottomWidth:wp(0.2),
    // backgroundColor:'red',    
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  logo: {
    height: hp(10),
    width: wp(10),
    marginLeft: wp(3),
  },

  btnCancelImage: {
    height: hp(10),
    width: wp(12),
    marginRight: wp(3),
    // backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelImage: {
    height: hp(10),
    width: wp(20),
    marginTop: hp(1.5)
  },

  userProfileView: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: hp(5),

  },

  userImage: {
    height: hp(9),
    width: hp(9),
    marginTop: hp(1),
    // backgroundColor:'green',

  },

  userDetailView: {
    alignSelf: 'center',
    

  },
  userName: {
    fontSize: fontSize.fourpointtwo,
    color: colors.black,
    fontWeight: '600'
  },

  userEmail: {
    color: colors.gray,
    fontSize: fontSize.ThreePointSeven,
    fontWeight: '400',
    marginBottom: hp(1.5),
  },

  footer:{
    // flex:0.5,
    // backgroundColor:colors.green,
    justifyContent:'flex-end',
    alignItems:'center',
  },

  versionText:{
    fontSize:fontSize.four,
    fontWeight:'400',
    color:colors.gray,
    marginBottom:hp(5),
  },
  contentContainer: {
    // backgroundColor:'pink',
    marginTop:hp(4),
  },

});

export default CustomDrawer;
