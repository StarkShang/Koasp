import { WebHost } from "./Core/WebHost";
import { Startup } from "./Startup";

const app = WebHost
    .CreateDefaultBuilder()
    .UsePort(3000)
    .UserStartup(new Startup())
    .Build()
    .Run();
