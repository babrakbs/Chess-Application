import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constant";


export const styles = StyleSheet.create({
    mainCointer: {
        flex: 1,
        backgroundColor: colors.white
    },

    forgotPasswordText: {
        fontSize: fontSize.eight,
        fontWeight: '700',
        marginLeft: wp(5),
        color: colors.black,

    },

    descpText: {
        color: colors.gray,
        fontSize: fontSize.fourpointtwo,
        marginLeft: wp(5),
        marginRight: wp(4),
        marginTop: hp(1.5),
        fontWeight:'400',
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
        marginTop: hp(5),
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
        marginTop: hp(5),
        borderWidth: wp(0.2),
    },

    inputFieldsDesign: {
        fontSize: fontSize.fourpointtwo,
        // padding: hp(1),
        color: colors.black,
        width: wp(78),
        marginLeft:wp(3),
    },

    emailFieldIcon: {
        marginLeft: wp(3),
        height: hp(2),
        width: wp(5)
    },

    errorText: {
        color: colors.red,
        fontSize: fontSize.threePointFive,
        marginTop: hp(0.5),
        width: wp(90),
        marginLeft: wp(5.5),
        fontWeight: '500',
    },

    btnSubmit: {
        backgroundColor: colors.primaryColor,
        width: wp(90),
        height: hp(9),
        marginTop: hp(5),
        justifyContent:"center",
        borderRadius:radius.four,
        alignSelf:"center",
    },

    submitText: {
        textAlign: "center",
        color:colors.white,
        fontSize:fontSize.fourpointfive,
        fontWeight:'400',
    },

    placeholderTextColor: colors.gray


})