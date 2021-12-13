import { registerPlugin } from '@capacitor/core';
export interface QrPlugin {
  transparent():void
}

const Qr = registerPlugin<QrPlugin>("Qr");

export default Qr;