import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    accessToken: string | null;
    email: string | null;
    connected: boolean;
}

const initialState: AuthState = {
    accessToken: null,
    email: null,
    connected: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthenticate: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.connected = true;
    },
    onLogout: (state) => {
      state.accessToken = null;
      state.email = null;
      state.connected = false;
    }
  },
});

export const { onAuthenticate, onLogout } = authSlice.actions;

export default authSlice.reducer;
