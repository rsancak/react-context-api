import React, { useContext } from 'react'
import {GlobalContext} from './GlobalContext';

function CompChild() {
    const data = useContext(GlobalContext);
    return (
        <h1>
            {data}
        </h1>
    )
}

export default CompChild;
