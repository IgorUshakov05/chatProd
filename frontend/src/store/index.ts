import { makeAutoObservable } from "mobx";

class UserStore {
  messages = [];
  chatID: string = localStorage.getItem("chat_id") || "";
  constructor() {
    makeAutoObservable(this);
  }
  setChatID(id: string) {
    this.chatID = id;
  }
}

// Экспортируем экземпляр UserStore
const userStore = new UserStore();
export default userStore;
