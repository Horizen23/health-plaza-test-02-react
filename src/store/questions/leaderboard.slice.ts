import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LeaderboardItem {
  id: string;
  name: string;
  score: number;
}

interface LeaderboardState {
     leaderboardData: LeaderboardItem[];
}

const initialState: LeaderboardState = {
         leaderboardData: [
           { id: '1', name: 'Alice', score: 4 },
         ],
};
       

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    updateScore: (state, action: PayloadAction<{ id: string; score: number; name: string }>) => {
      const { id, score, name } = action.payload;
      const existingIndex = state.leaderboardData.findIndex((item) => item.id === id);

      if (existingIndex !== -1) {
        state.leaderboardData[existingIndex].score = score;
      } else {
        state.leaderboardData.push({ id, score, name });
      }
      state.leaderboardData.sort((a, b) => b.score - a.score);

    },
  },
});

export const { updateScore } = leaderboardSlice.actions;

export const selectLeaderboardData = (state: RootState) => state.leaderboard.leaderboardData;

export default leaderboardSlice.reducer;
