import React from 'react';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'
import Button from './Button';
import Input from './Input';


const Counter = ({ className }) => {
    const [count, setcount] = useState(1)
    const increment = () => {
        setcount(count + 1)
    }
    const decriment = () => {
        if (count !== 1) {
            setcount(count - 1)
        }
    }

    return (
        <div className={`d-flex ${className}`}>
            <Button onClick={decriment} className="btn decriment" >
                <FaMinus height="9px" width="9px"  color='#f27a1a'/>
            </Button>
            <Input type="text" className="counter-content" value={count} />
            <Button onClick={increment} className="btn increment">
                <FaPlus height="9px" width="9px"  color='#f27a1a' />
            </Button>
        </div>
    )
}

export default Counter