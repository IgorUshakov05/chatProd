import { makeAutoObservable } from "mobx";

class UserStore {
  messages = [];
  constructor() {
    makeAutoObservable(this);
  }
}

// Экспортируем экземпляр UserStore
const userStore = new UserStore();
export default userStore;
