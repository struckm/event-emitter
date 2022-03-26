import EventEmitter from './utils/EventEmitter';

export default function LinkComponent() {

    const createNewLog = (e: any) : void =>  {
        EventEmitter.emit('NewLog', {
            text: 'User saved',
            created: new Date()
        });
    }

    return (<div style={{cursor: "pointer"}} onClick={createNewLog}>Click on me!</div>);
}