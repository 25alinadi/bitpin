import {io} from "socket.io-client";

const WS_URL = 'wss://ws.bitpin.ir'

export const socket = io(WS_URL, {
    withCredentials: true,
});