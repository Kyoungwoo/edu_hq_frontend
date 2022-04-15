import { registerPlugin } from '@capacitor/core';
import { GeolocationPlugin } from './geolocation.definitions';

const Geolocation = registerPlugin<GeolocationPlugin>('Geolocation');

export { Geolocation };