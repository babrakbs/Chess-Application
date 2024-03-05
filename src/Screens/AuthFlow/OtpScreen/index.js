import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Header from '../../../Components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OtpScreen = ({ navigation }) => {
  const [focusInput, setFocusInput] = useState(0); // Initialize focus state with 0

  const handleLeftIconPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.mainContainer}>
      <Header
        logo={require('../../../../assets/images/chess_logo.png')}
        leftIconTop={require('../../../../assets/images/arrow_back_icon.png')}
        onBackButtonPressTop={handleLeftIconPress}
      />
      <Text allowFontScaling={false} style={styles.otpHead}>Enter OTP</Text>
      <Text allowFontScaling={false} style={styles.descpText}>
        A 4-digit code has been sent to your email
        <Text allowFontScaling={false} style={styles.descpEmail}> email@gmail.com</Text>
      </Text>

        <CodeField
        ref={ref}
        // {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.cell}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <TextInput
            placeholder='-'
            placeholderTextColor={styles.placeholderTextColor}
            key={index}
            style={[styles.otpInput, isFocused && styles.otpInputFocus]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </TextInput>
        )}
      />

      <TouchableOpacity onPress={()=> navigation.navigate('ResetPassword')} style={styles.btnVerify}>
        <Text allowFontScaling={false} style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
