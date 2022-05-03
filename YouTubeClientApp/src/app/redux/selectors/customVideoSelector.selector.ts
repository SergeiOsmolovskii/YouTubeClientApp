import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IYoutubeVideosState } from "../reducers/youtubeVideoReducer.reducer";

export const selectState = createFeatureSelector<IYoutubeVideosState>("youtubeVideos");

export const selectYoutubeVideos = createSelector( 
  selectState,
  (state: IYoutubeVideosState) => state.youtubeVideos
);