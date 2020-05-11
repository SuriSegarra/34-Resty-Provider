import React, { createContext, useState } from 'react';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
const [url, setUrl] = useState('');
const [method, setMethod] = useState('GET');
const [body, setBody] = useState('');
const [response, setResponse] = useState({});

const  onChange = ({ target }) => {
if(target.name === 'url') setUrl(target.value);
if(target.name === 'method') setMethod(target.value);
if(target.name === 'body') setBody(target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    makeRequest(url, method, body)
    .then(res => setResponse(res));
}
    const context = {
        url,
        method,
        body, 
        response,
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