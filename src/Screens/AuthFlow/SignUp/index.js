import { useState } from 'react'
import { View, Text, TextInput, Image, Alert } from 'react-native'
import Header from '../../../Components/Header'
import { styles } from './style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../../Constant'
import { addUser, setToken } from '../../../Redux/reducer'
import { useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ navigation }) => {


    const [focusedField, setFocusedField] = useState(null);


    const route = useRoute()
   

    const dispatch = useDispatch()

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username is Too Short!')
            .max(50, 'Username is Too Long!')
            .required('Please enter your username'),

        email: Yup.string()
            .email('Invalid email')
            .required('Please enter your Email')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Check Your Email Pattern !'),

        password: Yup.string()
            .min(8, 'Too Short!')
            .required('Please enter your password !')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),

        dob: Yup.string()
            .min(10, 'Enter Date of Birth in dashes')
            // .oneOf([Yup.ref('password')], 'Your Passwords do not match')
            .required('Date of Birth is required'),

        rating: Yup.string()
            .min(2, 'Enter Rating')
            // .oneOf([Yup.ref('password')], 'Your Passwords do not match')
            .required('Rating is required'),

    });

    return (
        <Formik initialValues={{
            username: '',
            email: '',
            password: '',
            dob: '',
            rating: '',
        }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            validateOnMount={true}
            validationSchema={SignupSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, setFieldTouched, isValid, handleSubmit }) => (
                <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
                    <Header
                        logo={require('../../../../assets/images/chess_logo.png')}
                    />

                    <Text allowFontScaling={false} style={styles.signUpHead}>Sign Up</Text>
                    <Text allowFontScaling={false} style={styles.signupDescp}>שמחים לראות שבחרת להצטרף לקהילה שלנו</Text>


                    {/* <Text style={styles.inputFieldLabels}>Phone Number</Text> */}
                    <View style={[
                    // focususername ? styles.usernameFieldViewFocus : styles.usernameFieldView,
                    focusedField === 'username'? styles.usernameFieldViewFocus: styles.usernameFieldView,

                    ]}>
                        <Image style={styles.emailFieldIcon}
                            source={require('../../../../assets/images/mail_icon.png')}
                        />
                        <TextInput style={styles.inputFieldsDesign}
                            onFocus={() => setFocusedField('username')}
                            onBlur={
                                handleBlur('username')
                                // setFocusedField(null); // Reset the focusedField state
                              }

                            placeholder="Enter your username"
                            value={values.username}
                            onChangeText={handleChange('username')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>

                    </View>
                    {/* <View style={{backgroundColor:'pink',alignSelf:'center' ,marginTop:hp(1),width:wp(90), height:hp(3)}}> */}
                    {touched.username && errors.username&& (
                        <Text allowFontScaling={false} style={styles.errorText}>{errors.username}</Text>
                    )}
                    {/* </View> */}


                    <View style={[
                        // focusemail ? styles.emailFieldViewFocus : styles.emailFieldView
                        focusedField === 'email'? styles.emailFieldViewFocus: styles.emailFieldView,

                        ]}>
                        <Image style={styles.emailFieldIcon}
                            source={require('../../../../assets/images/mail_icon.png')}
                        />
                        <TextInput keyboardType='email-address' style={styles.inputFieldsDesign}
                           onFocus={() => setFocusedField('email')}
                           onBlur={
                               handleBlur('email')
                            //    setFocusedField(null); // Reset the focusedField state
                             }
                            placeholder="Enter your email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>

                    </View>
                    {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}

                    <View style={[
                        // focuspassword ? styles.passwordFieldViewFocus : styles.passwordFieldView
                        focusedField === 'password'? styles.passwordFieldViewFocus: styles.passwordFieldView,
                    ]
                    }>
                        <Image style={styles.passwordFieldIcon} resizeMode='stretch'
                            source={require('../../../../assets/images/lock_icon.png')}
                        />
                        <TextInput secureTextEntry={true} style={styles.inputFieldsDesign}
                            onFocus={() => setFocusedField('password')}
                            onBlur={ 
                                handleBlur('password')
                                // setFocusedField(null); // Reset the focusedField state
                              }
                            placeholder="Enter your Password"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>

                    </View>
                    {touched.password && errors.password && (
                        <Text allowFontScaling={false} style={styles.errorText}>{errors.password}</Text>
                    )}

                    <View style={[
                        // focusecalendar ? styles.calendarFieldViewFocus : styles.calendarFieldView
                        focusedField === 'dob'? styles.calendarFieldViewFocus: styles.calendarFieldView,

                    ]}>
                        <Image style={styles.dateFieldIcon} resizeMode='stretch'
                            source={require('../../../../assets/images/calendar_icon.png')}
                        />
                        <TextInput keyboardType='numbers-and-punctuation' style={styles.inputFieldsDesign}
                           onFocus={() => setFocusedField('dob')}
                           onBlur={
                               handleBlur('dob')
                            //    setFocusedField(null); // Reset the focusedField state
                             }
                            placeholder="Date of Birth"
                            value={values.dob}
                            onChangeText={handleChange('dob')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>

                    </View>
                    {touched.dob && errors.dob && (
                        <Text allowFontScaling={false} style={styles.errorText}>{errors.dob}</Text>
                    )}

                    <View style={[
                        // focusrating ? styles.ratingFieldViewFocus : styles.ratingFieldView
                        focusedField === 'rating'? styles.ratingFieldViewFocus: styles.ratingFieldView,

                        ]}>
                        <Image style={styles.ratingFieldIcon} resizeMode='stretch'
                            source={require('../../../../assets/images/star_rating.png')}
                        />
                        <TextInput keyboardType='default' style={styles.inputFieldsDesign}
                           onFocus={() => setFocusedField('rating')}
                           onBlur={
                               handleBlur('rating')
                            //    setFocusedField(null); // Reset the focusedField state
                             }
                            placeholder="Israel Rating"
                            value={values.rating}
                            onChangeText={handleChange('rating')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>

                    </View>
                    {touched.rating && errors.rating && (
                        <Text allowFontScaling={false} style={styles.errorText}>{errors.rating}</Text>
                    )}

                    <Text allowFontScaling={false} style={styles.signingText}>By signing up, you're agree to our
                        <Text allowFontScaling={false} style={styles.termCondtionsText}>Term & Conditions</Text> and <Text style={styles.termCondtionsText}>Privacy Policy</Text></Text>


                    <TouchableOpacity onPress={() => {
                        // if (validate()) {
                        // dispatch(addUser({username,email,calendar,rating}),setToken('Hello Sign Up'))
                        navigation.navigate('SignUpData')
                        // console.log(dispatch(addUser({username,email,calendar,rating}),setToken('Hello Sign Up'))
                        // )
                        // }

                        // else {
                        //     Alert.alert('Please Fill Correct')
                        // }

                    }} style={styles.btnSignUp}>
                        <Text allowFontScaling={false} style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text allowFontScaling={false} style={styles.alreadyAccText}>Already have an account?<Text onPress={() => navigation.navigate('SignIn')} style={styles.loginText}> Log In</Text> </Text>
                    </View>
                </ScrollView>
            )}

        </Formik>
    )
}
export default SignUp