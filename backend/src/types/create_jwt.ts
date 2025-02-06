export interface create_jwt {
  mail: string;
  id: string;
}

export interface token {
  access: string;
  refresh: string;
}
