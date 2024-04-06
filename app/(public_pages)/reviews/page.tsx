"use client";
import ImagePreview from "@/components/UI/Reviews/main/image-preview";
import Reviews from "@/components/UI/Reviews/main";
// import { dummyReviews } from "@/lib/data/reviews";
import NoReview from "@/components/UI/Reviews/main/no-review";
import NoReviewButton from "@/components/UI/Reviews/main/no-review-button";
import useStore from "@/lib/store/global.store";

const Page = () => {
  const { reviews } = useStore();

  return (
    <main>
      {reviews && reviews.length > 0 ? (
        <div>
          <div className="md:grid flex flex-col-reverse lg:grid-cols-5 md:grid-cols-4 container gap-8 py-10">
            <div className="md:col-span-3">
              <Reviews reviews={reviews} />
            </div>
            <div className="lg:col-span-2">
              <ImagePreview />
            </div>
          </div>

          <NoReviewButton />
        </div>
      ) : (
        <NoReview />
      )}
    </main>
  );
};

export default Page;
