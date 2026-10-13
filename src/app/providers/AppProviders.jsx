import { AuthProvider } from "../../core/auth/AuthContext";

export function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
