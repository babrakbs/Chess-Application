import { useState, useRef } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Header from '../../../Components/Header'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../../Constant'
import { ScrollView } from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet";
import { radius } from '../../../Constant'
import { useSelector } from 'react-redux'


const CurrentExpectedRating = ({ navigation }) => {
    const refRBSheet = useRef();

    const token = useSelector(state => state.reducer.token)
    console.log('token', token)
    // const [isDrawerOpen,setIsDrawerOpen]=useState(false)

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



    const CurrentRatingPlayers = [
        {
            id: 1,
            name: 'Neil',
            profileimage: require('../../../../assets/images/profile_image.png'),
            rating: 2000,
            rank: 'WGM',
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
            rank: 'WGM',
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
        {
            id: 4,
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

        }
    ]
    const ExpectedRatingPlayers = [
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

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>

            <Header
                logo={require('../../../../assets/images/chess_logo.png')}
                title="All Player's"
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
                        Current Rating (224)
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
                        Expected Rating (1854)
                    </Text>
                </TouchableOpacity>
            </View>

            {activeButton === 'Current Rating' && (
                <FlatList
                    data={CurrentRatingPlayers}
                    style={{ marginTop: hp(2) }}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.playerView}>
                                <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
                                <View style={styles.nameContainer}>
                                    <Text allowFontScaling={false} style={styles.playerNameText} numberOfLines={1} >{item.name}</Text>
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
                                <View style={styles.ratingView}>
                                    <Image style={styles.starImage} resizeMode='contain' source={require('../../../../assets/images/gold_star_rating.png')}></Image>
                                    <Text allowFontScaling={false} style={styles.ratingText}>{item.rating}</Text>
    
                                </View>
                                <View style={styles.rankTextView}>
    
                                    <Text allowFontScaling={false} style={styles.rankText} numberOfLines={1}>{item.rank}</Text>
                                </View>
    
                            </View>
                        );
                    }}
                />
            )}

            {activeButton === 'Expected Rating' && (
                <FlatList
                    data={ExpectedRatingPlayers}
                    style={{ marginTop: hp(2) }}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.playerView}>
                                <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
                                <View style={styles.nameContainer}>
                                    <Text allowFontScaling={false} style={styles.playerNameText} numberOfLines={1} >{item.name}</Text>
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
                                <View style={styles.ratingView}>
                                    <Image style={styles.starImage} resizeMode='contain' source={require('../../../../assets/images/gold_star_rating.png')}></Image>
                                    <Text allowFontScaling={false} style={styles.ratingText}>{item.rating}</Text>
    
                                </View>
                                <View style={styles.rankTextView}>
    
                                    <Text allowFontScaling={false} style={styles.rankText} numberOfLines={1}>{item.rank}</Text>
                                </View>
    
                            </View>
                        );
                    }}
                />
            )}

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={220}
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

            <View style={styles.footer}>

                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.floatingButton}>
                    <Image style={styles.floatingPlusImage} source={require('../../../../assets/images/floating_plus_icon.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.expectedRatingView}>
                <Text allowFontScaling={false} style={styles.expectedRatingText}>Expected rating</Text>

                <View style={styles.expectedRatingBtnsView}>

                    <TouchableOpacity>
                        <Image resizeMode='center' style={styles.expectedRatingUndoImage} source={require('../../../../assets/images/undo_icon.png')}></Image>
                    </TouchableOpacity>
                    <View style={styles.verticalLine}></View>
                    <TouchableOpacity>
                        <Image resizeMode='center' style={styles.expectedRatingResetImage} source={require('../../../../assets/images/reset_icon.png')}></Image>
                    </TouchableOpacity>
                </View>


            </View>

            <TouchableOpacity style={styles.calculateBtn}>
                <Text allowFontScaling={false} style={styles.calculateBtnText}>Calculate Rating</Text>
            </TouchableOpacity>

            <Text allowFontScaling={false} style={styles.ratingTextBottom}>The ratings may not be accurate</Text>

        </ScrollView>


    )
}

export default CurrentExpectedRating