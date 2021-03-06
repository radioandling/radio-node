"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRouter_1 = __importDefault(require("../post/postRouter"));
const app_middleware_1 = require("./app.middleware");
const app = express_1.default();
app.use(express_1.default.json());
app.use(postRouter_1.default);
app.use(app_middleware_1.defaultErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map