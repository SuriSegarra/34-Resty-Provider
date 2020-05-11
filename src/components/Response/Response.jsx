import React from 'react';
import { useResty } from '../../Hooks/RestyProvider';

const Response = ({ response }) => {
    const { response } = useResty();
    return (
        
            <pre className={styles.Response}>
              {JSON.stringify(response, null, 2)}
            </pre>
    
    );
}

export default Response;