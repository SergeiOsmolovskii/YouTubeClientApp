import { IResponseItem } from "../youtube/models/video-response.model";

export interface ICustomVideos {
  title: string
  discription: string,
  imageLink: string,
  link: string,
  date: string,
}

export interface IState {
  youtubeVideos: IResponseItem[],
  customVideos: ICustomVideos[]
}

export const initiaState: IState = {
  youtubeVideos: [],
  customVideos: []
}

export interface IResponseItemState {
  youtubeVideos: IResponseItem[]
}

export interface ICustomVideosState {
  customVideos: ICustomVideos[]
}