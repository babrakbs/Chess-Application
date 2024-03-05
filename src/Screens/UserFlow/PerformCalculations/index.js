import React, { useState, useRef } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import Header from "../../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { colors, radius } from "../../../Constant";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const PerformCalculations = ({ navigation }) => {



    const openDrawer = () => {
        if (navigation.isDrawerOpen) {
            navigation.closeDrawer(); // Close the drawer if it's open
        } else {
            navigation.openDrawer(); // Open the drawer if it's closed
            // setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer state
        }
    };


    const [activeButton, setActiveButton] = useState(null);
    const handleButtonPress = (buttonName) => {
        if (activeButton === buttonName) {
            setActiveButton(null);
        } else {
            setActiveButton(buttonName);
        }
    };
    const isButtonActive = (buttonName) => activeButton === buttonName;


    const Players = [
        {
            id: 1,
            name: 'Neil',
            profileimage: require('../../../../assets/images/profile_image.png'),
            rating: 2000,
            rank: 'GM',
            images: [
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_two.png') },
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_four.png') },
                { image: require('../../../../assets/images/all_user_icon.png') },

            ]

        },
        {
            id: 2,
            name: 'Neil',
            profileimage: require('../../../../assets/images/profile_image.png'),
            rating: 1200,
            rank: 'IM',
            images: [
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_two.png') },
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_four.png') },
                { image: require('../../../../assets/images/all_user_icon.png') },

            ]

        },
        {
            id: 3,
            name: 'Neil',
            profileimage: require('../../../../assets/images/profile_image.png'),
            rating: 500,
            rank: 'WGM',
            images: [
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_two.png') },
                { image: require('../../../../assets/images/user_image_three.png') },
                { image: require('../../../../assets/images/user_image_four.png') },
                { image: require('../../../../assets/images/all_user_icon.png') },

            ]

        },

    ]
    const refRBSheet = useRef();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <Header
                logo={require('../../../../assets/images/chess_logo.png')}
                // leftIconTop={require('../../../../assets/images/drawer_menu_icon.png')}
                // rightIcon={null}
                title="All Player's"
            // rightIconBottom={require('../../../../assets/images/filter_icon.png')}
            // onBackButtonPressTop={openDrawer}
            />



            <FlatList
                data={Players}
                style={{ marginTop: hp(2) }}
                renderItem={({ item }) => {

                    return (


                        <View style={styles.playerView}>



                            <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />

                            <View style={styles.nameContainer}>
                                <Text style={styles.playerNameText} numberOfLines={1} >{item.name}</Text>
                                <View style={styles.allUsersImageView}>
                                    {/* {item.images.map((imageItem, index) => (
                                        <Image
                                            key={index}
                                            style={styles.additionalImageStyle}
                                            source={imageItem.image}
                                        />
                                    ))} */}
                                    {item.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            resizeMode="contain"
                                            style={styles.allUsersImage}
                                            source={image.image}
                                        />
                                    ))}
                                </View>

                                {/* <Text style={styles.chatMessage} numberOfLines={1} >{item.message}</Text> */}

                            </View>

                            <View style={styles.rankTextView}>

                                <Text style={styles.rankText} numberOfLines={1}>{item.rank}</Text>
                            </View>

                        </View>
                    );
                }}
            />
            {/* <View style={styles.footer}> */}

                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.floatingButton}>
                    <Image style={styles.floatingPlusImage} source={require('../../../../assets/images/floating_plus_icon.png')} />
                </TouchableOpacity>
            {/* </View> */}

            {/* <View style={styles.rbwView}> */}

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                
                height={180}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        // alignItems: "center",
                        // alignSelf:"center",
                        borderTopLeftRadius: radius.four,
                        borderTopRightRadius: radius.four,
                        draggableIcon: {
                            backgroundColor: colors.white
                          }
                    }
                }}
            >
                <View style={styles.rbwView}>
                    <TouchableOpacity onPress={() => refRBSheet.current.close()} style={styles.rbwCancelbtn}>
                        <Image style={styles.rbwCancelImage} source={require('../../../../assets/images/rbw_cancel_image.png')} />
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={styles.rbwHeadText}>Select Perform Calculation</Text>

                    <View style={styles.rbwBtnsView}>
                        <TouchableOpacity
                            onPress={() => handleButtonPress('Actual')}
                            style={[
                                styles.rbwBtnActual,
                                isButtonActive('Actual') ? styles.rbwBtnActualFocus : null
                            ]}
                        >
                            <Text allowFontScaling={false} style={[styles.rbwBtnsText, isButtonActive('Actual') ? styles.rbwBtnsTextFocus : null]}>Actual</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleButtonPress('Expected')}
                            style={[
                                styles.rbwBtnExpected,
                                isButtonActive('Expected') ? styles.rbwBtnExpectedFocus : null
                            ]}
                        >
                            <Text allowFontScaling={false} style={[styles.rbwBtnsText, isButtonActive('Expected') ? styles.rbwBtnsTextFocus : null]}>Expected</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

            {/* </View> */}

        </ScrollView>
    )
}

export default PerformCalculations