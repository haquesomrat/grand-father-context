import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    const ornaments = useContext(RingContext);
    return (
        <div>
            <h1>This is special one:{ornaments}</h1>
        </div>
    );
};

export default Special;