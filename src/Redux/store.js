// // import {
// //     configureStore,
// //     createStore,
// //     getDefaultMiddleware,
// //   } from '@reduxjs/toolkit';
// //   import {setupListeners} from '@reduxjs/toolkit/dist/query';
// // //   import {persistReducer} from 'redux-persist';
// //   import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { persistReducer, persistStore } from 'redux-persist';

// // //   import reducer from './Reducer';
// //   import AuthSlice from './slice';
// //   const persistConfig = {
// //     key: 'root',
// //     storage: AsyncStorage,
// //   };
// //   const persistedReducer = persistReducer(persistConfig, AuthSlice);
  
// //   export const Store = configureStore({
// //     reducer: {
// //       reducer: persistedReducer,
// //     },
// //   });
// //   setupListeners(Store.dispatch);

// // import {
// //     configureStore,
// //     getDefaultMiddleware,
// //     combineReducers,
// //   } from '@reduxjs/toolkit';
// //   import { persistReducer, persistStore } from 'redux-persist';
// //   import AsyncStorage from '@react-native-async-storage/async-storage';
  
// //   import AuthSlice from './slice';
  
// //   const reducers = combineReducers({
// //     reducer: AuthSlice,
// //   });
  
// //   const persistConfig = {
// //     key: 'root', // Storage key
// //     storage: AsyncStorage, // Storage engine
// //     whitelist: ['reducer'], // Array of reducers to persist (only 'reducer' in this example)
// //   };
  
// //   const persistedReducer = persistReducer(persistConfig, reducers);
  
// //   export const store = configureStore({
// //     reducer: persistedReducer,
// //     // middleware: [...getDefaultMiddleware({ serializableCheck: false })], // You might need to adjust this based on your needs
// //   });
  
// //   export const persistor = persistStore(store);
  
  
// // Import the necessary modules


// // import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { persistReducer, persistStore } from 'redux-persist';

// // import AuthSlice from './slice'; // Assuming this is your reducer slice

// // // Combine your reducers, including the one with the counter
// // const reducers = combineReducers({
// //   reducer: AuthSlice,
// //   // Add other reducers here if needed
// // });

// // // Configure the Redux persist
// // const persistConfig = {
// //   key: 'root', // Storage key
// //   storage: AsyncStorage, // Storage engine
// //   whitelist: ['reducer'], // Specify the reducers to persist
// // };

// // // Wrap your reducers with persistReducer
// // const persistedReducer = persistReducer(persistConfig, reducers);

// // // Create the Redux store
// // export const store = configureStore({
// //   reducer: persistedReducer,
// // //   middleware: [...getDefaultMiddleware({ serializableCheck: false })],
// // });

// // // Create a persistor to rehydrate the store
// // export const persistor = persistStore(store);

// // import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { persistReducer, persistStore } from 'redux-persist';

// // import AuthSlice from './slice';

// // const persistConfig = {
// //   key: 'root',
// //   storage: AsyncStorage,
// // };

// // const persistedReducer = persistReducer(persistConfig, AuthSlice);

// // export const store = configureStore({
import AsyncStorage from "@react-native-async-storage/async-storage";
import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query";
import {persistReducer} from "redux-persist";
import {postApi} from "../Services/index";
import AuthSlice from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, AuthSlice);

export const Store = configureStore({
  reducer: {
    // [postApi.reducerPath]: postApi.reducer,
    reducer: persistedReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(Store.dispatch);