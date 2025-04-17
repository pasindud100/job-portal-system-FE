// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(null);
//     const [role, setRole] = useState(null);

//     const logout = () => {
//         setToken(null);
//         setRole(null);
//         localStorage.removeItem('jwtToken');
//     };

//     return (
//         <AuthContext.Provider value={{ token, setToken, role, setRole, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };