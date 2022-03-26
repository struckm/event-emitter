import { useState, useEffect } from 'react';
import EventEmitter from './utils/EventEmitter';


type Log = {
    text: string;
    created: Date;
};

export default function LabelComponent() {

    useEffect(() => {
        const onNewLog = (log: Log) => {
            setLogs(prevValue => ([
                ...prevValue,
                log
            ]))
        }

        const listener = EventEmitter.addListener('NewLog', onNewLog);

        return () => {
            listener.remove();
        }
    }, []);

    const [logs, setLogs] = useState<Array<Log>>([]);

    return (
        <div>
            {logs && logs.map((Log: Log) => <div>{Log.text}</div>)}
        </div>
    )
}