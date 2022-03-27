import { useState, useEffect } from 'react';
import EventEmitter from './utils/EventEmitter';
import Label from './Label';
import { Events } from './events';

type Log = {
    id: number;
    text: string;
    created: Date;
};

export default function LabelContainerComponent() {

    const [logs, setLogs] = useState<Array<Log>>([]);

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

    return (
        <div>
            {logs.map((Log: Log, index) => <Label key={index} log={Log}></Label>)}
        </div>
    )
}