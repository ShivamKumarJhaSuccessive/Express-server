import Configure from "./config/configuration";
import Server from "./server";
const server = new Server (Configure)
server.bootstrap()
server.run()

