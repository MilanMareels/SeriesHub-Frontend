import AnimeCard from "@/components/homePage/AnimeCard";
import useAnimeSeries from "../hooks/useAnime";
import Loading from "@/components/ui/loading";

function HomePage() {
	const { animeSeries, isError, isLoading } = useAnimeSeries();

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
		</div>
	);
}

export default HomePage;
