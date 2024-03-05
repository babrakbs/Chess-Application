import { useState } from 'react'
import { Image, Text, View, TextInput } from 'react-native'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../../Components/Header'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../../Constant'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ForgorPassword = ({ navigation }) => {

    const [focusedField, setFocusedField] = useState(null)

    const [focusemail, setFocusEmail] = useState(false)

    const handleLeftIconPress = () => {
        navigation.navigate('SignIn')
    }

    const ForgotSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Please enter your Email')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Check Your Email Pattern !'),


    });

    return (
        <Formik
            initialValues={{
                email: ''
            }}

            validationSchema={ForgotSchema}
            validateOnMount={true}

            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, setFieldTouched, isValid, handleSubmit }) => (


                <View style={styles.mainCointer}>

                    <Header
                        logo={require('../../../../assets/images/chess_logo.png')}
                        leftIconTop={require('../../../../assets/images/arrow_back_icon.png')}
                        onBackButtonPressTop={handleLeftIconPress}
                    />
                    <Text allowFontScaling={false} style={styles.forgotPasswordText}>Forgot Password</Text>
                    <Text allowFontScaling={false} style={styles.descpText}>Don't worry it happens. Please enter your the email address with associated with your account</Text>

                    <View style={[focusedField === 'email' ? styles.emailFieldViewFocus : styles.emailFieldView]}>
                        <Image style={styles.emailFieldIcon}
                            source={require('../../../../assets/images/mail_icon.png')}
                        />
                        <TextInput keyboardType='email-address' style={styles.inputFieldsDesign}
                            onFocus={() => setFocusedField('email')}
                            onBlur={handleBlur('email')}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            placeholderTextColor={styles.placeholderTextColor}
                        >
                        </TextInput>
                    </View>
                    {touched.email && errors.email && (
                        <Text allowFontScaling={false} style={styles.errorText}>{errors.email}</Text>
                    )}

                    <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')} style={styles.btnSubmit}>
                        <Text allowFontScaling={false} style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            )}
        </Formik>
    )
}

export default ForgorPassword