'use strict';

import IOWx from './lib/wxapp-socket-io';
import IO from 'socket.io-client';

module.exports = {
  io: typeof wx !== 'undefined' && wx.connectSocket ? IOWx : IO
};
