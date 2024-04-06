"use client";

import Button from "@/components/Common/Buttons";
import { useModal } from "@/lib/providers/modal-provider";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import ReviewModal from "../modal/review-modal";

const ReviewNavPrev = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const pathname = usePathname();
  const { showModal } = useModal();

  const showReviewModal = () => showModal(<ReviewModal />);

  if (pathname.startsWith("/reviews"))
    return (
      <div className="container py-4 space-y-4">
        <div className="flex items-center justify-between flex-wrap space-y-2">
          <div className="space-y-1">
            <p className="text-2xl font-medium">Bonny and Clyde Street, Ajao Estate, Lagos</p>
            <p>
              <span className="font-semibold">“450”</span> Reviews (People are raving about the selected location)
            </p>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button text="LEAVE A REVIEW" variant="filled" className="rounded-md" onClick={showReviewModal} />
            <div
              className={`px-3 py-2 rounded-lg grid place-content-center duration-200 border-[2.1px] border-primary/80 cursor-pointer ${
                bookmarked ? "text-white bg-primary" : "text-primary"
              }`}
              onClick={() => setBookmarked((prev) => !prev)}
            >
              <Bookmark />
            </div>
            <div className="px-3 py-2 rounded-lg grid place-content-center border-[2.1px] border-primary/80 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.7885 17.2821L16.1042 17.4659L16.3753 17.2209C16.8129 16.8254 17.3762 16.58 18 16.58C19.3339 16.58 20.42 17.6661 20.42 19C20.42 20.3339 19.3339 21.42 18 21.42C16.6661 21.42 15.58 20.3339 15.58 19C15.58 18.8247 15.604 18.6439 15.6464 18.4658L15.7322 18.1053L15.4122 17.9183L8.29224 13.7583L7.97224 13.5713L7.7003 13.8231C7.24562 14.2441 6.65469 14.5 6 14.5C4.61614 14.5 3.5 13.3839 3.5 12C3.5 10.6161 4.61614 9.5 6 9.5C6.65469 9.5 7.24562 9.75589 7.7003 10.1769L7.97196 10.4284L8.29182 10.242L15.3418 6.13196L15.6558 5.94892L15.5786 5.59378C15.531 5.37472 15.5 5.1861 15.5 5C15.5 3.61614 16.6161 2.5 18 2.5C19.3839 2.5 20.5 3.61614 20.5 5C20.5 6.38386 19.3839 7.5 18 7.5C17.3453 7.5 16.7544 7.24411 16.2997 6.82312L16.028 6.57157L15.7082 6.75804L8.65818 10.868L8.34421 11.0511L8.42141 11.4062C8.46903 11.6253 8.5 11.8139 8.5 12C8.5 12.1861 8.46903 12.3747 8.42141 12.5938L8.34415 12.9492L8.65848 13.1321L15.7885 17.2821Z"
                  stroke="#3366FF"
                />
              </svg>
            </div>
          </div>
        </div>

        <Categories />

        {/* mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <Button text="LEAVE A REVIEW" variant="filled" className="rounded-md" onClick={showReviewModal} />
          <div
            className={`px-3 py-2 rounded-lg grid place-content-center duration-200 border-[2.1px] border-primary/80 cursor-pointer ${
              bookmarked ? "text-white bg-primary" : "text-primary"
            }`}
            onClick={() => setBookmarked((prev) => !prev)}
          >
            <Bookmark />
          </div>
          <div className="px-3 py-2 rounded-lg grid place-content-center border-[2.1px] border-primary/80 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.7885 17.2821L16.1042 17.4659L16.3753 17.2209C16.8129 16.8254 17.3762 16.58 18 16.58C19.3339 16.58 20.42 17.6661 20.42 19C20.42 20.3339 19.3339 21.42 18 21.42C16.6661 21.42 15.58 20.3339 15.58 19C15.58 18.8247 15.604 18.6439 15.6464 18.4658L15.7322 18.1053L15.4122 17.9183L8.29224 13.7583L7.97224 13.5713L7.7003 13.8231C7.24562 14.2441 6.65469 14.5 6 14.5C4.61614 14.5 3.5 13.3839 3.5 12C3.5 10.6161 4.61614 9.5 6 9.5C6.65469 9.5 7.24562 9.75589 7.7003 10.1769L7.97196 10.4284L8.29182 10.242L15.3418 6.13196L15.6558 5.94892L15.5786 5.59378C15.531 5.37472 15.5 5.1861 15.5 5C15.5 3.61614 16.6161 2.5 18 2.5C19.3839 2.5 20.5 3.61614 20.5 5C20.5 6.38386 19.3839 7.5 18 7.5C17.3453 7.5 16.7544 7.24411 16.2997 6.82312L16.028 6.57157L15.7082 6.75804L8.65818 10.868L8.34421 11.0511L8.42141 11.4062C8.46903 11.6253 8.5 11.8139 8.5 12C8.5 12.1861 8.46903 12.3747 8.42141 12.5938L8.34415 12.9492L8.65848 13.1321L15.7885 17.2821Z"
                stroke="#3366FF"
              />
            </svg>
          </div>
        </div>
      </div>
    );
};

const Categories = () => {
  const categories = [
    "schools",
    "hospitals",
    "resort park",
    "shopping malls",
    "airport",
    "train station",
    "nightlife",
    "public wifi",
    "parking lot",
    "security",
    "public transport",
    "bus station",
    "quiet",
    "schools",
    "hospitals",
    "resort park",
    "shopping malls",
    "airport",
    "train station",
    "nightlife",
    "public wifi",
  ];

  const ref = useRef<HTMLDivElement>(null);

  const scrollRight = () => ref.current && (ref.current.scrollLeft += 500);
  const scrollLeft = () => ref.current && (ref.current.scrollLeft -= 500);

  return (
    <div className="relative">
      <ChevronLeft className="absolute sm:top-[15%] top-[10%] -left-6 cursor-pointer" size={27} onClick={scrollLeft} />
      <div className="flex items-center overflow-x-auto gap-5 hide_scroll scroll-smooth" ref={ref}>
        {categories.map((category, id) => (
          <div
            key={id}
            className="px-2 py-1 border flex-shrink-0 rounded-md bg-white dark:bg-[#242428] dark:border-zinc-300 text-sm md:text-base"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
      <ChevronRight
        className="absolute sm:top-[15%] top-[10%] -right-6 cursor-pointer"
        size={27}
        onClick={scrollRight}
      />
    </div>
  );
};

export default ReviewNavPrev;
