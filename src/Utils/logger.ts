import log4js from "log4js";

export class ILogger {
    trace: Function;
    debug: Function;
    info: Function;
    warn: Function;
    error: Function;
    fatal: Function;
}

export function Configure(configuration: log4js.Configuration): void {
    log4js.configure(configuration);
}

export function GetLogger(category?: string): ILogger {
    return log4js.getLogger(category);
}

export default GetLogger("console");
