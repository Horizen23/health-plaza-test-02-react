import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  user: {
    name: string | null;
    id: string | null;
  };
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: {
    name: null,
    id: null,
  },
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
      state.user.id = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user.name = null;
      state.user.id = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
