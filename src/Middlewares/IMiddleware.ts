import { Context } from "koa";

export interface IMiddleware {
    Invoke: (ctx: Context, next: () => Promise<any>) => void;
}
