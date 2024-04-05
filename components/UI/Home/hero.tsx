import Button from "@/components/Common/Buttons";
import { Search } from "lucide-react";
import RatingSlideshow from "./rating-slideshow";

const Hero = () => {
  return (
    <header>
      <div className="h-screen container flex items-center -mt-8 mb-4">
        <div className="space-y-8 max-w-xl">
          <h1 className="font-bold text-7xl">Find a place you will love to live!</h1>
          <p className="text-xl text-zinc-800">
            See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
          </p>

          <div className="space-y-2">
            <div className="border gap-3 text-[#484851] border-[#d4dcf1] w-full rounded-md flex items-center px-3 bg-[#f3f7fe] overflow-hidden">
              <Search size={18} />
              <input
                type="text"
                placeholder="Enter Address"
                className="w-full py-3 bg-transparent flex-grow placeholder:text-[#484851]"
              />
            </div>
            <Button text="SEARCH" variant="filled" rounded="lg" className="rounded-sm" />
          </div>
        </div>
        <RatingSlideshow />
      </div>
    </header>
  );
};

export default Hero;
