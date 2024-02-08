import React, { memo, useMemo } from 'react';

interface OptimizeProps {
  counter: number;
  updateCounter: () => void;
}

const Optimize: React.FC<OptimizeProps> = memo(({ counter, updateCounter }) => {
  console.log("Child is rendering");

  const memoizedContent = useMemo(() => {
    return (
      <div>
        <h2>Child Component - {counter}</h2>
        <button className='btn btn-primary' onClick={updateCounter}>Click</button>
      </div>
    );
  }, [counter, updateCounter]);
  
  return memoizedContent;
});

export default Optimize;
