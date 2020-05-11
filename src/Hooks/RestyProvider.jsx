import React, { createContext } from 'react';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {

    return (
        <RestyContext.Provider value={}>
            {children}
        </RestyContext.Provider>
    );
};
