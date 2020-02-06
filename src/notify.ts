import { REPLServer } from "repl";

export class Notifier {
    server: REPLServer
    constructor(server: REPLServer) {
        this.server = server;
    }

    send(message: string) {
        console.log("\n" + message)
        this.server.displayPrompt(true);
    }
}