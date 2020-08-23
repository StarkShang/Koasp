import { WebHost } from "../src/Core/WebHost";
import { Startup } from "./Startup";

try {
    WebHost
        .CreateDefaultBuilder()
        .UsePort(3000)
        .UserStartup(new Startup())
        .Build()
        .Run();
} catch (error) {
    console.error(error);
}
