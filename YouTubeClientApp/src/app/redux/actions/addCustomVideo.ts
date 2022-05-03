import { createAction, props } from "@ngrx/store";
import { ICustomVideos } from "../state.models";

export const createCustomVideos = createAction(
  "[CUSTOM VIDEOS] getCustomVideos",
  props<{ customVideo: ICustomVideos }>()
  );