import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
	const queryClient = new QueryClient();

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
