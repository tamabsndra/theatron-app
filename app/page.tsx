import Navbar from "../components/navbar";
import HorizontalScrollMovieList from "../components/HorizontalScrollMovieList";
import CarouselBannerMovie from "../components/CarouselBannerMovie";
import HorizontalScrollSeriesList from "../components/HorizontalScrollSeriesList";
import HorizontalScrollTopRatedSeries from "@/components/HorizontalScrollTopRatedSeries";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <header>
        <CarouselBannerMovie/>
      </header>
      <main className="flex flex-col p-8 pb-20 sm:p-10 gap-8 row-start-2 items-center sm:items-start">
        <HorizontalScrollMovieList/>
        <HorizontalScrollSeriesList/>
        <HorizontalScrollTopRatedSeries/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
