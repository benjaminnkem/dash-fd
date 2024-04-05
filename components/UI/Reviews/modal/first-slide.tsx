import { opacityVar } from "@/lib/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { SlideProps } from "./review-modal";
import { ChevronDown } from "lucide-react";

const FirstSlide: FC<SlideProps> = ({ handleNext, handlePrevious }) => {
  const [showAmenities, setShowAmenities] = useState(false);

  const toggleShowAmenities = () => setShowAmenities((prev) => !prev);

  return (
    <motion.div {...opacityVar} key={"modal-init"} className="mx-auto bg-white rounded-md shadow-md p-5 space-y-4">
      <p className="font-medium text-lg text-center">Review Location</p>
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="font-semibold text-xl">Bonny and Clyde Street, Ajao Estate, Lagos</p>
          <div className="relative">
            <div
              className="p-3 flex items-center justify-between cursor-pointer w-full bg-[#f3f7fe]"
              onClick={toggleShowAmenities}
            >
              <p>Select Amenities</p>
              <ChevronDown className={`text-zinc-500 duration-300 ${showAmenities && "rotate-180"}`} />
            </div>

            <AnimatePresence mode="wait">
              {showAmenities && (
                <motion.div
                  {...opacityVar}
                  className="p-4 bg-[#f3f7fe] absolute top-full w-full left-0 rounded-b-md"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Rate Location</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstSlide;
