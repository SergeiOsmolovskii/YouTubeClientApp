export type sortType = 'desc' | 'asc' | '';
export type currentSortType = 'date' | 'count' | '';

export interface IVideoResponse {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: IResponseItem[]
}

interface IPageInfo {
  totalResult: number,
  resultPerPage: number
}

export interface IResponseItem {
  kind: string,
  etag: string,
  id: IId,
  snippet: IResponseSnippet,
  channelTitle: string,
  tags: [string],
  categoryId: string,
  liveBroadcastContent: string,
  localized: ILocalized,
  defaultAudioLanguage: string,
  statistics: IResponseStatistic
}

interface IId {
  kind: string, 
  videoId: string
}

interface ILocalized {
  title: string,
  description: string
}

interface IResponseSnippetThumbnails {
  url: string,
  width: number,
  height: number
}

export interface IResponseStatistic {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

interface IResponseSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails
}

interface IThumbnails {
  default: IResponseSnippetThumbnails,
  medium: IResponseSnippetThumbnails,
  high: IResponseSnippetThumbnails,
  standard: IResponseSnippetThumbnails,
  maxres: IResponseSnippetThumbnails
}