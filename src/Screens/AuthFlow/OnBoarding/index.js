import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Swiper from 'react-native-swiper';

const OnBoarding = ({ navigation }) => {
  const slides = [
    {
      id: 1,
      image: require('../../../../assets/images/on_board_one.png'),
      text: 'היי, טוב לראות אותך!',
      description: 'עידן חדש לניהול חיי השחמט שלך בפתח. הרבה פיצ’רים מגניבים שתפורים בול בשבילך בדרך.',
    },
    {
      id: 2,
      image: require('../../../../assets/images/on_board_two.png'),
      text: 'אירועים על הסף',
      description: 'אחד מהם, לדוגמא, זה יומן לניהול התחרויות והמשחקים.הרשמה, ניהול ויצירת אירועים בכמה לחיצות. שנתחיל?',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  // Buttons Logic when press on Next btn's of slider
  const handleNext = () => {
    if (currentIndex === 1) {
      // Navigate to the SignIn screen when on the second slide
      navigation.navigate('SignIn');
      
    } else {
      // Go to the next slide
      setCurrentIndex(currentIndex + 1);
    }
  };


  return (
    <View style={styles.mainContainer}>
      <Image resizeMode='contain' style={styles.mainImage} source={slides[currentIndex].image} />

      <Swiper
        loop={false}
        showsPagination={false}
        // style={styles.wrapper}
        onIndexChanged={onIndexChanged}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slideContainer}>
            <Text allowFontScaling={false} style={styles.mainText}>{slide.text}</Text>
            <Text allowFontScaling={false} style={styles.descpText}>{slide.description.replace(/\./g, '.\n')}</Text>

            {/* Dots */}
            <View style={styles.dotContainer}>
              {slides.map((_, dotIndex) => (
                <View
                  key={dotIndex}
                  style={[
                    styles.dot,
                    currentIndex === dotIndex ? styles.activeDot : null,
                  ]}
                />
              ))}
            </View>

            {/* Skip and Next buttons */}
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text allowFontScaling={false} style={styles.btnSkipText}>Skip</Text>
              </TouchableOpacity>
              {/* {currentIndex < slides.length - 1 && ( */}
              <TouchableOpacity onPress={handleNext} style={styles.btnNext}>
                <Text allowFontScaling={false} style={styles.btnNextText}>Next</Text>
              </TouchableOpacity>
              {/* )} */}
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OnBoarding;
