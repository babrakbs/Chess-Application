import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from 'react-native'
import { colors, fontSize, radius } from "../../../Constant";
export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },


    signUpHead: {
        fontSize: fontSize.eight,
        fontWeight: 'bold',
        color: colors.black,
        marginLeft: wp(5),
    },

    signupDescp: {
        fontSize: fontSize.fourpointtwo,
        color: colors.gray,
        marginTop: hp(1),
        alignSelf: 'flex-start',
        marginLeft: wp(5)
    },

    usernameFieldView: {
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

    usernameFieldViewFocus: {
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
        marginTop: hp(2),
        borderWidth: wp(0.2)
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
        marginTop: hp(2),
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

    calendarFieldView: {
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

    calendarFieldViewFocus: {
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

    ratingFieldView: {
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

    ratingFieldViewFocus: {
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
        width: wp(80),
        fontSize: fontSize.fourpointtwo,
        padding: hp(1),
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
    dateFieldIcon: {
        marginLeft: wp(3),
        height: hp(3),
        width: wp(5),
    },
    ratingFieldIcon: {
        marginLeft: wp(3),
        height: hp(3),
        width: wp(5),
    },

    errorText:{
        color:colors.red,
        fontSize:fontSize.threePointFive,
        marginTop:hp(0.5),
        width:wp(90),
        marginLeft:wp(5.5),
        fontWeight:'500',

    },

    btnSignUp: {
        backgroundColor: colors.navyblue,
        height: hp(9),
        width: wp(90),
        alignSelf: "center",
        justifyContent: "center",
        marginTop: hp(3),
        borderRadius: radius.two,

    },

    signupText: {
        textAlign: "center",
        fontSize: fontSize.fourpointfive,
        color: colors.white,
        fontWeight: '400',
    },


    signingText: {
        fontSize: fontSize.ThreePointSeven,
        marginTop: hp(1),
        width: wp(90),
        alignSelf: "center",
        fontWeight: '400',
    },

    termCondtionsText: {
        color: colors.primaryColor,
        fontWeight: '500',
    },


    alreadyAccText: {
        fontSize: fontSize.fourpointfive,
        alignSelf: "center",
        textAlign: "center",
        marginBottom: hp(3),
        marginTop: hp(10),
        color: colors.gray,
        fontWeight:'400',
    },


    loginText: {
        color: colors.primaryColor,
        fontWeight: '500',
    },

    placeholderTextColor: colors.gray


})