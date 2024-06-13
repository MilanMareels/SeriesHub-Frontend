import React, { useState } from "react";

interface AuthContextType {
	isAuthenticated: boolean;
	userId: string;
	setUserId: (userId: string) => void;
	login: () => void;
	logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
	isAuthenticated: false,
	userId: "",
	login: () => {},
	logout: () => {},
	setUserId: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [userId, setUserId] = useState<string>("");

	const login = () => {
		setIsAuthenticated(true);
	};

	const logout = () => {
		setIsAuthenticated(false);
	};

	return <AuthContext.Provider value={{ isAuthenticated, userId, setUserId, login, logout }}>{children}</AuthContext.Provider>;
};
