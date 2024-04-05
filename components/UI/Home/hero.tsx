"use client";
import Button from "@/components/Common/Buttons";
import { Search } from "lucide-react";
import RatingSlideshow from "./rating-slideshow";
import { motion } from "framer-motion";
import { fromBottom, parentVar } from "@/lib/utils/variants";

const Hero = () => {
  return (
    <header>
      <motion.div
        {...parentVar}
        initial="initial"
        animate="animate"
        className="h-screen container flex items-center -mt-8 mb-4"
      >
        <motion.div variants={parentVar} initial="initial" animate="animate" className="space-y-8 max-w-xl">
          <motion.h1 variants={fromBottom} className="font-bold text-7xl">
            Find a place you will love to live!
          </motion.h1>
          <motion.p variants={fromBottom} className="text-xl text-zinc-800">
            See through the lenses of people who have lived or visited the neighborhood you might have in mind.
          </motion.p>

          <motion.div variants={fromBottom} className="space-y-2">
            <div className="border gap-3 text-[#484851] border-[#d4dcf1] w-full rounded-md flex items-center px-3 bg-[#f3f7fe] overflow-hidden">
              <Search size={18} />
              <input
                type="text"
                placeholder="Enter Address"
                className="w-full py-3 bg-transparent flex-grow placeholder:text-[#484851]"
              />
            </div>
            <Button text="SEARCH" variant="filled" rounded="lg" className="rounded-sm" />
          </motion.div>
        </motion.div>

        <RatingSlideshow />
      </motion.div>
    </header>
  );
};

export default Hero;
