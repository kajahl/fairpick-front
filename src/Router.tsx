import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import ProtectedRoute from "./components/ProtectedRoute.component";
import { useAuthContext } from "./contexts/Auth.context";
import ClassicLayout from "./layouts/Classic.layout";
import MainLayout from "./layouts/Main.layout";
import AboutPage from "./pages/About.page";
import NotFoundPage from "./pages/NotFound.page";
import ContactPage from "./pages/Contact.page";

function Router() {
  const authContext = useAuthContext();

  return authContext.isLoading ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route element={<ClassicLayout />}>
          <Route path="/home" element={<ProtectedRoute element={<>Home</>} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
