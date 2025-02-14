import { useAuth0 } from '@auth0/auth0-react';
import AppRouter from "./router/AppRouter"

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <AppRouter />;
}

export default App;
