import EventEmitter from './utils/EventEmitter';
import { Events } from './events';

export default function LinkComponent() {

    let id = 0;
    const createNewLog = (e: any) : void =>  {
        id++;
        EventEmitter.emit(Events.NewLog, {
            id: id,
            text: 'Log',
            created: new Date()
        });
    }

    return (<div style={{cursor: "pointer"}} onClick={createNewLog}>Click on me!</div>);
}