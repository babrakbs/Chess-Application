import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from 'react-native'
import { colors, fontSize, radius } from "../../../Constant";
export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,

    },
    opponentText:{
        fontSize:fontSize.five,
        color:colors.black,
        textAlign:"center",
        fontWeight:'700',
        marginTop:hp(3)
        
    },
    selectedOpponentText:{
        fontSize:fontSize.four,
        color:colors.black,
        textAlign:"center",
        fontWeight:'600',
        marginTop:hp(3)
        
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
        marginTop: hp(4),
        borderWidth: wp(0.2),
        // backgroundColor:colors.green
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

    inputFieldsUsername: {
        width: wp(80),
        fontSize: fontSize.fourpointtwo,
        padding: hp(1),
        color: colors.black,
    },

    inputFieldsRating: {
        width: wp(70),
        fontSize: fontSize.fourpointtwo,
        padding: hp(1),
        marginLeft:wp(2),
        color: colors.black,
        alignSelf:"center",
        justifyContent:"center",
    },

    usernameFieldIcon: {
        marginLeft: wp(3),
        height: hp(2.5),
        width: wp(5)
    },

    btnSend:{
        marginRight: wp(5),
        height: hp(7),
        width: wp(8),
        marginLeft:wp(2),
        alignSelf:"center",
        justifyContent:"center",
    },


    ratingFieldIcon: {
        marginLeft: wp(3),
        height: hp(3),
        width: wp(5),
    },

    horizontalLine:{
        height:hp(0.15),
        width:wp(93),
        backgroundColor:colors.gray,
        alignSelf:"center",
        marginTop:hp(3),
        color:colors.gray,
    },

    flatListStyle:{
        height:hp(38),
        backgroundColor:'red',
    },
    
    playerView: {
        backgroundColor: colors.lightBlue,
        width: wp(95),
        height: hp(11),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent:'space-between',
        borderRadius: radius.three,
        marginTop: hp(2),
        
        
    },
    flatlistCancelIcon:{
        height:hp(4),
        width:hp(4),        
    },
    
    flatlistCancelBtn:{
        alignSelf:"flex-end",
        borderRadius:radius.four,
        position:'absolute',
        left:wp(90),
        bottom:hp(8.5),
    },

  
    ratingView: {
        width: wp(18),
        height: hp(3.5),
        marginTop:hp(0.2),
        borderRadius: radius.seven,
        borderColor: colors.gold,
        borderWidth: wp(0.5),
        flexDirection: "row",
        backgroundColor: colors.white,
        // backgroundColor:'green',
        justifyContent:"center",
    },

    starImage: {
        height: hp(3.5),
        width: wp(4),
        // marginLeft: wp(1),
        alignSelf: "center",
    },

    ratingText: {
        fontSize: fontSize.ThreePointSeven,
        color: colors.black,
        fontWeight: '500',
        marginLeft: wp(1),
        alignItems:"center",
        justifyContent:"center"
    },


    profileImageStyle: {
        height: hp(10),
        width: wp(12),
        alignSelf:"center",
        alignItems:"center"

    },

    nameContainer: {
        width: wp(55),
        // backgroundColor:'red'
    },


    playerNameText: {
        fontSize: fontSize.fourpointfive,
        marginTop: hp(2),
        color: colors.black,
        fontWeight: '700',
    },

    rankTextView:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: colors.lightGreen,
        borderRadius: radius.eight,
        width: wp(15),
        height: hp(6),
        alignSelf:"center",
        marginRight:wp(4)
    },

    rankText: {
        color: colors.white,
        fontWeight: '600',
        fontSize:fontSize.four
    },

    btnSubmit: {
        backgroundColor: colors.navyblue,
        height: hp(9),
        width: wp(85),
        alignSelf: "center",
        justifyContent: "center",
        marginTop: hp(10),
        borderRadius: radius.two,
        marginBottom:hp(2),

    },

    submitText: {
        textAlign: "center",
        fontSize: fontSize.fourpointfive,
        color: colors.white,
        fontWeight: '400',
    },

    placeholderTextColor: colors.gray


})