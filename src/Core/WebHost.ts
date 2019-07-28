import { ApplicationBuilder } from "./ApplicationBuilder";

export class WebHost {
    public static CreateDefaultBuilder(): ApplicationBuilder {
        return new ApplicationBuilder();
    }
}
