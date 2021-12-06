import { registerPlugin } from '@capacitor/core';

export interface nfcPlugin {
  nfc(options: { value: string }): Promise<{ value: string }>;
  // getData(): Promise<{ndefMessage:string}>;
}
const Nfc = registerPlugin<nfcPlugin>('nfc');

 export default Nfc;