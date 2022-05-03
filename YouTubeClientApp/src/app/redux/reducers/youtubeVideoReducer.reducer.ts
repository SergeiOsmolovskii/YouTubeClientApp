import { createReducer, on } from "@ngrx/store";
import { IResponseItem } from "src/app/youtube/models/video-response.model";
import { getYoutubeVideos } from "../actions/addVideoFromYouTube.action";

export interface IYoutubeVideosState {
  youtubeVideos: IResponseItem[],
}

export const initialYoutubeVideoState: IYoutubeVideosState = {
  youtubeVideos: [],
}

export const youtubeVideoReducer = createReducer(
  initialYoutubeVideoState,
  on(getYoutubeVideos,
    (state, {youtubeVideos} ) => ({
    ...state,
    youtubeVideos: [...youtubeVideos]
  }))
);