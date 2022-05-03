import { createReducer, on } from "@ngrx/store";
import { IVideoResponse } from "src/app/youtube/models/video-response.model";
import { getYoutubeVideos } from "../actions/addVideoFromYouTube";

export interface IYoutubeVideosState {
  searchResults: IVideoResponse[],
}

export const initialYoutubeVideoState: IYoutubeVideosState = {
  searchResults: [],
}


export const youtubeVideoReducer = createReducer(
  initialYoutubeVideoState,
  on(getYoutubeVideos,
    (state, {searchResults} ) => ({
    ...state,
    customVideos: [...searchResults]
  }))
);