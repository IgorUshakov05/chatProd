export interface InputData {
  login: string;
  password: string;
}
export enum InputType {
  LOGIN,
  PASSWORD,
}
export type ActionType = {
  payload: string;
  type: InputType;
};
