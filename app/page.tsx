import Navbar from "./navbar";
import HorizontalScrollMovieList from "./HorizontalScrollMovieList";
import CarouselBannerMovie from "./CarouselBannerMovie";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-10">
      <Navbar/>
      <main className="flex flex-col mt-8 gap-8 row-start-2 items-center sm:items-start">
        <CarouselBannerMovie/>
        <HorizontalScrollMovieList/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
