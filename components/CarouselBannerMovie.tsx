"use client"

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import FadePlugin from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFetchAllTrending } from '@/hooks/useFetchAllTrending'

export default function CarouselHero() {
  const { trendings, loading, error } = useFetchAllTrending();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [FadePlugin(), Autoplay()])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative w-full aspect-21/9">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {trendings.slice(0,5).map((trending, index) => (
            <div className="relative flex-[0_0_100%]" key={index}>
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${trending.backdrop_path})`,
                }}
                className="w-full aspect-21/9 bg-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-star bg-gradient-to-t from-app-black text-app-white pb-10 px-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{trending.original_name == null ? trending.original_title : trending.original_name}</h2>
                <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-2 sm:mb-4">{trending.overview}</p>
                <div className='flex gap-x-2'>
                  <Button className='bg-app-red text-app-white'>Play Now</Button>
                  <Button className='bg-app-yellow'>Details</Button>
                  <Button className='bg-transparent border border-b-2'>Add to Favorite</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute border-app-white/30 backdrop-blur-md text-app-white hover:text-app-black left-4 top-1/2 rounded-full transform -translate-y-1/2 hover:bg-opacity-25"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute border-app-white/30 backdrop-blur-md text-app-white hover:text-app-black right-4 top-1/2 rounded-full transform -translate-y-1/2 hover:bg-opacity-25"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-10 right-4 transform -translate-x-1/2 flex space-x-2">
        {trendings.slice(0,5).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}