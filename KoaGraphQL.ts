import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import * as koa from "koa";
import { buildSchema } from "type-graphql";
import hotelsResolver from "./hotelsResolver";
import { graphqlHTTP } from "koa-graphql";
import "./createConnection";

async function main(){
const app = new koa();
const resolvers = await buildSchema({resolvers:[hotelsResolver]});
const apolloserver = new ApolloServer({schema:resolvers});
const router = new Router();
router.all("/graphql",graphqlHTTP({schema:resolvers}));
apolloserver.applyMiddleware({app});
app.use(router.routes());
app.listen(process.env.PORT || 3020 , ()=>console.log("graphql is running"))
}

main();