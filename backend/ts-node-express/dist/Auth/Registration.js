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
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
const User_1 = require("../database/Request/User");
const jwt_1 = require("../token/jwt");
router.post("/registration", [
    (0, express_validator_1.body)("mail").isEmail().withMessage("Некорректный email").normalizeEmail(),
    (0, express_validator_1.body)("password")
        .isLength({ min: 8, max: 30 })
        .withMessage("Пароль должен быть не менее 8, не более 30 символов"),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res
                .status(400)
                .json({ success: false, errorList: errors.array() });
        const { mail, password } = req.body;
        const save_user = yield (0, User_1.create_user)({ mail, password });
        if (!save_user.success)
            return res.status(401).json({ save_user });
        let token = (0, jwt_1.create_jwt_token)({
            mail: save_user.mail || "",
            id: save_user.id || "",
        });
        return res.status(201).json(token);
    }
    catch (e) {
        console.error("Ошибка при регистрации в файле Registration.ts", e);
        return res.status(500).json({ success: false, error: "Ошибка сервера" });
    }
}));
exports.default = router;
