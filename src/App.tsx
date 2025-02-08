
import { AuthProvider } from "./contexts/Auth.context";
import Router from "./Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
