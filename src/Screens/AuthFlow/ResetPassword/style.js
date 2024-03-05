import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from 'react-native'
import { colors, fontSize, radius } from "../../../Constant";
export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,

    },

    resetPasswordHead: {
        fontSize: fontSize.eight,
        fontWeight: 'bold',
        color: colors.black,
        marginLeft: wp(5),
    },

    descpText: {
        fontSize: fontSize.fourpointtwo,
        color: colors.gray,
        marginLeft: wp(5),
        marginTop: hp(1),
        marginBottom: hp(5),
        fontWeight:'400',

    },

    passwordFieldView: {
        height: hp(9),
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: radius.three,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderColor: colors.gray,
        marginTop: hp(2),
        borderWidth: wp(0.2)
    },

    passwordFieldViewFocus: {
        height: hp(9),
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: radius.three,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderColor: colors.primaryColor,
        marginTop: hp(2),
        borderWidth: wp(0.2)
    },

    inputFieldsDesign: {
        fontSize: fontSize.fourpointtwo,
        width: wp(78),
        marginLeft:wp(3),
        color: colors.black,
    },


    passwordFieldIcon: {
        marginLeft: wp(3),
        height: hp(3),
        width: wp(4),
    },
    errorText: {
        color: colors.red,
        fontSize: fontSize.threePointFive,
        marginTop: hp(0.5),
        width: wp(90),
        marginLeft: wp(5.5),
        fontWeight: '500',

    },


    btnReset: {
        backgroundColor: colors.navyblue,
        height: hp(9),
        width: wp(90),
        alignSelf: "center",
        justifyContent: "center",
        marginTop: hp(3),
        borderRadius: radius.two,

    },

    btnresetText: {
        textAlign: "center",
        fontSize: fontSize.five,
        color: colors.white,
        fontWeight:'400'
    },

    footer:{
        flex:1,
        justifyContent:'flex-end',
    },

    needRestText:{
        fontSize:fontSize.fourpointfive,
        alignSelf:"center",
        textAlign:"center",
        marginBottom:hp(3),
        color:colors.gray,
        fontWeight:'400',
    },

    loginNowText:{
        color:colors.primaryColor,
        fontWeight:'500',
    },

    placeholderTextColor: colors.gray


})