import { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Header from '../../../Components/Header'
import { colors } from '../../../Constant'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ResetPassword = ({ navigation }) => {
    const [focuspassword, setFocusPassword] = useState(false)
    const [focusconfirmpassword, setFocusConfirmPassword] = useState(false)
    
    const[focusedfield,setFocusedField]=useState(null)
    const SignInSchema = Yup.object().shape({
     
        password: Yup.string()
          .min(8, 'Too Short!')
          .required('Please enter your password !')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),

          confirmPassword:Yup.string()
          .min(8,'Confirm password must be 8 characters long !')
          .oneOf([Yup.ref('password')],'Your Password Do Not Match')
          .required('Confirm password is required !')
          
      });
    return (
        <Formik
        initialValues={{
            password:'',
            confirmPassword:''
        }}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
    
          validateOnMount={true}
          validationSchema={SignInSchema}
        >
      {({ values, errors, touched, handleChange, handleBlur, setFieldTouched, isValid, handleSubmit }) => (
        <View style={styles.mainContainer}>
            <Header
                logo={require("../../../../assets/images/chess_logo.png")}
               

            />
            <Text allowFontScaling={false} style={styles.resetPasswordHead}>Reset Password</Text>
            <Text allowFontScaling={false} style={styles.descpText}>Login in to Continue</Text>


            {/* <Text style={styles.inputFieldLabels}>Phone Number</Text> */}
            <View style={focusedfield === 'password' ? styles.passwordFieldViewFocus : styles.passwordFieldView}>
                <Image style={styles.passwordFieldIcon} resizeMode='stretch'
                    source={require('../../../../assets/images/lock_icon.png')}
                />
                <TextInput secureTextEntry={true} style={styles.inputFieldsDesign}
                    onFocus={() => setFocusedField('password')}
                    onBlur={handleBlur('password')}
                    placeholder="New Password"
                    onChangeText={handleChange('password')}
                    placeholderTextColor={styles.placeholderTextColor}
                >
                </TextInput>

            </View>
            {touched.password && errors.password && (
            <Text allowFontScaling={false} style={styles.errorText}>{errors.password}</Text>
          )}

            <View style={[focusedfield === 'confirmPassword' ? styles.passwordFieldViewFocus : styles.passwordFieldView]}>
                <Image style={styles.passwordFieldIcon} resizeMode='stretch'
                    source={require('../../../../assets/images/lock_icon.png')}
                />
                <TextInput secureTextEntry={true} style={styles.inputFieldsDesign}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    placeholder="Confirm New Password"
                    onChangeText={handleChange('confirmPassword')}

                    placeholderTextColor={styles.placeholderTextColor}
                >
                </TextInput>

            </View>
            {touched.confirmPassword && errors.confirmPassword && (
            <Text allowFontScaling={false} style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
            <TouchableOpacity

                style={styles.btnReset}>
                <Text allowFontScaling={false} style={styles.btnresetText}>Reset</Text>
            </TouchableOpacity>


            <View style={styles.footer}>
                <Text allowFontScaling={false} style={styles.needRestText}>Don’t need to reset? <Text onPress={() => navigation.navigate('SignIn')} style={styles.loginNowText}>Login Now</Text></Text>
            </View>

        </View>
        )}
        </Formik>
    )
}

export default ResetPassword    