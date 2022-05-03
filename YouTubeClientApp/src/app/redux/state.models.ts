import { IResponseItem } from "../youtube/models/video-response.model";

export interface ICustomVideos {
  title: string
  discription: string,
  imageLink: string,
  link: string,
  date: string,
}

export interface IState {
  searchResults: IResponseItem[],
  customVideos: ICustomVideos[]
}

export const initiaState: IState = {
  searchResults: [],
  customVideos: []
}

export interface IResponseItemState {
  searchResults: IResponseItem[]
}

export interface ICustomVideosState {
  customVideos: ICustomVideos[]
}