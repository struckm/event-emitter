import { EventEmitter } from 'fbemitter';

// declare interface IEventEmitter {
//     emitOne(eventType: string, ...args: any[]): void;
//     addListener(eventType: string, callback: Function): void;
//     addOnceListener(eventType: string, callback: Function): void;
//     removeAllListeners(eventType: string): void;
//     removeCurrentListener(): void;
//     removeListener(eventType: string, callback: Function): void;
// }

export default new EventEmitter();