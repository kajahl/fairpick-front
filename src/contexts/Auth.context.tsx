import { faGoogle, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  JSX
} from "react";

// API Providers

const API_URL = import.meta.env.API_URL || "http://localhost:3000";

export interface AuthProvider {
  name: string;
  displayName: string;
  authUrl: string;
  colors: string;
  content: JSX.Element;
}

export const authProviders: AuthProvider[] = [
  { name: "google", displayName: "Google", authUrl: `${API_URL}/auth/google`, colors: "bg-blue-500 hover:bg-blue-700", content: <><FontAwesomeIcon icon={faGoogle} className="mr-2" />Login via Google</> },
  { name: "twitch", displayName: "Twitch", authUrl: `${API_URL}/auth/twitch`, colors: "bg-purple-500 hover:bg-purple-700", content: <><FontAwesomeIcon icon={faTwitch} className="mr-2" />Login via Twitch</> },
  { name: "guest", displayName: "Guest", authUrl: `${API_URL}/auth/guest`, colors: "bg-green-500 hover:bg-green-700", content: <>Continue as guest</> },
];

// Auth Context

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const response = await fetch(`${API_URL}/auth/me`, {
        //   credentials: "include",
        // });
        // if (response.ok) {
        //   const data = await response.json();
        //   setUser(data);
        // } else {
        //   setUser(null);
        // }

        setTimeout(() => {
            setUser({ id: "identyfikator", email: "test@email.com" });
        }, 250)
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const logout = async () => {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
