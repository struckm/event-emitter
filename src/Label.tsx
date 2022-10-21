import React from 'react';
import './App.css';
import EventEmitter from './utils/EventEmitter';
import { Events } from './events';

type Log = {
    id: number;
    text: string;
    created: Date;
};

interface LabelProps {
    log: Log;
}

const Label: React.FC<LabelProps> = ({log}) => {

    const onLogClick = (e: any) => {
        EventEmitter.emit(Events.LogClicked, log);
    }

    return (
        <div style={{cursor: "pointer"}} onClick={onLogClick}>
            <div>
                {log.text + ' ' + log.id} 
            </div>
        </div>
    );
}

export default Label;