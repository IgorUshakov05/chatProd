export interface ResponseAuth {
  success: boolean;
  error?: string;
  errorList?: {
    location: string;
    msg: string;
    path: string;
    type: string;
  };
  access?: string;
  refresh: string;
}
