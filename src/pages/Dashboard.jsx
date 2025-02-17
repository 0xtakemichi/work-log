import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
      <p>Bienvenido al tablero {user.email}</p>
      <div>
        <img src={user.picture} alt={user.name} />
      </div>
    </>
  );
};

export default Dashboard;
