import { fromTop, opacityVar } from "@/lib/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { SlideProps } from "./review-modal";
import { Check, ChevronDown } from "lucide-react";
import Button from "@/components/Common/Buttons";
import { useModal } from "@/lib/providers/modal-provider";
import toast from "react-hot-toast";

const amenitiesExample = [
  "Parking Lot",
  "Free Wifi",
  "Parking Lot",
  "Free Wifi",
  "Parking Lot",
  "Nightlife",
  "Pet Store",
  "Nightlife",
  "Pet Store",
  "Hospitals",
  "Childcare",
  "Hospitals",
  "Childcare",
  "Hospitals",
  "Adult Home",
  "Gym",
  "Adult Home",
  "Gym",
  "Adult Home",
  "Schools",
  "Security",
  "Schools",
  "Security",
  "Schools",
];

const FirstSlide: FC<SlideProps> = ({ handleNext }) => {
  const [showAmenities, setShowAmenities] = useState(false);
  const [rateSelected, setRateSelected] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [text, setText] = useState("");

  const { hideModal } = useModal();

  const setStars = (amount: number) => setRateSelected(amount);

  const toggleShowAmenities = () => setShowAmenities((prev) => !prev);

  const finish = () => {
    toast.custom(
      <div className="px-5 py-2 border border-[#279d27] bg-[#f2fdf2] rounded-md text-[#0f920f] flex items-center gap-2">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.1771 7.38723V8.00056C15.1763 9.43818 14.7108 10.837 13.85 11.9884C12.9892 13.1399 11.7793 13.9822 10.4007 14.3898C9.02204 14.7974 7.54859 14.7485 6.20006 14.2503C4.85154 13.7521 3.70019 12.8313 2.91772 11.6253C2.13526 10.4193 1.76361 8.9926 1.8582 7.5581C1.95279 6.1236 2.50855 4.75811 3.4426 3.66528C4.37665 2.57244 5.63894 1.81082 7.04121 1.49399C8.44348 1.17717 9.9106 1.32212 11.2238 1.90723"
            stroke="#0F920F"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1667 2.66602L8.5 9.33935L6.5 7.33935"
            stroke="#0F920F"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p>Review submitted</p>
      </div>
    );
    hideModal();
  };

  return (
    <motion.div {...opacityVar} key={"modal-init"} className="mx-auto bg-white rounded-md shadow-md p-5 space-y-4">
      <p className="font-medium text-lg text-center">Review Location</p>
      <div className="space-y-5">
        <div className="space-y-3 select-none">
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
                  {...fromTop}
                  className="p-4 bg-[#f3f7fe] z-10 max-h-[15rem] overflow-y-auto absolute top-full w-full left-0 rounded-b-md border border-zinc-200 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-sm gap-4"
                >
                  {amenitiesExample.map((amenity, id) => (
                    <Amenity amenity={amenity} key={id} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Rate Location</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: rateSelected }).map((_, id) => (
              <svg
                width="19.5"
                key={id}
                height="19.5"
                viewBox="0 0 12 12"
                fill="none"
                className="cursor-pointer"
                onClick={() => setStars(id + 1)}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                  fill="#FABB07"
                />
              </svg>
            ))}
            {Array.from({ length: 5 - rateSelected }).map((_, id) => (
              <svg
                width="24"
                height="24"
                key={id}
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer"
                onClick={() => setStars(id + 1 + rateSelected)}
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFC700"
                  fill-opacity="0.4"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-medium">Write Review</p>
          <textarea
            rows={5}
            placeholder="Write message..."
            className="w-full bg-transparent rounded-md resize-none border p-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`size-5 grid place-content-center border-zinc-400 select-none duration-300 rounded-md border cursor-pointer ${
              isAnonymous && "bg-primary border-primary"
            } text-white`}
            onClick={() => setIsAnonymous((prev) => !prev)}
          >
            <Check size={12} />
          </div>
          <p className="text-zinc-500">Post as Anonymous</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button text="SUBMIT" disabled={!text} fullWidth onClick={finish} />
          <Button text="CANCEL" onClick={hideModal} fullWidth />
        </div>
      </div>
    </motion.div>
  );
};

const Amenity = ({ amenity }: { amenity: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setChecked((prev) => !prev)}>
      <div
        className={`size-5 grid place-content-center border-zinc-400 select-none duration-300 rounded-md border cursor-pointer ${
          checked && "bg-primary border-primary"
        } text-white`}
      >
        <Check size={12} />
      </div>
      <p className="text-zinc-500">{amenity}</p>
    </div>
  );
};

export default FirstSlide;
