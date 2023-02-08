import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const FETCH = 'missions/FETCH';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk(FETCH, async () => {
  const missions = await api.get('/missions');
  return missions.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      const currState = state;
      currState.missions = action.payload;
    },
  },
});

export default missionsSlice.reducer;
