import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface CounterState {
  albums: [];
}

const initialState: CounterState = {
  albums: []
};

export const albumsSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAlbums = (state: RootState) => state.counter.albums;

export default albumsSlice.reducer;