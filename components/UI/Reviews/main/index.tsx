"use client";
import { Rating } from "@/lib/types/global";
import { FC, useMemo } from "react";
import Review from "./review-box";

type Props = { reviews: Rating[] };

const Reviews: FC<Props> = ({ reviews: mainReviews }) => {
  const reviews = useMemo(() => mainReviews, [mainReviews]);

  return (
    <div className="divide-y divide-zinc-300 dark:divide-zinc-500">
      {reviews.map((review, id) => (
        <Review {...review} key={id} />
      ))}
    </div>
  );
};

export default Reviews;
