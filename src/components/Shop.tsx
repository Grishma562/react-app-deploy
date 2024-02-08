import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from '../state/action-creators';


const Shop: React.FC = () => {
  const amount = useSelector((state: any) => state.amount.amount);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(depositMoney(100) as any);
  };

  const handleWithdraw = () => {
    dispatch(withdrawMoney(100) as any);
  };

  return (
    <div>
      <h2>Task 1</h2>
      <p>Your Balance: {amount}</p>
      <button className='btn btn-primary mx-2' onClick={handleDeposit}>+</button>
      <button className='btn btn-primary mx-2' onClick={handleWithdraw}>-</button>
    </div>
    
  );
};

export default Shop;
