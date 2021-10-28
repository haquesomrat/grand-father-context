import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>I am Somrat</h2>
            <h5>House:{house}</h5>
            <Special></Special>
        </div>
    );
};

export default Myself;