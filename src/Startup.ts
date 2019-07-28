import { ApplicationBuilder } from "./Core/ApplicationBuilder";
import { IStartup } from "./Core/IStartup";

export class Startup implements IStartup {
    public Configure(app: ApplicationBuilder): void {
        app.Use(async (ctx) => {
            ctx.body = "hello world!";
        });
    }
}
