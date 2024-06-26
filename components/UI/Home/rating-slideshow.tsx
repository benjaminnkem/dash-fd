import RateCard from "@/components/Common/Cards/rate-card";
import { dummyTags } from "@/lib/data/reviews";
import { ReviewType } from "@/lib/types/global";
import { motion } from "framer-motion";

const opacityVar = {
  initial: { opacity: 0 },
  animate: { transition: { duration: 0.5, delay: 0.4 }, opacity: 1 },
  exit: { opacity: 1 },
};

const RatingSlideshow = () => {
  const generateRandomData = (): ReviewType => ({
    comments: 125,
    date: "5 Months ago",
    location: "Ikate, Lekki",
    description:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    tag: dummyTags[Math.floor(Math.random() * dummyTags.length)],
    dislikes: 2,
    likes: 24,
    rate: Math.floor(Math.random() * (1 + 5)) + 1, // random number btw 1 - 5
    username: "James T",
    image: "/images/home/review_image.png",
  });

  const dummyData: ReviewType[] = Array.from({ length: 10 }).map(generateRandomData);

  return (
    <motion.div
      variants={opacityVar}
      className="flex-grow min-w-[18rem] h-full mt-8 overflow-hidden relative sm:flex hidden justify-end"
      id="rating-cover"
    >
      <div className="flex gap-4 pr-8 -mr-8">
        {/* up */}
        <div className="space-y-[15px] xl:block hidden">
          <div className="space-y-4 slide-c">
            <div className="space-y-4">
              {dummyData.map((data, id) => (
                <RateCard {...data} key={id} />
              ))}
            </div>
          </div>
          <div className="space-y-4 slide-c">
            <div className="space-y-4">
              {dummyData.map((data, id) => (
                <RateCard {...data} key={id} />
              ))}
            </div>
          </div>
        </div>

        {/* down */}
        <div className="space-y-[15px]">
          <div className="space-y-4 slide-c-reverse">
            <div className="space-y-4">
              {dummyData.map((data, id) => (
                <RateCard {...data} key={id} />
              ))}
            </div>
          </div>
          <div className="space-y-4 slide-c-reverse">
            <div className="space-y-4">
              {dummyData.map((data, id) => (
                <RateCard {...data} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RatingSlideshow;
