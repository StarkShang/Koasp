import { ApplicationBuilder } from "../src/Core/ApplicationBuilder";
import { IStartup } from "../src/Core/IStartup";

export class Startup implements IStartup {
    public Configure(app: ApplicationBuilder): void {
        app.Use(async (ctx) => {
            ctx.body = "hello world!";
        });
    }
}
