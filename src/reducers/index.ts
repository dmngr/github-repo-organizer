import { createAction, createSlice } from "@reduxjs/toolkit";
import { Repository } from "../sagas";

const initialGridState = {
  filteringState: [],
  sortingState: [],
  searchState: "",
  columnVisibilityState: [
    "isPrivate",
    "isArchived",
    "isFork",
    "owner",
    "licenseNickname",
    "vulnerabilityAlerts",
    "collaborators",
    "issueCount",
  ],
};

export type GridState = typeof initialGridState;

type StateType = {
  gridState: GridState;
  repositories: Repository[];
};

const initialState: StateType = {
  gridState: initialGridState,
  repositories: [],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setRepositories: (state, { payload }) => ({
      ...state,
      repositories: [...(state.repositories || []), ...payload.repositories],
    }),
    deleteRepositories: (state) => ({
      ...state,
      repositories: [],
    }),
    setGridState: (state, { gridState }: any) => ({
      ...state,
      gridState,
    }),
  },
});

export const {
  setRepositories,
  deleteRepositories,
  setGridState,
} = mainSlice.actions;

export const refresh = createAction("REFRESH_REPOSITORIES");

export default mainSlice.reducer;
