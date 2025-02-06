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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Chat_1 = require("../database/Request/Chat");
const router = (0, express_1.Router)();
router.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        console.log(e);
    }
}));
exports.default = router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        if (!id)
            return res
                .status(404)
                .json({ success: false, message: "Чат не найден" });
        let chat = yield (0, Chat_1.find_chat_by_id)(id);
        return res.status(201).json(chat);
    }
    catch (e) {
        console.log(e);
        return res
            .status(404)
            .json({ success: false, message: "Не удалось найти чат" });
    }
}));
