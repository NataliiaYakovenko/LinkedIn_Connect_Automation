import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { startRun, stopRun } from "../../API/extensionApi";

const SLICE_NAME = "automation";

const initialState = {
  status: "idle",
  isLoading: false,
  error: null,
  progress: { current: 0, total: 0 },
  counters: { sent: 0, skipped: 0, failed: 0 },
  limits: { dailyRemaining: 20, weeklyRemaining: 100 },
  log: [],
};

const startRunThunk = createAsyncThunk(
  `${SLICE_NAME}/startRun`,
  async (params, thunkAPI) => {
    try {
      const response = await startRun();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const stopRunThunk = createAsyncThunk(
  `${SLICE_NAME}/stopRun`,
  async (params, thunkAPI) => {
    try {
      const response = await stopRun();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const automationSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    runStarted(state, action) {
      state.status = "running";
      state.progress.total = action.payload?.total ?? 0;
      state.progress.current = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startRunThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(startRunThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.status = "running";
    });
    builder.addCase(startRunThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "idle";
      state.error = action.payload;
    });

    builder.addCase(stopRunThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(stopRunThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.status = "stopped";
    });
    builder.addCase(stopRunThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.status = "idle";
      state.error = action.payload;
    });
  },
});

export const { runStarted } = automationSlice.actions;
export { startRunThunk, stopRunThunk };
export default automationSlice.reducer;
