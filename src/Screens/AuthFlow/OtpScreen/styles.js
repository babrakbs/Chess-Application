import{StyleSheet} from 'react-native'

import { heightPercentageToDP as hp,  widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors,fontSize,radius } from '../../../Constant'

export const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white,

    },

    otpHead: {
        fontSize: fontSize.eight,
        fontWeight: 'bold',
        marginLeft: wp(5),
        color: colors.black,
    },

    descpText: {
        color: colors.gray,
        fontSize: fontSize.fourpointtwo,
        marginLeft: wp(5),
        marginTop: hp(1.5),
        fontWeight:'400'
    },

    descpEmail:{
        fontWeight:'500',
    },

    cell:{
        flexDirection:'row',
        justifyContent:'center',
        height:hp(15),
        alignItems:'center',
    },
  
    otpInput:{
        borderRadius:radius.two,
        width:wp(14),
        height:hp(10),
        borderColor:colors.gray,
        borderWidth:wp(0.1),
        marginTop:hp(3),
        marginRight:wp(3),
        backgroundColor:colors.white,
        fontWeight:'bold',
        fontSize:fontSize.six,
        paddingVertical:hp(1),
        paddingHorizontal:wp(2),
        alignSelf:'center',
        textAlign:'center'
    },

    otpInputFocus:{
        borderRadius:radius.two,
        width:wp(14),
        height:hp(10),
        borderColor:colors.primaryColor,
        borderWidth:wp(0.1),
        marginTop:hp(3),
        marginRight:wp(3),
        backgroundColor:colors.white,
        fontWeight:'bold',
        fontSize:fontSize.six,
        paddingVertical:hp(1),
        paddingHorizontal:wp(2),
        alignSelf:'center',
        textAlign:'center'
    },

    errorText: {
        color: colors.red,
        fontSize: fontSize.threePointFive,
        marginTop: hp(0.5),
        width: wp(90),
        marginLeft: wp(5.5),
        fontWeight: '500',
    },

    btnVerify: {
        backgroundColor: colors.primaryColor,
        width: wp(90),
        height: hp(8.5),
        marginTop: hp(3),
        justifyContent:"center",
        borderRadius:radius.four,
        alignSelf:"center",
    },

    verifyText: {
        textAlign: "center",
        color:colors.white,
        fontSize:fontSize.fourpointfive,
        fontWeight:'400',
    },

    placeholderTextColor:colors.black
})