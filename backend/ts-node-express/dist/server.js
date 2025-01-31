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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Router_1 = __importDefault(require("./Auth//Router"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: ["http://localhost:3000"] }));
const port = process.env.PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("TypeScript Server");
});
app.use(Router_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let database = yield mongoose_1.default.connect(process.env.DATABASE_URL || "");
        console.log("Подключение к бд");
        yield app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
