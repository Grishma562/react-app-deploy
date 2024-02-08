import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../state/action-creators/asyncAction';


const AsyncFunction: React.FC = () => {
  const usersData = useSelector((state: any) => state.async.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  return (
    <div>
        <h2>Task 2</h2>
      {usersData ? (
        <ul>
          {usersData.map((user: any, index: number) => (
            <li key={index}>
              <strong>Username:</strong> {user.username},<br/> <strong>Name:</strong> {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AsyncFunction;
