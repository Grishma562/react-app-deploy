import React, { useState } from "react";
import { authenticateUser, User } from "../mockbackend";

const AuthComponent: React.FC<{ onLogin: (user: User) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await authenticateUser(username, password);
      onLogin(user);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="container mb-4">
      <h2>Task Four</h2>
      <div className="card" style={{width:'370px'}}>
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          {error && <div className="mt-3 text-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
