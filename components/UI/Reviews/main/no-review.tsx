"use client";
import Image from "next/image";
import Button from "@/components/Common/Buttons";
import { useModal } from "@/lib/providers/modal-provider";
import ReviewModal from "../modal/review-modal";
import useStore from "@/lib/store/global.store";
import { dummyReviews } from "@/lib/data/reviews";

const NoReview = () => {
  const { showModal } = useModal();
  const showReviewModal = () => showModal(<ReviewModal />);

  const { updateData } = useStore();
  const updateReviews = () => updateData("reviews", dummyReviews);

  return (
    <div className="min-h-[40rem] flex items-center justify-center">
      <div className="space-y-10">
        <Image src={"/images/reviews/no_review_.png"} alt="review" width={400} height={400} className="mx-auto" />
        <div className="text-center space-y-10">
          <p className="text-zinc-600 dark:text-zinc-200">Oops! No reviews yet.</p>
          <div className="flex items-center justify-center gap-2">
            <Button text="LEAVE A REVIEW" onClick={showReviewModal} />
            <Button text="EMULATE REVIEWS" variant="filled" onClick={updateReviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoReview;
