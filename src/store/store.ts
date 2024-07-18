import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import questionsReducer from './questions/questions.slice';
import leaderboardReducer from './questions/leaderboard.slice';
import userReducer from './auth/AuthSlice';

const leaderboardPersistConfig = {
  key: 'leaderboard',
  storage: AsyncStorage,
};
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const persisteduserReducer = persistReducer(userPersistConfig, userReducer);
const persistedLeaderboardReducer = persistReducer(leaderboardPersistConfig, leaderboardReducer);

const rootReducer = combineReducers({
  questions: questionsReducer,
  leaderboard: persistedLeaderboardReducer,
  auth: persisteduserReducer,
});

export const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);

  return { store, persistor };
};

// RootState and AppThunk definitions
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Export configured store
export default configureAppStore();
