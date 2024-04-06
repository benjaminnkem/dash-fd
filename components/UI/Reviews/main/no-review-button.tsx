"use client";

import Button from "@/components/Common/Buttons";
import useStore from "@/lib/store/global.store";

const NoReviewButton = () => {
  const { updateData } = useStore();
  const clearReviews = () => updateData("reviews", []);

  return (
    <div className="py-4 grid place-content-center">
      <Button text="EMULATE NO REVIEWS" className="mx-auto" onClick={clearReviews} />
    </div>
  );
};

export default NoReviewButton;
