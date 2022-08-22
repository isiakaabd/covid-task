import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://covidnigeria.herokuapp.com/api");
  const data = await response.json();
  return data;
});
export const dataSlice = createSlice({
  name: "fetchData",
  initialState: {
    isLoading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    });
  },
});
// reducers: {
//   fetchState: (state, action) => {
//     state.data = action.payload;
//   },
// },
// });

export default dataSlice.reducer;
