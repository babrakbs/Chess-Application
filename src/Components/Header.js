import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../Constant";



const Header = (props) => {
    // const styles = useThemeAwareObject(createStyle);

    return (
        <View
            style={[
                //   props.style,
                //   styles.topView,
                props.headerStyle ? props.headerStyle : styles.mainContainer,
                //   Platform?.OS !== "ios" && {marginTop: hp(3)},
            ]}
        >

            <View style={styles.topView}>
                <View style={props.customLeftIconTopView ? props.customLeftIconTopView: styles.leftIconTopView}>
                    <TouchableOpacity onPress={props?.onBackButtonPressTop}>
                        {/* {props?.leftIcon && (
              <SvgXml xml={props?.leftIcon} height={25} width={25} />
            )} */}
                        {props?.leftIconTop && (
                            <Image resizeMode="center" source={props?.leftIconTop} style={styles.leftIconTopStyles} />
                        )}
                    </TouchableOpacity>

                </View>
                <Image resizeMode='center' source={props?.logo} style={props.customLogo ? styles.customLogo : props.logo} />

                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onrightIconPressTop}>
                        {/* {props?.rightIcon && (
              <SvgXml
                style={styles?.rightIcon}
                xml={props?.rightIcon}
                height={props?.rightIconheight ? props?.rightIconheight : 25}
                width={props?.rightIconwidth ? props?.rightIconwidth : 25}
              />
            )} */}
                        {props?.rightIconTop && (
                            <Image resizeMode="center" source={props?.rightIconTop} style={styles.rightIconTopStyles} />
                        )}
                    </TouchableOpacity>
                </View>

            </View>

            <View
                style={styles.bottomView
                    // alignItems: "center",
                    // height:hp(5),
                    // width: wp(100),
                    // flexDirection: "row",
                    // alignSelf: "center",
                    // justifyContent: "center",
                    // backgroundColor:'pink',
                }
            >

                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onBackButtonPressBottom}>
                        {/* {props?.leftIcon && (
              <SvgXml xml={props?.leftIcon} height={25} width={25} />
            )} */}
                        {props?.leftIconBottom && (
                            <Image resizeMode="center" source={props?.leftIconBottom} style={styles.leftIconBottomStyles} />
                        )}
                    </TouchableOpacity>

                </View>

                <Text style={styles?.title}>{props?.title}</Text>

                {/* <Image resizeMode='center' source={props?.logo} style={props.customLogo ? styles.customLogo : props.logo} /> */}

                <View style={{ height: hp(5), width: wp(10) }}>
                    <TouchableOpacity onPress={props?.onrightIconPressBottom}>
                        {/* {props?.rightIcon && (
              <SvgXml
                style={styles?.rightIcon}
                xml={props?.rightIcon}
                height={props?.rightIconheight ? props?.rightIconheight : 25}
                width={props?.rightIconwidth ? props?.rightIconwidth : 25}
              />
            )} */}
                        {props?.rightIconBottom && (
                            <Image resizeMode="center" source={props?.rightIconBottom} style={styles.rightIconBottomStyles} />
                        )}
                    </TouchableOpacity>
                </View>


            </View>


        </View>
    );
};

//   const createStyle = (theme) => {
const styles = StyleSheet.create({

    mainContainer: {
        alignItems: "center",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "space-between",
        // width: wp(95),
        // backgroundColor: 'yellow',
        backgroundColor: colors.white,
        height: hp(20),
        // marginBottom: hp(2),
    },

    topView: {
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp(100),
        // backgroundColor: 'pink',
        backgroundColor: colors.white,

        height: hp(15),
        // marginBottom: hp(2),
    },
    bottomView: {
        alignItems: "center",
        // alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: wp(100),
        // backgroundColor: 'yellow',
        height: hp(5),
    },

    leftIconTopView:{
        height: hp(5), 
        width: wp(10),
        // backgroundColor:'green',
    },

    profileImageView: {
        height: wp(9),
        width: wp(9),
        alignItems: "center",
        borderRadius: radius.five,
    },
    leftIconTopStyles: {
        alignSelf: "center",
        // alignItems:"center",
        // justifyContent:"center",
        height: hp(5),
        width: hp(5),
        // backgroundColor:'pink'
    },
    rightIconTopStyles: {
        // alignSelf: "flex-end",
        alignSelf: "center",

        height: hp(5),
        width: hp(5),
        // backgroundColor:'pink'

    },
    leftIconBottomStyles: {
        // alignSelf: "flex-start",
        alignSelf: "center",

        height: hp(5),
        width: hp(5),
        // backgroundColor:'pink'

    },
    rightIconBottomStyles: {
        // alignSelf: "flex-end",
        alignSelf: "center",

        height: hp(5),
        width: hp(5),
        // backgroundColor:'pink'

    },

    textContainer: {
        color: colors.white,
        marginLeft: wp(2),
        width: wp(60),
    },
    title: {
        color: colors.black,
        // fontFamily: theme.family.semiBold,
        fontSize: fontSize.five,
        fontWeight: '700',
        textAlign: 'center',
        // backgroundColor:'green',
        width:wp(50),
        height:hp(5),
    },
    logo: {
        height: hp(15),
        width: wp(15),
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: wp(5)
        // alignContent:"center",
        // marginHorizontal:wp(5)
        // backgroundColor:'orange'

    },
    placeholderColor: colors.white,
});
// return styles;
export default Header;
//   };