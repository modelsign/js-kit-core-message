declare let window: Window;
declare let require: any;

interface Window {
    msign: {
        jskit: any
    }
}

const io = require('socket.io-client');

class Message {

    server = null;
    cid = null;
    callback = null;
    socket = null;

    constructor(server: string,
                cid: string,
                callback: Function) {

        this.server = server;
        this.cid = cid;
        this.callback = callback;

        this._initSocket();
    }

    private _initSocket() {

        this.socket = io(this.server);
    }

    async start() {

    }

    async stop() {

    }
}

if (
    window &&
    window.msign &&
    window.msign.jskit
) {
    window.msign.jskit.Message = Message;
}

export default Message;
