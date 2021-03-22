"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('^_^, 服务已经启动');
});
const data = [
    {
        id: 1,
        title: '关山月',
        content: '明月出天山，苍茫云海间'
    },
    {
        id: 2,
        title: '望岳',
        content: '会当凌绝岭，一览众山小'
    },
    {
        id: 3,
        title: '忆江南',
        content: '日出江花红似火，春来江水绿如蓝'
    },
];
app.get('/', (req, res) => {
    res.send(JSON.stringify(data));
});
app.get('/posts/:postId', (req, res) => {
    const { postId } = req.params;
    const posts = data.filter((item) => {
        return item.id === Number(postId);
    });
    res.send(JSON.stringify(posts[0]));
});
app.post('/posts', (req, res) => {
    let { body, header } = req;
    console.log(body, header);
    res.status(201);
    console.log(req.headers.singal);
    res.send({
        message: `成功创建了${body.name}`
    });
});
//# sourceMappingURL=main.js.map