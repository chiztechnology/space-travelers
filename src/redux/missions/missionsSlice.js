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
  reducers: {
    reserveMission(state, action) {
      const missions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return {
            // set the reverse value
            ...mission, reserved: !mission.reserved,
          };
        }
        return mission;
      });
      return { ...state, missions };
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => {
      const currState = state;
      currState.missions = action.payload;
    },
  },
});

export const { reserveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
