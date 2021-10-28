import React from 'react';
import Aunt from '../Aunt/Aunt';
import Uncle from '../Uncle/Uncle';
import Father from './Father/Father';

const Grandfather = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>This is grand father</h2>
            <h5>House: {house}</h5>
            <div style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunt house={house}></Aunt>
            </div>
        </div>
    );
};

export default Grandfather;