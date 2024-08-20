import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-full w-full flex justify-center item-center">
      <div className="max-w-[1400px] md:w-5/6 w-full md:h-[20%] bg-[#1B1A55] md:m-10 md:rounded-2xl p-5 flex flex-col items-center justify-center">
        <h1 className="text-white text-xl font-bold text-center m-5">Track, share, and discover your favorite anime, and manga with SeriesHub</h1>
        <p className="text-white text-center m-5">
          Welcome to SeriesHub - the ultimate hub for all entertainment lovers! Whether you’re an anime enthusiast, or a manga buff, we’ve got you covered. Here, you can easily keep track of your
          favorite anime, manga's. Whether you’re currently watching a series, planning to start something new, or simply want a record of what you’ve already seen or read, SeriesHub makes it easy.
        </p>

        <p className="text-white text-center m-5">
          But there's more! With SeriesHub, you can also add friends and see what they’re watching or reading. Discover new manga's and anime's by following your friends activity and share your own
          experiences with them. Whether you're looking for recommendations or just want to connect with others who share your passion, SeriesHub is the place for you! Join our community and start
          tracking your entertainment journey today.
        </p>
        <Link to={`/anime`}>
          <Button className="bg-white rounded-3xl font-bold m-4">
            Start Now
            <ChevronRight className="bg-[#1B1A55] rounded-full ml-3 animate-bounce" size={30} color="white" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
