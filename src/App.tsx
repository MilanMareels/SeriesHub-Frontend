import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./components/login/Login";

function App() {
	const { isAuthenticated } = useContext(AuthContext);
	const queryClient = new QueryClient();

	if (!isAuthenticated) {
		return (
			<div className="flex justify-center items-center h-screen w-full">
				<Login />
			</div>
		);
	}

	return (
		<>
			<div className="flex justify-center items-center h-screen w-full">
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</div>
		</>
	);
}

export default App;
