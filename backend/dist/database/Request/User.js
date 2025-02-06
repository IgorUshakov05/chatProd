"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_user = exports.create_user = void 0;
const UserSchema_1 = __importDefault(require("../Schema/UserSchema"));
const UserSchema_2 = __importDefault(require("../Schema/UserSchema"));
const ChatSchema_1 = __importDefault(require("../Schema/ChatSchema"));
const HashPassword_1 = require("../../secret/HashPassword");
const create_user = (_a) => __awaiter(void 0, [_a], void 0, function* ({ mail, password, }) {
    try {
        let find_user = yield UserSchema_2.default.findOne({ mail });
        if (find_user)
            return { success: false, error: "Пользователь уже существует" };
        let current_user = yield UserSchema_1.default.create({
            mail,
            hash_password: (0, HashPassword_1.encryptPassword)(password),
        });
        let new_chat = yield ChatSchema_1.default.create({});
        yield current_user.chatList.push({ id: new_chat.id });
        yield current_user.save();
        return { success: true, id: current_user.id, mail, id_chat: new_chat.id };
    }
    catch (e) {
        console.log(e);
        return { success: false, error: "Ошибка при регистрации" };
    }
});
exports.create_user = create_user;
const find_user = (_a) => __awaiter(void 0, [_a], void 0, function* ({ mail, password, }) {
    try {
        let find_user = yield UserSchema_2.default.findOne({ mail });
        if (!find_user)
            return { success: false, error: "Пользователь не найден" };
        if (!find_user.hash_password) {
            return { success: false, error: "Пароль не найден" };
        }
        let split_password = find_user.hash_password.split("|");
        let verify_password = yield (0, HashPassword_1.verifyPassword)(password, split_password[0], split_password[1]);
        if (!verify_password)
            return { success: false, error: "Пароль неверный" };
        console.log(find_user.chatList);
        let find_last_chat = yield ChatSchema_1.default.findOne({
            id: find_user.chatList[0].id,
        });
        if (!find_last_chat) {
            let new_chat = yield ChatSchema_1.default.create({});
            yield find_user.chatList.push({ id: new_chat.id });
            yield find_user.save();
            return { success: true, id: find_user.id, mail, id_chat: new_chat.id };
        }
        return {
            success: true,
            id: find_user.id,
            mail,
            id_chat: find_last_chat.id,
        };
    }
    catch (e) {
        console.log(e);
        return { success: false, error: "Ошибка при регистрации" };
    }
});
exports.find_user = find_user;
