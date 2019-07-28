import Koa from "koa";

export class Application {
    private app: Koa;
    private readonly port: number;
    constructor(app: Koa, port: number = 80) {
        this.app = app;
        this.port = port;
    }

    public Run(callback?: () => void) {
        this.app.listen(this.port, callback);
    }
}
