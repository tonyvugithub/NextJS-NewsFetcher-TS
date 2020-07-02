import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import topicReducer from './slices/topicSlice';

export const store = configureStore({
  reducer: {
    //Name of the state is here
    theme: themeReducer,
    topic: topicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
