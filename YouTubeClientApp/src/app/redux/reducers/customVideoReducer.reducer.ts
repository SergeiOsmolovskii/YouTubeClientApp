import { createReducer, on } from "@ngrx/store";
import { createCustomVideos } from "../actions/addCustomVideo.action";
import { ICustomVideos } from "../state.models";

export interface ICustomVideosState {
  customVideos: ICustomVideos[],
}

export const initialCustomVideosState: ICustomVideosState = {
  customVideos: [],
}

export const customVideoReducer = createReducer(
  initialCustomVideosState,
  on(createCustomVideos,
    (state, {customVideo} ) => ({
    ...state,
    customVideos: [...state.customVideos, customVideo]
  }))
);