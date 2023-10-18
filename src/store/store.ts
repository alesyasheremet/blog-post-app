// store.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogPostSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
