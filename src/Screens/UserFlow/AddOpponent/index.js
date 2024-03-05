// import React, { useState } from 'react';
// import { View, Image, Text, TextInput, FlatList } from 'react-native';
// import Header from '../../../Components/Header';
// import { styles } from './style';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { colors, fontSize } from '../../../Constant';

// const AddOpponent = ({ navigation }) => {
//     const [focususername, setFocusUsername] = useState(false);
//     const [focusrating, setFocusRating] = useState(false);

//     const handleLeftIconPress = () => {
//         navigation.navigate('Home');
//     };

//     const [searchQuery, setSearchQuery] = useState('');
//     const [isRatingEntered, setIsRatingEntered] = useState(false);

//     const handleSearch = (num) => {
//         setSearchQuery(num);
//     };

//     const Players = [
//         {
//             id: 1,
//             name: 'Neil',
//             profileimage: require('../../../../assets/images/user_image_four.png'),
//             rating: 1200,
//             rank: 'WGM',
//         },
//         {
//             id: 2,
//             name: 'Orel',
//             profileimage: require('../../../../assets/images/user_image_three.png'),
//             rating: 500,
//             rank: 'IM',
//         },
//         {
//             id: 3,
//             name: 'Mike',
//             profileimage: require('../../../../assets/images/user_image_two.png'),
//             rating: 500,
//             rank: 'GM',
//         },
//         {
//             id: 4,
//             name: 'Brandom',
//             profileimage: require('../../../../assets/images/user_image_three.png'),
//             rating: 2000,
//             rank: 'WGM',
//         },
//     ];

//     const filteredItems = Players.filter((item) =>
//         item.rating.toString().includes(searchQuery)
//     );

//     const handleSend = () => {
//         if (searchQuery.trim() !== '') {
//             setIsRatingEntered(true);
//         } else {
//             setIsRatingEntered(false);
//         }
//     };

//     // Background color for ranks
//     const getBackgroundColor = (rank) => {
//         switch (rank) {
//           case 'GM':
//             return colors.flatlist_blue; // You can use your desired color here
//           case 'IM':
//             return colors.lightpink; // Another color
//           case 'WGM':
//             return colors.darkgreen; // Yet another color
//           default:
//             return colors.darkgreen; // Default color
//         }
//     };

//     const getTextColor = (rank) => {
//         switch (rank) {
         
//           case 'IM':
//             return colors.black; // Another color
 
//           default:
//             return colors.white; // Default color
//         }
//     };




//     return (
//         <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.mainContainer}>
//             <Header
//                 logo={require('../../../../assets/images/chess_logo.png')}
//                 leftIconTop={require('../../../../assets/images/arrow_back_icon.png')}
//                 title='Add Opponents'
//                 onBackButtonPressTop={handleLeftIconPress}
//             />
//         {/* <View style={focususername ? styles.usernameFieldViewFocus : styles.usernameFieldView}> */}

//             <View style={styles.usernameFieldViewFocus}>
//                 <Image style={styles.usernameFieldIcon} source={require('../../../../assets/images/user_icon.png')} />
//                 <TextInput
//                     style={styles.inputFieldsUsername}
//                     // onFocus={() => setFocusUsername(true)}
//                     // onBlur={() => setFocusUsername(false)}
//                     // placeholder="Username"
//                     placeholderTextColor={styles.placeholderTextColor}
//                 />
//             </View>
//             {/*             <View style={focusrating ? styles.ratingFieldViewFocus : styles.ratingFieldView}> */}
//             <View style={styles.ratingFieldViewFocus}>
//                 <Image style={styles.ratingFieldIcon} source={require('../../../../assets/images/star_rating.png')} />
//                 <TextInput
//                     style={styles.inputFieldsRating}
//                     // onFocus={() => setFocusRating(true)}
//                     // onBlur={() => setFocusRating(false)}
//                     placeholder="Enter Rating Number"
//                     onChangeText={handleSearch}
//                     placeholderTextColor={styles.placeholderTextColor}
//                 />
//                 <TouchableOpacity onPress={handleSend} style={styles.btnSend}>
//                     <Image resizeMode='center' style={styles.btnSend} source={require('../../../../assets/images/send_icon.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.horizontalLine}></View>
//             <Text allowFontScaling={false} style={styles.selectedOpponentText}>Selected Opponents</Text>

//             {isRatingEntered ? (
//                 <FlatList
//                     data={filteredItems}
//                     renderItem={({ item }) => {
//                         const backgroundColor = getBackgroundColor(item.rank);
//                         const textColor=getTextColor(item.rank)
//                         return (
//                             <View style={styles.playerView}>
//                                 <TouchableOpacity style={styles.flatlistCancelBtn}>
//                                     <Image style={styles.flatlistCancelIcon} resizeMode='contain' source={require('../../../../assets/images/flatlist_cancel_icon.png')} />
//                                 </TouchableOpacity>
//                                 <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
//                                 <View style={styles.nameContainer}>
//                                     <Text allowFontScaling={false} style={styles.playerNameText} numberOfLines={1}>{item.name}</Text>
//                                     <View style={styles.ratingView}>
//                                         <Image style={styles.starImage} resizeMode='contain' source={require('../../../../assets/images/gold_star_rating.png')} />
//                                         <Text allowFontScaling={false} style={styles.ratingText}>{item.rating}</Text>
//                                     </View>
//                                 </View>
//                                 <View style={[styles.rankTextView,{ backgroundColor }]}>
//                                     <Text allowFontScaling={false} style={[styles.rankText,{ textColor} ]} numberOfLines={1}>{item.rank}</Text>
//                                 </View>
//                             </View>
//                         );
//                     }}
//                 />
//             ) : null}

//             <TouchableOpacity style={styles.btnSubmit}>
//                 <Text allowFontScaling={false} style={styles.submitText}>Submit</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };

// export default AddOpponent;

import React, { useState } from 'react';
import { View, Image, Text, TextInput, FlatList } from 'react-native';
import Header from '../../../Components/Header';
import { styles } from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, fontSize } from '../../../Constant';

const AddOpponent = ({ navigation }) => {
    const [focususername, setFocusUsername] = useState(false);
    const [focusrating, setFocusRating] = useState(false);

    const handleLeftIconPress = () => {
        navigation.navigate('Home');
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [isRatingEntered, setIsRatingEntered] = useState(false);

    const handleSearch = (num) => {
        setSearchQuery(num);
    };

    const Players = [
        {
            id: 1,
            name: 'Neil',
            profileimage: require('../../../../assets/images/user_image_four.png'),
            rating: 1200,
            rank: 'WGM',
        },
        {
            id: 2,
            name: 'Orel',
            profileimage: require('../../../../assets/images/user_image_three.png'),
            rating: 500,
            rank: 'IM',
        },
        {
            id: 3,
            name: 'Mike',
            profileimage: require('../../../../assets/images/user_image_two.png'),
            rating: 500,
            rank: 'GM',
        },
        {
            id: 4,
            name: 'Brandom',
            profileimage: require('../../../../assets/images/user_image_three.png'),
            rating: 2000,
            rank: 'WGM',
        },
    ];

    const filteredItems = Players.filter((item) =>
        item.rating.toString().includes(searchQuery)
    );

    const handleSend = () => {
        if (searchQuery.trim() !== '') {
            setIsRatingEntered(true);
        } else {
            setIsRatingEntered(false);
        }
    };

    const rankColors = {
        GM: { backgroundColor: colors.flatlist_blue, textColor: colors.white },
        IM: { backgroundColor: colors.lightpink, textColor: colors.black },
        WGM: { backgroundColor: colors.darkgreen, textColor: colors.white },
    };

    return (
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <Header
                logo={require('../../../../assets/images/chess_logo.png')}
                leftIconTop={require('../../../../assets/images/arrow_back_icon.png')}
                title='Add Opponents'
                onBackButtonPressTop={handleLeftIconPress}
            />
            <View style={styles.usernameFieldViewFocus}>
                <Image style={styles.usernameFieldIcon} source={require('../../../../assets/images/user_icon.png')} />
                <TextInput
                    style={styles.inputFieldsUsername}
                    placeholderTextColor={styles.placeholderTextColor}
                />
            </View>
            <View style={styles.ratingFieldViewFocus}>
                <Image style={styles.ratingFieldIcon} source={require('../../../../assets/images/star_rating.png')} />
                <TextInput
                    style={styles.inputFieldsRating}
                    placeholder="Enter Rating Number"
                    onChangeText={handleSearch}
                    placeholderTextColor={styles.placeholderTextColor}
                />
                <TouchableOpacity onPress={handleSend} style={styles.btnSend}>
                    <Image resizeMode='center' style={styles.btnSend} source={require('../../../../assets/images/send_icon.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine}></View>
            <Text allowFontScaling={false} style={styles.selectedOpponentText}>Selected Opponents</Text>

            {isRatingEntered ? (
                <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => {
                        const rankColor = rankColors[item.rank];
                        return (
                            <View style={styles.playerView}>
                                <TouchableOpacity style={styles.flatlistCancelBtn}>
                                    <Image style={styles.flatlistCancelIcon} resizeMode='contain' source={require('../../../../assets/images/flatlist_cancel_icon.png')} />
                                </TouchableOpacity>
                                <Image resizeMode='contain' style={styles.profileImageStyle} source={item.profileimage} />
                                <View style={styles.nameContainer}>
                                    <Text allowFontScaling={false} style={styles.playerNameText} numberOfLines={1}>{item.name}</Text>
                                    <View style={styles.ratingView}>
                                        <Image style={styles.starImage} resizeMode='contain' source={require('../../../../assets/images/gold_star_rating.png')} />
                                        <Text allowFontScaling={false} style={[styles.ratingText]}>{item.rating}</Text>
                                    </View>
                                </View>
                                <View style={[styles.rankTextView,{ backgroundColor: rankColor.backgroundColor } ]}>
                                    <Text allowFontScaling={false} style={[styles.rankText, {color:rankColor.textColor}]} numberOfLines={1}>{item.rank}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            ) : null}

            <TouchableOpacity style={styles.btnSubmit}>
                <Text allowFontScaling={false} style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddOpponent;
