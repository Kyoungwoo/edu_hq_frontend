import { registerPlugin } from '@capacitor/core';
export interface NfcPlugin {
  permission(): Promise<{ permission: "disabled" | "enabled" | null }>;
  getData(): Promise<{ message:string }>;
}

const Nfc = registerPlugin<NfcPlugin>("Nfc");

export default Nfc;