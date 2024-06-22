import { AuthProvider } from "./context/AuthContext";

export default function ParentProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthProvider>{children}</AuthProvider>;
}
