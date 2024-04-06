"use client";
import { ReviewType } from "@/lib/types/global";
import { FC, useMemo } from "react";
import Review from "./review-box";
import useStore from "@/lib/store/global.store";

type Props = { reviews: ReviewType[] };

const Reviews: FC<Props> = ({ reviews: mainReviews }) => {
  const { reviews } = useStore();

  return (
    <div className="divide-y divide-zinc-300 dark:divide-zinc-500">
      {reviews.map((review, id) => (
        <Review {...review} key={id} />
      ))}
    </div>
  );
};

export default Reviews;
