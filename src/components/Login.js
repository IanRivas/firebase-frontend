import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
      // if (err.code === 'auth/internal-error') {
      //   setError('Correo Invalido');
      // }
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@company"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="******"
          name="password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
