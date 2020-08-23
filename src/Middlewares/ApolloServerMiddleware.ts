import { Context } from "koa";
import corsMiddleware from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { IMiddleware } from "./IMiddleware";
import { ApolloServer } from "apollo-server-koa";

export interface GetMiddlewareOptions {
    path?: string;
    cors?: corsMiddleware.Options | boolean;
    bodyParserConfig?: bodyParser.Options | boolean;
    onHealthCheck?: (ctx: Context) => Promise<any>;
    disableHealthCheck?: boolean;
}

export class ApolloServerMiddleware implements IMiddleware {
    public constructor(
        private server: ApolloServer,
        private configuration?: GetMiddlewareOptions) { }

    public Invoke = this.server.getMiddleware(this.configuration);
}
