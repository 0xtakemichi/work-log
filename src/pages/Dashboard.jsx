import LogoutButton from '../components/LogoutButton/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
const Dashboard = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>Bienvenido al tablero, esta es una ruta protegida</p>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <LogoutButton />
    </>
  );
};

export default Dashboard;
