import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./components/login/Login";
import ProfilePage from "./pages/profilePage";
import Register from "./components/register/Register";
import Navbar from "./components/nav/NavBar";
import MySeriesPage from "./pages/mySeriesPage";
import AnimePage from "./pages/animePage";
import AnimeDetailPage from "./pages/animeDetailPage";
import Footer from "./components/footer/Footer";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const queryClient = new QueryClient();

  return (
    <div className="bg-[#070F2B] w-full min-h-svh flex flex-col justify-between">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {!isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mySeries" element={<MySeriesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/anime" element={<AnimePage />} />
                <Route path="/anime/:animeId" element={<AnimeDetailPage />} />
              </Routes>
              <Footer />
            </>
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
