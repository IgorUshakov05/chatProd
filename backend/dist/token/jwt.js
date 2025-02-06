"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_jwt_token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const create_jwt_token = ({ mail, id }) => {
    const access = jsonwebtoken_1.default.sign({ mail, id }, process.env.ACCESS_SECRET || "", {
        algorithm: "HS256",
        expiresIn: "1h",
    });
    const refresh = jsonwebtoken_1.default.sign({ mail, id }, process.env.ACCESS_SECRET || "", {
        algorithm: "HS256",
        expiresIn: "1m",
    });
    return { access, refresh };
};
exports.create_jwt_token = create_jwt_token;
