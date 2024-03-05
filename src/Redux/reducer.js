import {createSlice} from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    token: '',
    user: [],
    meta: [],
    language: '',
    socialLogin: 'false',
    authCode: null,
    counter:0,
    // myFollowers: [],
    // myFollowing: [],
    // myPurchases: [],
  },
  reducers: {

    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMeta: (state, action) => {
      state.meta = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setSocialLogin: (state, action) => {
      state.socialLogin = action.payload;
    },
    setAuthCode: (state, action) => {
      state.authCode = action.payload;
    },

    setCounter:(state,action)=>{
      state.counter = action.payload
    },

    // setMyFollowers: (state, action) => {
    //   state.myFollowers = action.payload;
    // },
    // setMyFollowing: (state, action) => {
    //   const userId = action?.payload;

    //   const updatedFollowing = [...state.myFollowing];
    //   // Add the user to myFollowing
    //   if (userId !== null && userId !== undefined) {
    //     updatedFollowing.push(userId);
    //   }
    //   return {
    //     ...state,
    //     myFollowing: updatedFollowing,
    //   };
    // },
    // removeMyFollowing: (state, action) => {
    //   const userId = action?.payload;
    //   const updatedFollowing = [...state.myFollowing];
    //   // Remove the user from myFollowing
    //   const index = updatedFollowing.findIndex(id => id === userId);
    //   if (index !== -1) {
    //     updatedFollowing.splice(index, 1);
    //   }

    //   return {
    //     ...state,
    //     myFollowing: updatedFollowing,
    //   };
    // },

    setMyPurchases: (state, action) => {
      // console.log('action.payload', action.payload);
      state.myPurchases = action.payload;
    },
    // emptyToken: (state, action) => {
    //   state.token = action.payload;
    // },
  },
});

export const {
  setUser,
  setToken,
  setLanguage,
  setSocialLogin,
  setAuthCode,
  setCounter,
  // setMyFollowers,
  // setMyFollowing,
  setMyPurchases,
  setMeta,
  // removeMyFollowing,
} = AuthSlice.actions;

export default AuthSlice.reducer;