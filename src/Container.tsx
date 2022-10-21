import React, { useEffect, useState } from 'react';
import './App.css';
import EventEmitter from './utils/EventEmitter';
import { Events } from './events';

type Log = {
    id: number;
    text: string;
    created: Date;
};

interface ContainerProps {
    children: any;
}

const Container: React.FC<ContainerProps> = ({children}) => {

    const [log, setLog] = useState<Log>({id: 0, text: '', created: new Date()});

    const onLogClicked = (log: Log) => {
        setLog(log);
    }

    useEffect(() => {
        const listener = EventEmitter.addListener(Events.LogClicked, onLogClicked);

        return () => {
            listener.remove();
        }
    }, []);

    return (
        <div className="App-header">
            <div>
                This is the container component.
            </div>
            <div>
                Selected Label: {log.text + ' ' + log.id}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Container;