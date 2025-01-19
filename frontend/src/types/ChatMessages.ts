export default interface Message {
  sender: From;
  message: string;
}

export enum From {
  Bot,
  User,
}
