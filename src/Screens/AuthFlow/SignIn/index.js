import { styles } from './style'
import react, { useState } from 'react'
import { Image, Text, View, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { TouchableHighlight, Button } from "react-native";
import Header from '../../../Components/Header'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../../Constant';
import { useDispatch,useSelector } from 'react-redux';
import { setCounter, setToken, setUser } from '../../../Redux/reducer';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useFormikContext } from 'formik';


const SignIn = ({ navigation }) => {
  const [focusedField, setFocusedField] = useState(null)

  const dispatch = useDispatch()

  const counter = useSelector((state) => state.reducer.counter);
  const token = useSelector((state) => state.reducer.token);
  console.log('token', token)
  
  const signIn = async () => {
    console.log('TEST SIGN IN')
    // GoogleSignin.signOut();
    try {
      GoogleSignin.configure({

        webClientId: '935541171349-t5g3cdi21blboap45b0hd4ljp69mg5ht.apps.googleusercontent.com',
        offlineAccess: true,
        forceCodeForRefreshToken: false,
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      googleLogin(userInfo);

      // console.log('userInfo... ', userInfo.user.id);
    } catch (error) {
      // console.log('error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SignInCancelled err... ', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('statusCode inProgress err... ', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('stratusCode not available err... ', error);
        // play services not available or outdated
      } else {
        console.log('else err... ', error);
        // some other error happened
      }
    }
  };

  //used to clear the fields before navigating
  const clearForm = (resetForm) => {
    resetForm();
  };
  

  const SignInSchema = Yup.object().shape({
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

  });


  return (

    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values, {resetForm}) => {
        
        console.log(values);
        dispatch(setCounter(1));
        dispatch(setToken("Hello World"));

        console.log('SignIn Counter',counter)
        console.log('SignIn Token',token)
        clearForm(resetForm);
        setFocusedField(null)
       
      }}
      

      validateOnMount={true}
      validationSchema={SignInSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldTouched, isValid, handleSubmit }) => (



        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
         
          <Header
            logo={require("../../../../assets/images/chess_logo.png")}


          />
          {/* <Image  style={styles.welcomeEmoji} source={require('../../../../assets/images/welcome_icon.png')}/> */}
          <Text allowFontScaling={false} style={styles.welcomeText}>Welcome <Text style={styles.welcomeEmoji}>👋</Text></Text>
          <Text allowFontScaling={false} style={styles.loginHead}>Log in to continue</Text>


          {/* <Text style={styles.inputFieldLabels}>Phone Number</Text> */}
          <View style={[
            // focusemail ? styles.emailFieldViewFocus : styles.emailFieldView
            focusedField === 'email' ? styles.emailFieldViewFocus : styles.emailFieldView
          ]}>


            <Image style={styles.emailFieldIcon}
              source={require('../../../../assets/images/mail_icon.png')}
            />
            <TextInput style={styles.inputFieldsDesign}
              onFocus={() => setFocusedField('email')}
              onBlur={
                handleBlur('email')
                //    setFocusedField(null); // Reset the focusedField state
              }
              placeholder="Email"
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
            focusedField === 'password' ? styles.passwordFieldViewFocus : styles.passwordFieldView

          ]}>
            <Image style={styles.passwordFieldIcon} resizeMode='stretch'
              source={require('../../../../assets/images/lock_icon.png')}
            />
            <TextInput secureTextEntry={true} style={styles.inputFieldsDesign}
              onFocus={() => setFocusedField('password')}
              onBlur={handleBlur('password')}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              placeholderTextColor={styles.placeholderTextColor}
            >
            </TextInput>

          </View>
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <Text allowFontScaling={false} onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotText}>Forgot Password?</Text>


          <TouchableOpacity
            onPress={() => handleSubmit()} style={styles.btnLogin}>
            <Text allowFontScaling={false} style={styles.loginText}>Login</Text>
          </TouchableOpacity>


          <Text allowFontScaling={false} style={styles.orText}>or</Text>


          <TouchableOpacity onPress={() => signIn()} style={styles.btnGoogle}>
            <Image style={styles.googleImage}
              source={require('../../../../assets/images/google_icon.png')}
            />
            <Text allowFontScaling={false} style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          <Text allowFontScaling={false} style={styles.dontHaveAcc}>Don't have an account?
            <Text allowFontScaling={false} onPress={() => navigation.navigate('SignUp')} style={styles.signUpText}> Sign Up</Text>
          </Text>


        </ScrollView>
      )}
    </Formik>

  )

}
export default SignIn

