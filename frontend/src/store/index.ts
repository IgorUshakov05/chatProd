import { makeAutoObservable } from "mobx";

class UserStore {
  user = {
    login: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setLogin(newLogin: string) {
    this.user.login = newLogin;
  }

  setPassword(newPassword: string) {
    this.user.password = newPassword;
  }
}

// Экспортируем экземпляр UserStore
const userStore = new UserStore();
export default userStore;
