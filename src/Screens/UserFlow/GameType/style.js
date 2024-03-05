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
        width: wp(40),
        borderRadius: radius.one,
        // backgroundColor:'pink',
        backgroundColor: colors.white,
        elevation: 3,
        justifyContent: "center"

    },
    btnsRatingFocused: {
        height: hp(5),
        width: wp(40),
        borderRadius: radius.one,
        borderBottomColor:colors.primaryColor,
        borderBottomWidth:hp(0.3),
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
    btnsRatingTextFocus: {
        fontSize: fontSize.four,
        textAlign: "center",
        color: colors.primaryColor,

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
        fontWeight: '600',
        fontSize:fontSize.four
    },

    // footer:{
    //     flex:1,
    //     height:hp(63),
    //     // flexDirection:'row',
    //     justifyContent:"center",
    //     // backgroundColor:'red',
    //     // alignItems:'flex-end',
    //     // alignSelf:'flex-end',
    // },

    floatingButton: {
        height: hp(9),
        width: hp(9),
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignSelf: 'flex-end',
        marginTop: hp(5),
        marginBottom: hp(5),
        marginRight: wp(4),
        borderRadius: radius.ten
    },

    floatingPlusImage: {
        height: hp(2.5),
        width: hp(2.5),
        alignSelf: "center"
    },



    rbwView: {
        flex: 1,
        // backgroundColor: 'purple',
        backgroundColor:colors.white,

        // height:hp(30),
    },

    rbwCancelbtn:{
        height:hp(4),
        width:hp(4),
        alignSelf:'flex-end',
        // backgroundColor:'red',
        marginRight:wp(5),
        backgroundColor:colors.white,
        position:'absolute',
        right:0.3,
        // top:-12
        // bottom:150,

    },

    rbwCancelImage:{
        height:hp(4),
        width:hp(4),
        alignSelf:"center",

    },

    
    rbwHeadText: {
        color: colors.black,
        fontSize:fontSize.five,
        fontWeight:'700',
        // textAlign:"center",
        alignSelf:"center",
        marginTop:hp(3),
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
    rbwBtnRapid: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.white,
        width: wp(15),
        height: hp(5),
        justifyContent: "center",
    },
    rbwBtnRapidFocus: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.primaryColor,
        width: wp(15),
        height: hp(5),
        justifyContent: "center",
    },
    rbwBtnBlitz: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.white,
        width: wp(15),
        height: hp(5),
        justifyContent: "center",
    },
    rbwBtnBlitzFocus: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.primaryColor,
        width: wp(15),
        height: hp(5),
        justifyContent: "center",
    },
    rbwBtnClassical: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.white,
        width: wp(20),
        height: hp(5),
        justifyContent: "center",
    },

    rbwBtnClassicalFocus: {
        borderRadius: radius.one,
        borderWidth: wp(0.4),
        borderColor: colors.primaryColor,
        backgroundColor: colors.primaryColor,
        width: wp(20),
        height: hp(5),
        justifyContent: "center",
    },

    rbwBtnsText: {
        textAlign: "center",
        fontSize: fontSize.four,
        textAlign:"center",
        alignSelf:"center",
        color:colors.black,
        fontWeight:'600'
    },
    rbwBtnsTextFocus: {
        textAlign: "center",
        fontSize: fontSize.four,
        textAlign:"center",
        alignSelf:"center",
        color:colors.white,
        fontWeight:'600'
    },


})
