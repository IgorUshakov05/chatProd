import { makeAutoObservable } from "mobx";

class UserStore {

  constructor() {
    makeAutoObservable(this);
  }
}

// Экспортируем экземпляр UserStore
const userStore = new UserStore();
export default userStore;
