import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import hotels from "./hotels";

dotenv.config();

const conn = createConnection(
    { 
        name: process.env.NAME, 
        type: "postgres", 
        host: process.env.HOST, 
        port: 5432, 
        username: process.env.USERNAME, 
        password: process.env.PASSWORD, 
        database: process.env.DATABASE ,
        entities: [hotels]
     }
);

console.log(conn);