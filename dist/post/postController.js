"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postServer_1 = require("./postServer");
exports.index = (request, response, next) => {
    if (request.headers.authorization !== 'SECRET') {
        return next(new Error());
    }
    const posts = postServer_1.getPosts();
    response.send(posts);
};
//# sourceMappingURL=postController.js.map