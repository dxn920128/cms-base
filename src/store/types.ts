import Frame from './module/frameTypings'

export interface IStoreState {
  user: Frame.UserInfo;
  frame: Frame.Frame;
}

export interface IAction<T> {
  type: string;
  payload: T;
}