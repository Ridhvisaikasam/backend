import * as koa from "koa";
import "./createConnection";
import hotels from "./hotels";

const app = new koa();

app.use(async ctx => {
    const output = await hotels.find();
})

app.listen(process.env.PORT || 3015, () => console.log("orm is running"));