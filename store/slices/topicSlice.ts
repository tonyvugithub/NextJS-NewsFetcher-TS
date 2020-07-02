import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const topicSlice = createSlice({
  name: 'topic',
  initialState: {
    currentTopic: 'react',
  },
  reducers: {
    updateCurrentTopic: (state, action) => {
      state.currentTopic = action.payload.topic;
    },
  },
});

export const { updateCurrentTopic } = topicSlice.actions;

export const selectCurrentTopic = (state: RootState) =>
  state.topic.currentTopic;

export default topicSlice.reducer;
