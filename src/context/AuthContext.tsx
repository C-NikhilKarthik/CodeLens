// "use client";
// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "@/firebase";
// import {
//   GithubAuthProvider,
//   signInWithPopup,
//   signOut,
//   User,
// } from "firebase/auth";

// interface AuthContextType {
//   user: User | null;
//   githubSignIn: () => Promise<void>;
//   logout: () => Promise<void>;
// }

// const authContextDefaultValues: AuthContextType = {
//   user: null,
//   githubSignIn: async () => {},
//   logout: async () => {},
// };

// const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

// interface AuthContextProviderProps {
//   children: ReactNode;
// }

// export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   const githubSignIn = async () => {
//     const provider = new GithubAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("GitHub sign-in error:", error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, githubSignIn, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth() {
//   return useContext(AuthContext);
// }
