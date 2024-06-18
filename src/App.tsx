import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./components/login/Login";
import ProfilePage from "./pages/profilePage";
import Register from "./components/register/Register";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const queryClient = new QueryClient();

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            {!isAuthenticated ? (
              <div className="flex justify-center items-center h-screen w-full">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
