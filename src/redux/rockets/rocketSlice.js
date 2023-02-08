import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const FETCH = 'rockets/FETCH';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk(FETCH, async () => {
  const rockets = await api.get('/rockets');
  return rockets.data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImages: rocket.flickr_images,
  }));
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => {
      const currState = state;
      currState.rockets = action.payload;
    },
  },
});

export default rocketsSlice.reducer;
