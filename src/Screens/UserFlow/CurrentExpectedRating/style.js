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
        width: wp(45),
        borderRadius: radius.one,
        // backgroundColor:'pink',
        backgroundColor: colors.white,
        elevation: 3,
        justifyContent: "center"

    },
    btnsRatingFocused: {
        height: hp(5),
        width: wp(45),
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

    // Player View

    playerView: {
        backgroundColor: colors.lightBlue,
        width: wp(95),
        height: hp(12),
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: radius.three,
        // marginBottom:hp(5),
        marginTop: hp(4.5),


    },

    ratingView: {
        width: wp(25),
        height: hp(4),
        borderRadius: radius.seven,
        borderColor: colors.gold,
        borderWidth: wp(0.5),
        // alignSelf: "center",
        flexDirection: "row",
        position: 'absolute',
        right: wp(35),
        bottom: hp(9.5),
        backgroundColor: colors.white,
    },

    starImage: {
        height: hp(3.5),
        width: wp(4),
        marginLeft: wp(4),
        alignSelf: "center",
    },

    ratingText: {
     
        fontSize: fontSize.four,
        color: colors.black,
        fontWeight: '500',
        textAlign: "center",
        marginLeft: wp(2),
        marginRight: wp(4),
        alignSelf: "center",
      

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
        
        height: hp(5.5),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: wp(4),
       
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
        marginLeft:wp(5)
    },

    rankText: {
        color: colors.white,
        fontWeight: '600',
        fontSize:fontSize.four
    },

    floatingButton: {
        height: hp(9),
        width: hp(9),
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignSelf: 'flex-end',
        marginTop: hp(10),
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
    },

    rbwCancelImage:{
        height:hp(4),
        width:hp(4),
        alignSelf:"center",

    },

    
    rbwHeadText: {
        color: colors.black,
        fontSize:fontSize.fivepointfive,
        fontWeight:'bold',
        // textAlign:"center",
        alignSelf:"center",
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



    expectedRatingView: {

        // marginTop: hp(5),
        borderRadius: radius.fifteen,
        width: wp(55),
        height: hp(12),
        backgroundColor: colors.white,
        elevation: 6,
        // flexDirection: 'row',
        alignSelf: "center",
    },

    expectedRatingText: {
        color: colors.primaryColor,
        fontSize: fontSize.threePointFive,
        fontWeight: '600',
        textAlign:"center"

        // paddingHorizontal: wp(14),
        // paddingVertical: hp(1),

    },

    expectedRatingBtnsView: {
        flexDirection: "row",
        // backgroundColor:'pink',
        alignSelf:'center',
        justifyContent: 'space-between',
    },

    expectedRatingUndoImage: {
        height: hp(9),
        width: wp(26),
        // backgroundColor:colors.red,
        borderRightWidth: wp(0.2),
        // borderRightColor:colors.gray,
        // width:wp(20),
        // marginTop:hp(1),
        marginLeft: wp(5),
        alignSelf: "center",
        
        borderTopLeftRadius:radius.ten,
        borderBottomRightRadius:radius.seven,
        borderBottomLeftRadius:radius.fifteen

    },
    verticalLine: {
        width: wp(0.3), // Adjust the width as needed
        height: hp(7),
        // To make the line extend the full height of the container
        backgroundColor: colors.gray, // Set the desired color
        alignSelf: 'center', // To center the line vertically
    },

    expectedRatingResetImage: {
        height: hp(9),
        width: wp(26),
        // backgroundColor:colors.red,
        // marginTop:hp(1),
        marginRight: wp(5),
        borderTopRightRadius:radius.ten,
        borderBottomRightRadius:radius.fifteen,
        borderBottomLeftRadius:radius.eight
        // width:wp(20),
    },

    calculateBtn: {
        width: wp(85),
        height: hp(9),
        marginTop: hp(2),
        backgroundColor: colors.primaryColor,
        alignSelf: "center",
        borderRadius: radius.four,
        justifyContent: "center",
        // marginBottom:hp(2)

    },
    calculateBtnText: {
        color: colors.white,
        fontSize: fontSize.fourpointfive,
        textAlign: "center",
        fontWeight: '400',

    },

    ratingTextBottom: {
        color: colors.gray,
        marginTop: hp(1),
        marginBottom: hp(1),
        fontSize: fontSize.fourpointfive,
        alignSelf: "center",
        fontWeight: '400',

    },





})