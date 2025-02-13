import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import themeReducer from './reducers/themeSlice';
import authReducer from './reducers/authSlice';
import { heroesApi } from './services/heroes';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
