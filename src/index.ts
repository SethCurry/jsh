import * as repl from 'repl';
import { Notifier } from './notify';

const server = repl.start({
    prompt: "> "
})

const notifier = new Notifier(server)
server.context.notifications = notifier
