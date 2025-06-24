
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";

type Tip = {
  title: string;
  text: string;
};
const fetchTips = async (): Promise<Tip[]> => {
  const res = await fetch("/tips.json");
  return res.json();
};

const MentalHealthCarousel = () => {
  const { data: tips, isLoading, isError } = useQuery({ queryKey: ["tips"], queryFn: fetchTips });

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (isError) return <div className="text-center mt-4 text-red-500">Failed to load tips. Please try again later.</div>;
  if (!tips || tips.length === 0) return <div className="text-center mt-4">No tips available.</div>;

  return (
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
};

export default MentalHealthCarousel;
