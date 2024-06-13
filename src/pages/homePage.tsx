import AnimeCard from "@/components/homePage/AnimeCard";
import useAnimeSeries from "../hooks/useAnime";
import Loading from "@/components/ui/loading";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function HomePage() {
	const { userId, isAuthenticated } = useContext(AuthContext);
	const { animeSeries, isError, isLoading } = useAnimeSeries();

	if (!isAuthenticated) {
		return <p>You must log in to view this page.</p>;
	}

	if (isError) {
		return <p>Error!</p>;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="flex justify-center items-center flex-wrap">
			{animeSeries?.map((animeSerie) => (
				<AnimeCard animeSerie={animeSerie} />
			))}
			{userId}
		</div>
	);
}

export default HomePage;
