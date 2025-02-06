export interface Create_User {
  mail: string;
  password: string;
}

export interface result_Create_User {
  success: boolean;
  error?: string;
  mail?: string;
  id_chat?: string,
  id?: string;
}
