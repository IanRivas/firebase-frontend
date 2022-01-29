import { useAuth } from '../context/authContext';

export function Home() {
  const { user, logout, loading } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
