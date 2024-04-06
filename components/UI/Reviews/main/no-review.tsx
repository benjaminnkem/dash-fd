"use client";
import Image from "next/image";
import Button from "@/components/Common/Buttons";
import { useModal } from "@/lib/providers/modal-provider";
import ReviewModal from "../modal/review-modal";

const NoReview = () => {
  const { showModal } = useModal();
  const showReviewModal = () => showModal(<ReviewModal />);

  return (
    <div className="min-h-[40rem] flex items-center justify-center">
      <div className="space-y-10">
        <Image src={"/images/reviews/no_review_.png"} alt="review" width={400} height={400} className="mx-auto" />
        <div className="text-center space-y-10">
          <p className="text-zinc-600 dark:text-zinc-200">Oops! No reviews yet.</p>
          <Button text="LEAVE A REVIEW" className="mx-auto" onClick={showReviewModal} />
        </div>
      </div>
    </div>
  );
};

export default NoReview;
