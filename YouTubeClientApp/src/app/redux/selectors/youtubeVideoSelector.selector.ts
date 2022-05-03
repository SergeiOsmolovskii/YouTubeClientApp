import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICustomVideosState } from "../reducers/customVideoReducer.reducer";

export const selectState = createFeatureSelector<ICustomVideosState>("youtubeVideos");

export const selectCustomVideos = createSelector( 
  selectState,
  (state: ICustomVideosState) => state.customVideos
);