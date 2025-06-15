
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const tips = [
  {
    title: "Take a Screen Break",
    text: "Every 30 minutes, stand up or stretch. Give your eyes and mind a rest.",
  },
  {
    title: "Curate Your Feed",
    text: "Unfollow accounts that make you feel bad about yourself.",
  },
  {
    title: "Mute Toxic Content",
    text: "Hide or mute comments and posts that stress you out.",
  },
  {
    title: "Phone-Free Meals",
    text: "Try leaving your phone in another room during meals. Enjoy the moment.",
  },
];

const MentalHealthCarousel = () => (
  <div className="w-full max-w-md mx-auto mt-4">
    <Carousel>
      <CarouselContent>
        {tips.map((tip, i) => (
          <CarouselItem key={i} className="bg-purpleblue-50 rounded-xl shadow p-5 text-center mx-2">
            <div className="text-lg font-bold text-purpleblue-700 mb-2">{tip.title}</div>
            <div className="text-base text-purpleblue-600">{tip.text}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default MentalHealthCarousel;
