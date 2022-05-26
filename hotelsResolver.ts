import { Query, Resolver } from "type-graphql";
import hotels from "./hotels";

@Resolver()
export default class hotelsResolver{
    @Query(()=>[hotels])
    hotelsx(): Promise<hotels[]>
    {return hotels.find();}
}