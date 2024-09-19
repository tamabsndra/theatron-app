"use client"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function CarouselBannerMovie(){
    const plugin = [
        Autoplay({ delay: 2000, stopOnInteraction: false }),
        Fade()
    ]
 
  return (
    <Carousel
      plugins={plugin}
      className="w-full aspect-video bg-app-white" 
      opts={{
            align: "center",
            loop: true,
            containScroll: false,
        }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 overflow-hidden">
              <Card>
                <CardContent className="flex flex-col bg-app-grey rounded-sm items-center px-4 py-5 sm:p-6 justify-center p-6">
                  <span className="text-xl font-semibold">"original_title": "Deadpool & Wolverine"</span>
                  <span className="font-semibold">"overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        
    )
}