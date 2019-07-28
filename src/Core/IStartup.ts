import { ApplicationBuilder } from "./ApplicationBuilder";

export interface IStartup {
    Configure: (app: ApplicationBuilder) => void;
}
