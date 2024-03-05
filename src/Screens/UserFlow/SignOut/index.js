import { useDispatch } from "react-redux";
import React, {useEffect} from 'react'
import { setCounter, setToken } from "../../../Redux/reducer";

const SignOutComponent = ({ navigation }) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      // This will run immediately after rendering the component, simulating an automatic sign out.
      dispatch(setCounter(0));
      dispatch(setToken(null));
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnBoarding' }]
      });
    }, [dispatch, navigation]);
  
    return null; // This component doesn't render anything visually.
  };

  export default SignOutComponent