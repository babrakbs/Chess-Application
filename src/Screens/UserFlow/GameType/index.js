import React, { useState, useRef } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import Header from "../../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { radius } from "../../../Constant";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const GameType = ({ navigation }) => {


    const openDrawer = () => {
        if (navigation.isDrawerOpen) {
            navigation.closeDrawer(); // Close the drawer if it's open
        } else {
            navigation.openDrawer(); // Open the drawer if it's closed
            // setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer state
        }
    };


    const [activeButton, setActiveButton] = useState("Current Rating");
    const handleButtonPress = (buttonName) => {
        if (activeButton === buttonName) {
            setActiveButton(null); // Toggle off if the same button is pressed again
        } else {
            setActiveButton(buttonName); // Set the active button to the one that was pressed
        }
    };
    const isButtonActive = (buttonName) => activeButton === buttonName;


    const CurrentPlayers = [
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

    const ExpectedPlayers = [
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


    ]

    const refRBSheet = useRef();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <Header
                logo={require('../../../../assets/images/chess_logo.png')}
                // leftIconTop={require('../../../../assets/images/drawer_menu_icon.png')}
                // rightIcon={null}
                title="All Player's"
                rightIconBottom={require('../../../../assets/images/filter_icon.png')}
                // onBackButtonPressTop={openDrawer}
            />


            <View style={styles.btnsRatingView}>
                <TouchableOpacity
                    onPress={() => handleButtonPress('Current Rating')}
                    style={[
                        styles.btnsRating,
                        isButtonActive('Current Rating') ? styles.btnsRatingFocused : null,
                    ]}
                >
                    <Text allowFontScaling={false} style={[
                        styles.btnsRatingText,
                        isButtonActive('Current Rating') ? styles.btnsRatingTextFocus : null,
                    ]}>
                        Current Rating
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleButtonPress('Expected Rating')}
                    style={[
                        styles.btnsRating,
                        isButtonActive('Expected Rating') ? styles.btnsRatingFocused : null,
                    ]}
                >
                    <Text allowFontScaling={false} style={[
                        styles.btnsRatingText,
                        isButtonActive('Expected Rating') ? styles.btnsRatingTextFocus : null,
                    ]}>
                        Expected Rating
                    </Text>
                </TouchableOpacity>
            </View>

            {activeButton === 'Current Rating' && (
                <FlatList
                    data={CurrentPlayers}
                    style={{ marginTop: hp(2) }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.playerView}>
                                <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
                                <View style={styles.nameContainer}>
                                    <Text style={styles.playerNameText} numberOfLines={1}>{item.name}</Text>
                                    <View style={styles.allUsersImageView}>
                                        {item.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                resizeMode="contain"
                                                style={styles.allUsersImage}
                                                source={image.image}
                                            />
                                        ))}
                                    </View>
                                </View>
                                <View style={styles.rankTextView}>
                                    <Text style={styles.rankText} numberOfLines={1}>{item.rank}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            )}

            {activeButton === 'Expected Rating' && (
                <FlatList
                    data={ExpectedPlayers}
                    style={{ marginTop: hp(2) }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.playerView}>
                                <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
                                <View style={styles.nameContainer}>
                                    <Text style={styles.playerNameText} numberOfLines={1}>{item.name}</Text>
                                    <View style={styles.allUsersImageView}>
                                        {item.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                resizeMode="contain"
                                                style={styles.allUsersImage}
                                                source={image.image}
                                            />
                                        ))}
                                    </View>
                                </View>
                                <View style={styles.rankTextView}>
                                    <Text style={styles.rankText} numberOfLines={1}>{item.rank}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            )}
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
                height={200}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        // alignItems: "center",
                        // alignSelf:"center",
                        borderTopLeftRadius: radius.four,
                        borderTopRightRadius: radius.four,
                    }
                }}
            >
                <View style={styles.rbwView}>
                    <TouchableOpacity onPress={() => refRBSheet.current.close()} style={styles.rbwCancelbtn}>
                        <Image style={styles.rbwCancelImage} source={require('../../../../assets/images/rbw_cancel_image.png')} />
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={styles.rbwHeadText}>Game Type</Text>
                    <View style={styles.rbwBtnsView}>
                        <TouchableOpacity
                            style={[
                                styles.rbwBtnRapid,
                                isButtonActive('Rapid') ? styles.rbwBtnRapidFocus : null,
                            ]}
                            onPress={() => handleButtonPress('Rapid')}
                        >
                            <Text
                                allowFontScaling={false}
                                style={[
                                    styles.rbwBtnsText,
                                    isButtonActive('Rapid') ? styles.rbwBtnsTextFocus : null,
                                ]}
                            >
                                Rapid
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.rbwBtnBlitz,
                                isButtonActive('Blitz') ? styles.rbwBtnBlitzFocus : null,
                            ]}
                            onPress={() => handleButtonPress('Blitz')}
                        >
                            <Text
                                allowFontScaling={false}
                                style={[
                                    styles.rbwBtnsText,
                                    isButtonActive('Blitz') ? styles.rbwBtnsTextFocus : null,
                                ]}
                            >
                                Blitz
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.rbwBtnClassical,
                                isButtonActive('Classical') ? styles.rbwBtnClassicalFocus : null,
                            ]}
                            onPress={() => handleButtonPress('Classical')}
                        >
                            <Text
                                allowFontScaling={false}
                                style={[
                                    styles.rbwBtnsText,
                                    isButtonActive('Classical') ? styles.rbwBtnsTextFocus : null,
                                ]}
                            >
                                Classical
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

            {/* </View> */}

        </ScrollView>
    )
}

export default GameType