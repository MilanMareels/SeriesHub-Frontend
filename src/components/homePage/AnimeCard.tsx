import { AnimeSerie } from "@/models/anime/Anime";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

interface AnimeCardPorps {
	animeSerie: AnimeSerie;
}

export default function AnimeCard({ animeSerie }: AnimeCardPorps) {
	return (
		<Card className="w-[350px] m-4" key={animeSerie._id}>
			<CardHeader>
				<CardTitle>{animeSerie.title}</CardTitle>
				<CardDescription>{animeSerie.genre[0]}</CardDescription>
			</CardHeader>
			<CardContent>
				{animeSerie.year} - {animeSerie.episodes}
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button variant="outline">Add</Button>
			</CardFooter>
		</Card>
	);
}
