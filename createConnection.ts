import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import hotels from "./hotels";

dotenv.config();

createConnection({
    url: process.env.DATABASE_URL,
    entities: [hotels],
    type:"postgres",
    extra:{
        ssl:{
            rejectUnauthorized: false
        }
    }
})



/*
the only error was .env file PGSSLMODE

this change created extra error dont use this

const conn = async ()=>{
    const connect= await createConnection(
    { 
        name: process.env.DATABASE_NAME, 
        type: "postgres", 
        url:process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST, 
        port: 5432, 
        username: process.env.DATABASE_USERNAME, 
        password: process.env.DATABASE_PASSWORD, 
        database: process.env.DATABASE_DATABASE ,
        entities: [hotels],
        extra : {ssl : {rejectUnauthorised : false}}
     }
)}

console.log(conn);
*/