import React, { useCallback, useState } from "react";
import Optimize from "./Optimize";

interface ParentProps {}

const ParentComponent: React.FC<ParentProps> = () => {
    const [counter, setCounter] = useState<number>(0);
    const [input, setInput] = useState<string>("");

    const updateCounterFromChild = useCallback(() => setCounter((prevCounter) => prevCounter + 1), []);
    console.log('Parent is rendering');
    return (
        <div>
            <h1>Hello from Parent: {counter}</h1>
            <button className="btn btn-primary" onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button><br/>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} /><br/>
            <Optimize counter={counter} updateCounter={updateCounterFromChild} />
        </div>
    );
};

export default ParentComponent;
