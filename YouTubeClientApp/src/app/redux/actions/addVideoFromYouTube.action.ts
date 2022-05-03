import { createAction, props } from "@ngrx/store";
import { IResponseItem } from "src/app/youtube/models/video-response.model";

export const getYoutubeVideos = createAction(
  "[YOUTUBE VIDEOS] getYoutubeVideos",
  props<{ youtubeVideos: IResponseItem[] }>()
);
