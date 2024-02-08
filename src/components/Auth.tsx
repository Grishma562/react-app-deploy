import React, { useState } from "react";
import AuthComponent from "./AuthComponent";
import { User } from "../mockbackend";

const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container mt-5" style={{width:'450px', marginLeft:'-10px'}}>
      <div className="card">
        <div className="card-body">
          {user ? (
            <div>
              <h2 className="card-title">Welcome, {user.username}!</h2>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <AuthComponent onLogin={handleLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
