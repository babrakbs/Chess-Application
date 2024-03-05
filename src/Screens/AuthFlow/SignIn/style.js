import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from 'react-native'
import { colors, fontSize, radius } from "../../../Constant";
export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },

    welcomeText: {
        fontSize: fontSize.eight,
        fontWeight: '700',
        color: colors.black,
        marginLeft: wp(5),
    },

    welcomeEmoji:{
        height:hp(5),
        width:wp(10),
        fontSize:fontSize.fivepointfive,
    },

    loginHead: {
        fontSize: fontSize.four,
        color: colors.gray,
        marginLeft: wp(5),
        marginTop: hp(1),
        fontWeight: '400'
    },

    emailFieldView: {
        height: hp(9),
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: radius.three,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderColor: colors.gray,
        marginTop: hp(8),
        borderWidth: wp(0.2),
    },

    emailFieldViewFocus: {
        height: hp(9),
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: radius.three,
        backgroundColor: colors.white,
        alignItems: 'center',
        borderColor: colors.primaryColor,
        marginTop: hp(8),
        borderWidth: wp(0.2)
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

    emailFieldIcon: {
        marginLeft: wp(3),
        height: hp(2),
        width: wp(5)
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


    forgotText: {
        alignSelf: 'flex-end',
        marginRight: wp(3.5),
        marginTop: hp(1),
        color: colors.navyblue,
        fontWeight: '500',
        fontSize:fontSize.threePointFive
    },


    btnLogin: {
        backgroundColor: colors.navyblue,
        height: hp(9),
        width: wp(90),
        alignSelf: "center",
        justifyContent: "center",
        marginTop: hp(3),
        borderRadius: radius.two,

    },

    loginText: {
        textAlign: "center",
        fontSize: fontSize.fourpointfive,
        color: colors.white,
        fontWeight: '400',
    },

    orText: {
        color: colors.gray,
        alignSelf: "center",
        fontSize: fontSize.fourpointfive,
        marginTop: hp(3),
        marginBottom: hp(3),
        fontWeight:'500',
    },

    btnGoogle: {
        backgroundColor: colors.ashwhite,
        height: hp(9),
        width: wp(90),
        alignSelf: "center",
        justifyContent: 'space-evenly',
        borderRadius: radius.two,
        flexDirection: "row",
        alignItems: "center",

    },

    googleImage: {
        alignSelf: "center",
        height: hp(6),
        width: hp(6),
    },

    googleText: {
        fontSize: fontSize.fourpointfive,
        color: colors.gray,
        marginRight: wp(5),
        fontWeight:'400',
        textAlign:"center",
    },

    dontHaveAcc: {
        alignSelf: "center",
        fontSize: fontSize.fourpointfive,
        marginTop: hp(10),
        marginBottom: hp(3),
        fontWeight:'400'
    },

    signUpText: {
        color: colors.primaryColor,
        fontWeight:'500'
    },

    placeholderTextColor: colors.gray


})