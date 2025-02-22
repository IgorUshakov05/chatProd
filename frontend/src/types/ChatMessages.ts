export default interface Message {
  sender: From;
  text: string;
}

export enum From {
  Bot = 'Bot',
  User = 'User',
}
