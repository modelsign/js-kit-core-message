declare let window: Window;

interface Window {
    msign: {
        jskit: any
    }
}

class Message {

    server = null;
    cid = null;
    callback = null;

    constructor(server: string,
                cid: string,
                callback: Function) {

        this.server = server;
        this.cid = cid;
        this.callback = callback;
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
