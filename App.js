import React from 'react';
import {Button, NativeModules, View, NativeAppEventEmitter} from 'react-native';
import BleManager from 'react-native-ble-manager';
import Scan from './app/Scan';

export default function FirstApp() {
  return <Scan />;
}
