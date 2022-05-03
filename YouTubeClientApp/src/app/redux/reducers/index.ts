import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { customVideoReducer, ICustomVideosState } from './customVideoReducer.reducer';
import { IYoutubeVideosState, youtubeVideoReducer } from './youtubeVideoReducer.reducer';

export interface State {
  youtubeVideoSatae: IYoutubeVideosState;
  customVideosState: ICustomVideosState;
}

export const reducers: ActionReducerMap<State> = {
  youtubeVideoSatae: youtubeVideoReducer,
  customVideosState: customVideoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
