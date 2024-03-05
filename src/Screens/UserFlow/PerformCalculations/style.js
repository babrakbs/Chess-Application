import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constant";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },

    btnsRatingView: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: hp(2),


    },

    btnsRating: {
        height: hp(5),
        width: wp(35),
        borderRadius: radius.one,
        // backgroundColor:'pink',
        backgroundColor: colors.white,
        elevation: 3,
        justifyContent: "center"

    },
    btnsRatingFocused: {
        height: hp(5),
        width: wp(35),
        borderRadius: radius.one,
        borderBottomColor:colors.primaryColor,
        // backgroundColor:'pink',
        // backgroundColor: colors.primaryColor,
        color:colors.primaryColor,
        elevation: 3,
        justifyContent: "center"

    },

    btnsRatingText: {
        fontSize: fontSize.four,
        textAlign: "center",
        color: colors.gray,

    },


    filterImage: {
        // alignSelf: "flex-end",
        height: hp(3),
        width: hp(3),
        // flex: 1,
    },

    // Player View

    playerView: {
        backgroundColor: colors.lightBlue,
        width: wp(95),
        height: hp(12),
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: radius.three,
        // marginBottom:hp(5),
        marginTop: hp(2),


    },


    profileImageStyle: {
        height: hp(10),
        width: wp(20),
        // backgroundColor:'pink',
        marginTop: hp(2)

    },

    nameContainer: {
        // backgroundColor: 'green',
        width: wp(50)
    },

    allUsersImageView: {
        // backgroundColor:colors.purple,
        // marginTop:hp(1),
        height: hp(5.5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: wp(4),
        // marginBottom:hp(2),
        // position:'absolute',
        // top:hp(5.5),
        // left:wp(2)
    },

    allUsersImage: {
        height: hp(5),
        width: hp(4.5),
        // alignSelf:"flex-start",
        alignSelf: "center",
        // justifyContent:'flex-start',
        marginLeft: wp(-3.5),
    },

    playerNameText: {
        fontSize: fontSize.fourpointtwo,
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
        marginLeft:wp(5)
    },

    rankText: {
        color: colors.white,
        fontSize:fontSize.four,
        fontWeight: '600',
    },



    floatingButton: {
        height: hp(9),
        width: hp(9),
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignSelf: 'flex-end',
        marginTop: hp(4),
        marginBottom: hp(5),
        marginRight: wp(4),
        borderRadius: radius.ten
    },

    floatingPlusImage: {
        height: hp(2.5),
        width: hp(2.5),
        alignSelf: "center"
    },


    // rbwView:{
    //     flex:1,
    //     backgroundColor:'green',
    //     justifyContent:"center",
    //     height:hp(50),
    // },

    rbwView: {
        flex: 1,
        // backgroundColor: 'purple',
        backgroundColor:colors.white,

        // height:hp(30),
    },

    rbwCancelbtn:{
        height:hp(3),
        width:hp(3),
        alignSelf:'flex-end',
        marginRight:wp(5),
        backgroundColor:colors.white,
        // backgroundColor:'red',
        // position:'absolute',
        // right:0.1,
        // marginLeft:wp(10)

    },

    rbwCancelImage:{
        height:hp(4),
        width:hp(4),
        alignSelf:"center",
        // marginLeft:wp(5)

    },

    
    rbwHeadText: {
        color: colors.black,
        fontSize:fontSize.five,
        fontWeight:'700',
        // textAlign:"center",
        alignSelf:"center",
        marginTop:hp(2),
        // marginVertical:hp(5),
    },
    
    rbwBtnsView: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        // backgroundColor: 'pink',
        backgroundColor:colors.white,
        width:wp(80),
        alignSelf:"center",
        marginTop:hp(4),
    },
    rbwBtnActual: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.white,
        width: wp(25),
        height: hp(5),
        fontWeight:'500',
        justifyContent: "center",
    },
    rbwBtnActualFocus: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.primaryColor,
        width: wp(25),
        height: hp(5),
        justifyContent: "center",
        fontWeight:'500',

    },
   
    rbwBtnExpected: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.white,
        width: wp(25),
        height: hp(5),
        justifyContent: "center",
        fontWeight:'500',

    },
    rbwBtnExpectedFocus: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.primaryColor,
        width: wp(25),
        height: hp(5),
        justifyContent: "center",
        fontWeight:'500',

    },


    rbwBtnsText: {
        textAlign: "center",
        fontSize: fontSize.four,
        textAlign:"center",
        alignSelf:"center",
        color:colors.black,
        fontWeight:'500'
    },
    rbwBtnsTextFocus: {
        textAlign: "center",
        fontSize: fontSize.four,
        textAlign:"center",
        alignSelf:"center",
        color:colors.white,
        fontWeight:'500'
    },


})
