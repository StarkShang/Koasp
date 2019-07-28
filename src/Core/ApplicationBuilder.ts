import Koa from "koa";
import { Context } from "koa";
import { IMiddleware } from "../Middlewares/IMiddleware";
import { Application } from "./Application";
import { IStartup } from "./IStartup";

export class ApplicationBuilder {
    private app: Koa;
    private port: number;

    constructor() {
        this.app = new Koa();
        this.port = 80;
    }

    public Use(handler: (ctx: Context, next?: () => Promise<any>) => void): ApplicationBuilder {
        this.app.use(handler);
        return this;
    }

    public UsePort(port: number): ApplicationBuilder {
        this.port = port;
        return this;
    }

    public UserStartup(startup: IStartup): ApplicationBuilder {
        startup.Configure(this);
        return this;
    }

    public UseMiddleware(middleware: IMiddleware) {
        this.app.use(middleware.Invoke);
        return this;
    }

    public UseMiddlewareAsync(middleware: IMiddleware) {
        this.app.use(middleware.Invoke);
        return this;
    }

    public Build() {
        return new Application(this.app, this.port);
    }
}
