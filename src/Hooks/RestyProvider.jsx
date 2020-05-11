import React, { createContext, useState } from 'react';
import { makeRequest } from '../Services/makeRequest';
import { useLocalStorage } from '../Hooks/localStorage';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
const [url, setUrl] = useState('');
const [method, setMethod] = useState('GET');
const [body, setBody] = useState('');
const [response, setResponse] = useState({});
const [history, setHistory] = useLocalStorage('history', []);

const  onChange = ({ target }) => {
if(target.name === 'url') setUrl(target.value);
if(target.name === 'method') setMethod(target.value);
if(target.name === 'body') setBody(target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    makeRequest(url, method, body)
    .then(res => {
        setResponse(res);
    setHistory(prevHistory => [{ url, method },...prevHistory]);
    });
}
    const context = {
        url,
        method,
        body, 
        response,
        history,
        onChange,
        onSubmit 
    }

    return (
       
        <RestyContext.Provider value={ context }>
            {children}
        </RestyContext.Provider>
    );
};

export const useResty = () => {
    const context = useContext(RestyContext);
    return context;
}