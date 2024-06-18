import AnimeCard from "@/components/homePage/AnimeCard";
import useAnimeSeries from "../hooks/useAnime";
import Loading from "@/components/ui/loading";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function HomePage() {
	const { logout, userId } = useContext(AuthContext);

	const { animeSeries, isError, isLoading } = useAnimeSeries(userId);

	if (isError) {
		return <p>Error!</p>;
	}

	if (isLoading) {
		return <Loading />;
	}

	const handleLogout = () => {
		logout();
	};

	return (
		<div className="flex justify-center items-center flex-wrap">
			{animeSeries?.map((animeSerie) => (
				<AnimeCard animeSerie={animeSerie} key={animeSerie._id} />
			))}
			<Button onClick={() => handleLogout()}>Logout</Button>
		</div>
	);
}

export default HomePage;
