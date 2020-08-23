import { ApplicationBuilder } from "../src/Core/ApplicationBuilder";
import { IStartup } from "../src/Core/IStartup";
import { ApolloServerMiddleware } from "../src/Middlewares/ApolloServerMiddleware";
import { ApolloServer } from "apollo-server-koa";

export class Startup implements IStartup {
    public Configure(builder: ApplicationBuilder): void {
        builder.Use(async (ctx) => {
            ctx.body = "hello world!";
        });
        builder.UseMiddleware(new ApolloServerMiddleware(
            new ApolloServer({})
        ));
    }
}
