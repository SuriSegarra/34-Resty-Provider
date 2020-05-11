import React, { createContext, useState } from 'react';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
const [url, setUrl] = useState('');
const [method, setMethod] = useState('GET');
const [body, setBody] = useState('');

const onChange = ({ target }) => {
if(target.name === 'url') setUrl(target.value);
if(target.name === 'method') setMethod(target.value);
if(target.name === 'body') setBody(target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    makeRequest(url, method, body)
    .then(res => console.log(res));
}
    return (
        //context
        <RestyContext.Provider value={ url, method, body, onChange, onSubmit }>
            {children}
        </RestyContext.Provider>
    );
};

export const useResty = () => {
    const context = useContext(RestyContext);
    return context;
}